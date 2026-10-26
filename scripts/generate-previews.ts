// Generates a realistic A4-portrait preview PNG for every paper type in the catalog.
// Output: public/images/previews/{id}.png  (210:297 ratio, 420x594 px)
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { paperCatalog } from '../src/content/paperCatalog';

const W = 210; // A4 portrait, mm
const H = 297;
const C = '#60a5fa'; // regular grid line (visible blue)
const B = '#1d4ed8'; // emphasized (axes, bold, baseline)
const D = '#0f172a'; // dark (text, title block)
const R = '#ef4444'; // red (lined-paper margin)

const L = (x1: number, y1: number, x2: number, y2: number, c = C, sw = 0.15) =>
  `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${c}" stroke-width="${sw}"/>`;
const circ = (cx: number, cy: number, r: number, c = C, sw = 0.15) =>
  `<circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${r.toFixed(2)}" fill="none" stroke="${c}" stroke-width="${sw}"/>`;
const dot = (cx: number, cy: number, r = 0.5, c = C) =>
  `<circle cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="${r}" fill="${c}"/>`;

// Parallel line family at angle `deg`, spacing `sp` (drawn long; clipped by the viewBox clipPath).
function fam(deg: number, sp: number, c = C): string {
  const a = (deg * Math.PI) / 180;
  const dx = Math.cos(a);
  const dy = Math.sin(a);
  const nx = -Math.sin(a);
  const ny = Math.cos(a);
  const M = 520;
  let out = '';
  for (let k = -80; k <= 80; k++) {
    const px = k * sp * nx;
    const py = k * sp * ny;
    out += L(px - M * dx, py - M * dy, px + M * dx, py + M * dy, c);
  }
  return out;
}

function hexagon(cx: number, cy: number, r: number): string {
  let pts = '';
  for (let k = 0; k < 6; k++) {
    const a = (Math.PI / 3) * k;
    pts += `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)} `;
  }
  return `<polygon points="${pts.trim()}" fill="none" stroke="${C}" stroke-width="0.15"/>`;
}

const LOG_VALS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const LOG_MAX = Math.log10(100);

