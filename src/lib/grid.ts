// Unified grid renderer — single source of truth for how each paper type draws.
// Used by the live preview ([slug].astro), asset generation (generate-assets.ts)
// and could back the preview PNGs. Pure geometry + string building; no pdf-lib here
// so the browser bundle stays small.

export type Prim =
  | { k: 'line'; x1: number; y1: number; x2: number; y2: number; bold?: boolean; color?: string }
  | { k: 'dot'; cx: number; cy: number; r: number }
  | { k: 'circle'; cx: number; cy: number; r: number; bold?: boolean }
  | { k: 'rect'; x: number; y: number; w: number; h: number; bold?: boolean }
  | { k: 'text'; x: number; y: number; str: string; size: number; anchor?: 'middle' };

// Parallel line family at angle deg, spacing sp, drawn long; SVG/PDF clip to the page.
function fam(P: Prim[], deg: number, sp: number, w: number, h: number, bold = false): void {
  const a = (deg * Math.PI) / 180;
  const dx = Math.cos(a);
  const dy = Math.sin(a);
  const nx = -Math.sin(a);
  const ny = Math.cos(a);
  const M = w + h + 1;
  const K = Math.ceil(M / sp) + 2;
  for (let k = -K; k <= K; k++) {
    const px = k * sp * nx;
    const py = k * sp * ny;
    P.push({ k: 'line', x1: px - M * dx, y1: py - M * dy, x2: px + M * dx, y2: py + M * dy, bold });
  }
}

function hexLines(P: Prim[], cx: number, cy: number, R: number): void {
  const pts: [number, number][] = [];
  for (let k = 0; k < 6; k++) {
    const a = (Math.PI / 3) * k;
    pts.push([cx + R * Math.cos(a), cy + R * Math.sin(a)]);
  }
  for (let i = 0; i < 6; i++) P.push({ k: 'line', x1: pts[i][0], y1: pts[i][1], x2: pts[(i + 1) % 6][0], y2: pts[(i + 1) % 6][1] });
}

const LOG_VALS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const LOG_MAX = Math.log10(100);

