import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import sharp from 'sharp';
import { sizes } from '../src/data/sizes';
import { spacings } from '../src/data/spacings';
import { defaultGridColor } from '../src/data/gridColors';
import { paperTypes } from '../src/data/paperTypes';
import { gridPrims, primsToSvg, type Prim } from '../src/lib/grid';

const MM_TO_PT = 72 / 25.4;
const DPI = 300;
const LINE_COLOR = defaultGridColor.hex;

type Orient = 'portrait' | 'landscape';
const ORIENTS: Orient[] = ['portrait', 'landscape'];
const TYPES = paperTypes.map((t) => t.slug);

function orientDims(w: number, h: number, o: Orient) {
  return o === 'landscape' ? { w: h, h: w } : { w, h };
}

function rgb01(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

// Vector PDF from the same primitives that drive the SVG preview.
async function primsToPdf(prims: Prim[], w: number, h: number, colorHex: string): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const page = doc.addPage([w * MM_TO_PT, h * MM_TO_PT]);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const color = rgb01(colorHex);
  for (const p of prims) {
    if (p.k === 'line') {
      const c = p.color ? rgb01(p.color) : color;
      page.drawLine({
        start: { x: p.x1 * MM_TO_PT, y: p.y1 * MM_TO_PT },
        end: { x: p.x2 * MM_TO_PT, y: p.y2 * MM_TO_PT },
        thickness: p.bold ? 0.6 : 0.3,
        color: c,
      });
    } else if (p.k === 'dot') {
      page.drawCircle({ x: p.cx * MM_TO_PT, y: p.cy * MM_TO_PT, size: p.r * 2 * MM_TO_PT, color });
    } else if (p.k === 'circle') {
      page.drawCircle({ x: p.cx * MM_TO_PT, y: p.cy * MM_TO_PT, size: p.r * 2 * MM_TO_PT, borderColor: color, borderWidth: p.bold ? 0.5 : 0.3 });
    } else if (p.k === 'rect') {
      page.drawRectangle({ x: p.x * MM_TO_PT, y: p.y * MM_TO_PT, width: p.w * MM_TO_PT, height: p.h * MM_TO_PT, borderColor: color, borderWidth: p.bold ? 0.5 : 0.3 });
    } else {
      const size = p.size * MM_TO_PT;
      const tx = p.x * MM_TO_PT - (p.anchor === 'middle' ? font.widthOfTextAtSize(p.str, size) / 2 : 0);
      page.drawText(p.str, { x: tx, y: p.y * MM_TO_PT, size, color, font });
    }
  }
  return doc.save();
}

function svgFor(w: number, h: number, prims: Prim[], color: string): string {
  const pxW = Math.round((w * DPI) / 25.4);
  const pxH = Math.round((h * DPI) / 25.4);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${pxW}" height="${pxH}" viewBox="0 0 ${w.toFixed(3)} ${h.toFixed(3)}">` +
    `<rect width="${w.toFixed(3)}" height="${h.toFixed(3)}" fill="#ffffff"/>` +
    primsToSvg(prims, color) +
    `</svg>`
  );
}

async function main() {
  const files: { ext: string; size: number }[] = [];

  for (const type of TYPES) {
    const pdfDir = join('public', 'downloads', type);
    const imgDir = join('public', 'images', type);
    mkdirSync(pdfDir, { recursive: true });
    mkdirSync(imgDir, { recursive: true });

    for (const size of sizes) {
      for (const orient of ORIENTS) {
        for (const spacing of spacings) {
          const dims = orientDims(size.widthMm, size.heightMm, orient);
          const base = `${size.id}-${orient}-${spacing.id}`;
          const prims = gridPrims(type, dims.w, dims.h, spacing.mm);

          const pdfBytes = await primsToPdf(prims, dims.w, dims.h, LINE_COLOR);
          writeFileSync(join(pdfDir, `${base}.pdf`), pdfBytes);
          files.push({ ext: 'pdf', size: pdfBytes.length });

          const svg = svgFor(dims.w, dims.h, prims, LINE_COLOR);
          const info = await sharp(Buffer.from(svg)).png().toFile(join(imgDir, `${base}.png`));
          files.push({ ext: 'png', size: info.size });

          writeFileSync(join(pdfDir, `${base}.svg`), svg);
          files.push({ ext: 'svg', size: Buffer.byteLength(svg) });
        }
      }
    }
  }

  const pdfCount = files.filter((f) => f.ext === 'pdf').length;
  const pngCount = files.filter((f) => f.ext === 'png').length;
  const svgCount = files.filter((f) => f.ext === 'svg').length;
  const totalBytes = files.reduce((s, f) => s + f.size, 0);
  const minBytes = Math.min(...files.map((f) => f.size));
  const minFile = files.find((f) => f.size === minBytes)!;

  console.log(`generated ${files.length} files (${pdfCount} PDF + ${pngCount} PNG + ${svgCount} SVG)`);
  console.log(`total size: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`min single file: ${(minBytes / 1024).toFixed(2)} KB (${minFile.ext})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