function body(type: string): string {
  let s = '';
  switch (type) {
    case 'square-grid':
      for (let x = 0; x <= W; x += 5) s += L(x, 0, x, H);
      for (let y = 0; y <= H; y += 5) s += L(0, y, W, y);
      break;
    case 'staff-paper':
      for (let i = 0; i < 8; i++) {
        const top = 20 + i * 34;
        for (let j = 0; j < 5; j++) s += L(16, top + j * 2.2, W - 16, top + j * 2.2, D, 0.18);
      }
      break;
    case 'dot-grid':
      for (let x = 5; x < W; x += 5) for (let y = 5; y < H; y += 5) s += dot(x, y);
      break;
    case 'isometric-grid':
      s += fam(0, 5) + fam(60, 5) + fam(120, 5);
      break;
    case 'triangle-grid':
      s += fam(0, 4) + fam(60, 4) + fam(120, 4);
      break;
    case 'polar': {
      const cx = W / 2;
      const cy = H / 2;
      for (let r = 14; r <= 140; r += 14) s += circ(cx, cy, r);
      for (let a = 0; a < 360; a += 15) {
        const rad = (a * Math.PI) / 180;
        s += L(cx + 14 * Math.cos(rad), cy + 14 * Math.sin(rad), cx + 140 * Math.cos(rad), cy + 140 * Math.sin(rad));
      }
      break;
    }
    case 'semi-log':
      for (let x = 0; x <= W; x += 5) s += L(x, 0, x, H);
      for (const v of LOG_VALS) s += L(0, H - (H * Math.log10(v)) / LOG_MAX, W, H - (H * Math.log10(v)) / LOG_MAX);
      break;
    case 'log-log':
      for (const v of LOG_VALS) {
        s += L((W * Math.log10(v)) / LOG_MAX, 0, (W * Math.log10(v)) / LOG_MAX, H);
        s += L(0, H - (H * Math.log10(v)) / LOG_MAX, W, H - (H * Math.log10(v)) / LOG_MAX);
      }
      break;
    case 'hex-grid': {
      const r = 7;
      const hx = 1.5 * r;
      const hy = Math.sqrt(3) * r;
      for (let row = 0; row * hy < H + hy; row++)
        for (let col = -1; col * hx < W + hx; col++)
          s += hexagon(col * hx + (row % 2 ? hx / 2 : 0), row * hy, r);
      break;
    }
    case 'lined-paper':
      for (let y = 16; y < H; y += 8) s += L(20, y, W - 20, y);
      s += L(32, 0, 32, H, R, 0.3);
      break;
    case 'coordinate-plane':
      for (let x = 0; x <= W; x += 5) s += L(x, 0, x, H);
      for (let y = 0; y <= H; y += 5) s += L(0, y, W, y);
      s += L(W / 2, 0, W / 2, H, B, 0.35);
      s += L(0, H / 2, W, H / 2, B, 0.35);
      break;
    case 'number-grid': {
      const cols = 10;
      const rows = 10;
      const x0 = 20;
      const y0 = 30;
      const cw = 17;
      const ch = 24;
      let n = 1;
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++) {
          const x = x0 + c * cw;
          const y = y0 + r * ch;
          s += `<rect x="${x}" y="${y}" width="${cw}" height="${ch}" fill="none" stroke="${C}" stroke-width="0.12"/>`;
          s += `<text x="${x + cw / 2}" y="${y + ch / 2 + 2.5}" font-size="6" text-anchor="middle" fill="${D}">${n++}</text>`;
        }
      break;
    }
    case 'sudoku': {
      const cell = 19;
      const x0 = 20;
      const y0 = 20;
      for (let i = 0; i <= 9; i++) {
        const bold = i % 3 === 0;
        s += L(x0 + i * cell, y0, x0 + i * cell, y0 + 9 * cell, bold ? D : C, bold ? 0.4 : 0.12);
        s += L(x0, y0 + i * cell, x0 + 9 * cell, y0 + i * cell, bold ? D : C, bold ? 0.4 : 0.12);
      }
      break;
    }
    case 'blank-table': {
      const x0 = 20;
      const y0 = 30;
      const cw = 42;
      const ch = 18;
      for (let c = 0; c <= 4; c++) s += L(x0 + c * cw, y0, x0 + c * cw, y0 + 10 * ch, c === 0 ? B : C, 0.2);
      for (let r = 0; r <= 10; r++) s += L(x0, y0 + r * ch, x0 + 4 * cw, y0 + r * ch, r === 0 ? B : C, r === 0 ? 0.3 : 0.12);
      break;
    }
    case 'cornell':
      s += L(55, 0, 55, H, B, 0.3);
      for (let y = 20; y < 220; y += 9) s += L(60, y, W - 20, y);
      s += L(20, 235, W - 20, 235, B, 0.3);
      for (let y = 250; y < H; y += 9) s += L(20, y, W - 20, y);
      break;
    case 'perspective': {
      const hz = H * 0.45;
      const vp = W / 2;
      s += L(0, hz, W, hz, B, 0.3);
      s += dot(vp, hz, 1.2, B);
      for (let x = 0; x <= W; x += 21) s += L(x, H, vp, hz);
      for (let y = hz + 14; y < H; y += 14) s += L(0, y, W, y);
      break;
    }
    case 'english':
      for (let i = 0; i < 8; i++) {
        const top = 20 + i * 34;
        for (let j = 0; j < 5; j++) s += L(16, top + j * 2.2, W - 16, top + j * 2.2, D, 0.18);
      }
      break;
    case 'engineering':
      for (let x = 0; x <= W; x += 5) s += L(x, 0, x, H);
      for (let y = 0; y <= H; y += 5) s += L(0, y, W, y);
      s += `<rect x="${W - 70}" y="${H - 40}" width="70" height="40" fill="#ffffff" stroke="${D}" stroke-width="0.4"/>`;
      s += L(W - 70, H - 25, W, H - 25, D, 0.2);
      s += L(W - 45, H - 25, W - 45, H, D, 0.2);
      s += L(W - 70, H - 15, W, H - 15, D, 0.2);
      break;
    default:
      for (let x = 0; x <= W; x += 5) s += L(x, 0, x, H);
      for (let y = 0; y <= H; y += 5) s += L(0, y, W, y);
  }
  return s;
}

function svg(type: string): string {
  const id = `pv-${type}`;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="594" viewBox="0 0 ${W} ${H}">` +
    `<defs><clipPath id="${id}"><rect x="0" y="0" width="${W}" height="${H}"/></clipPath></defs>` +
    `<rect width="${W}" height="${H}" fill="#ffffff"/>` +
    `<g clip-path="url(#${id})">${body(type)}</g>` +
    `</svg>`
  );
}

async function main() {
  const dir = join('public', 'images', 'previews');
  mkdirSync(dir, { recursive: true });
  for (const e of paperCatalog) {
    const info = await sharp(Buffer.from(svg(e.id))).png().toFile(join(dir, `${e.id}.png`));
    console.log(`preview ${e.id}.png (${(info.size / 1024).toFixed(1)} KB)`);
  }
  console.log(`generated ${paperCatalog.length} previews → ${dir}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