export function gridPrims(type: string, w: number, h: number, s: number, dotSize = 0.35): Prim[] {
  const P: Prim[] = [];
  const line = (x1: number, y1: number, x2: number, y2: number, bold = false, color?: string) =>
    P.push({ k: 'line', x1, y1, x2, y2, bold, color });

  switch (type) {
    case 'square-grid':
      for (let x = 0; x <= w + 1e-6; x += s) line(x, 0, x, h);
      for (let y = 0; y <= h + 1e-6; y += s) line(0, y, w, y);
      break;
    case 'isometric-grid':
    case 'triangle-grid':
      fam(P, 0, s, w, h);
      fam(P, 60, s, w, h);
      fam(P, 120, s, w, h);
      break;
    case 'dot-grid':
      for (let x = s; x < w; x += s) for (let y = s; y < h; y += s) P.push({ k: 'dot', cx: x, cy: y, r: dotSize });
      break;
    case 'hex-grid': {
      const R = s;
      const hx = 1.5 * R;
      const hy = Math.sqrt(3) * R;
      for (let row = 0; row * hy < h + hy; row++)
        for (let col = -1; col * hx < w + hx; col++)
          hexLines(P, col * hx + (row % 2 ? hx / 2 : 0), row * hy, R);
      break;
    }
    case 'polar': {
      const cx = w / 2;
      const cy = h / 2;
      const step = Math.min(Math.max(s, 4), 24);
      for (let r = step; r <= Math.min(w, h) / 2; r += step) P.push({ k: 'circle', cx, cy, r });
      for (let a = 0; a < 360; a += 15) {
        const rad = (a * Math.PI) / 180;
        line(cx, cy, cx + (Math.min(w, h) / 2) * Math.cos(rad), cy + (Math.min(w, h) / 2) * Math.sin(rad));
      }
      break;
    }
    case 'semi-log':
      for (let x = 0; x <= w + 1e-6; x += s) line(x, 0, x, h);
      for (const v of LOG_VALS) line(0, h - (h * Math.log10(v)) / LOG_MAX, w, h - (h * Math.log10(v)) / LOG_MAX);
      break;
    case 'log-log':
      for (const v of LOG_VALS) {
        line((w * Math.log10(v)) / LOG_MAX, 0, (w * Math.log10(v)) / LOG_MAX, h);
        line(0, h - (h * Math.log10(v)) / LOG_MAX, w, h - (h * Math.log10(v)) / LOG_MAX);
      }
      break;
    case 'lined-paper':
      for (let y = s; y < h; y += s) line(w * 0.1, y, w * 0.9, y);
      line(w * 0.16, 0, w * 0.16, h, true, '#ef4444');
      break;
    case 'coordinate-plane':
      for (let x = 0; x <= w + 1e-6; x += s) line(x, 0, x, h);
      for (let y = 0; y <= h + 1e-6; y += s) line(0, y, w, y);
      line(w / 2, 0, w / 2, h, true);
      line(0, h / 2, w, h / 2, true);
      break;
    case 'engineering':
      for (let x = 0; x <= w + 1e-6; x += s) line(x, 0, x, h);
      for (let y = 0; y <= h + 1e-6; y += s) line(0, y, w, y);
      P.push({ k: 'rect', x: w - 70, y: h - 40, w: 70, h: 40, bold: true });
      line(w - 70, h - 25, w, h - 25);
      line(w - 45, h - 25, w - 45, h);
      line(w - 70, h - 15, w, h - 15);
      break;
    case 'staff-paper': {
      const margin = 14;
      const gap = 2.4;
      const pitch = 30;
      for (let top = 18; top + 4 * gap < h - 10; top += pitch)
        for (let i = 0; i < 5; i++) line(margin, top + i * gap, w - margin, top + i * gap);
      break;
    }
    case 'number-grid': {
      const cols = 10;
      const rows = 10;
      const x0 = w * 0.06;
      const y0 = h * 0.07;
      const cw = (w - 2 * x0) / cols;
      const ch = (h - 2 * y0) / rows;
      let n = 1;
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++) {
          const x = x0 + c * cw;
          const y = y0 + r * ch;
          P.push({ k: 'rect', x, y, w: cw, h: ch });
          P.push({ k: 'text', x: x + cw / 2, y: y + ch / 2 + ch * 0.16, str: String(n++), size: Math.min(cw, ch) * 0.5, anchor: 'middle' });
        }
      break;
    }
    case 'sudoku': {
      const cell = Math.min(w, h * 0.55) / 9;
      const x0 = (w - 9 * cell) / 2;
      const y0 = (h - 9 * cell) / 2;
      for (let i = 0; i <= 9; i++) {
        const bold = i % 3 === 0;
        line(x0 + i * cell, y0, x0 + i * cell, y0 + 9 * cell, bold);
        line(x0, y0 + i * cell, x0 + 9 * cell, y0 + i * cell, bold);
      }
      break;
    }
    case 'blank-table': {
      const cols = 4;
      const rows = 10;
      const x0 = w * 0.08;
      const y0 = h * 0.08;
      const cw = (w - 2 * x0) / cols;
      const ch = (h - 2 * y0) / rows;
      for (let c = 0; c <= cols; c++) line(x0 + c * cw, y0, x0 + c * cw, y0 + rows * ch);
      for (let r = 0; r <= rows; r++) line(x0, y0 + r * ch, x0 + cols * cw, y0 + r * ch, r === 0);
      break;
    }
    case 'cornell': {
      const cue = w * 0.26;
      line(cue, 0, cue, h, true);
      for (let y = w * 0.1; y < h * 0.72; y += 9) line(cue + 4, y, w * 0.92, y);
      line(w * 0.08, h * 0.78, w * 0.92, h * 0.78, true);
      for (let y = h * 0.78 + 12; y < h - 10; y += 9) line(w * 0.08, y, w * 0.92, y);
      break;
    }
    case 'perspective': {
      const hz = h * 0.42;
      const vp = w / 2;
      line(0, hz, w, hz, true);
      P.push({ k: 'dot', cx: vp, cy: hz, r: 0.9 });
      for (let x = 0; x <= w; x += w / 10) line(x, h, vp, hz);
      for (let y = hz + 14; y < h; y += 14) line(0, y, w, y);
      break;
    }
    default:
      for (let x = 0; x <= w + 1e-6; x += s) line(x, 0, x, h);
      for (let y = 0; y <= h + 1e-6; y += s) line(0, y, w, y);
  }
  return P;
}

const f = (n: number) => (Math.abs(n) < 0.005 ? '0' : n.toFixed(2));

export function primsToSvg(prims: Prim[], color: string): string {
  let out = '';
  for (const p of prims) {
    if (p.k === 'line') {
      const c = p.color ?? color;
      const sw = p.bold ? 0.35 : 0.15;
      out += `<line x1="${f(p.x1)}" y1="${f(p.y1)}" x2="${f(p.x2)}" y2="${f(p.y2)}" stroke="${c}" stroke-width="${sw}"/>`;
    } else if (p.k === 'dot') {
      out += `<circle cx="${f(p.cx)}" cy="${f(p.cy)}" r="${f(p.r)}" fill="${color}"/>`;
    } else if (p.k === 'circle') {
      out += `<circle cx="${f(p.cx)}" cy="${f(p.cy)}" r="${f(p.r)}" fill="none" stroke="${color}" stroke-width="${p.bold ? 0.35 : 0.15}"/>`;
    } else if (p.k === 'rect') {
      out += `<rect x="${f(p.x)}" y="${f(p.y)}" width="${f(p.w)}" height="${f(p.h)}" fill="none" stroke="${color}" stroke-width="${p.bold ? 0.4 : 0.15}"/>`;
    } else {
      out += `<text x="${f(p.x)}" y="${f(p.y)}" font-size="${f(p.size)}"${p.anchor === 'middle' ? ' text-anchor="middle"' : ''} fill="${color}">${p.str}</text>`;
    }
  }
  return out;
}
