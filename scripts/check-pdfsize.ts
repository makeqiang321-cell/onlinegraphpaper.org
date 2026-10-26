import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { PDFDocument } from 'pdf-lib';
import { sizes } from '../src/data/sizes';
import { paperTypes } from '../src/data/paperTypes';

const MM_TO_PT = 72 / 25.4;
const TOL_MM = 0.5;
const TYPES = paperTypes.map((t) => t.slug);

function parseName(file: string): { sizeId: string; orient: string } | null {
  const m = file.match(/^([a-z0-9]+)-(portrait|landscape)-.+\.pdf$/);
  return m ? { sizeId: m[1], orient: m[2] } : null;
}

async function main() {
  let errors = 0;
  let sampled = 0;
  for (const type of TYPES) {
    const dir = join('public', 'downloads', type);
    const pdfs = readdirSync(dir).filter((f) => f.endsWith('.pdf')).sort();
    const sample = [pdfs[0], pdfs[Math.floor(pdfs.length / 2)], pdfs[pdfs.length - 1]].filter(Boolean);

    for (const f of sample) {
      sampled++;
      const info = parseName(f);
      if (!info) {
        console.error(`ERROR: cannot parse filename ${f}`);
        errors++;
        continue;
      }
      const size = sizes.find((s) => s.id === info.sizeId)!;
      const expectedMm =
        info.orient === 'landscape'
          ? { w: size.heightMm, h: size.widthMm }
          : { w: size.widthMm, h: size.heightMm };

      const doc = await PDFDocument.load(readFileSync(join(dir, f)));
      const { width: wPt, height: hPt } = doc.getPage(0).getSize();
      const wMm = wPt / MM_TO_PT;
      const hMm = hPt / MM_TO_PT;

      if (Math.abs(wMm - expectedMm.w) > TOL_MM || Math.abs(hMm - expectedMm.h) > TOL_MM) {
        console.error(
          `ERROR ${f}: ${wMm.toFixed(2)}x${hMm.toFixed(2)}mm vs expected ${expectedMm.w}x${expectedMm.h}mm`,
        );
        errors++;
      }
    }
  }

  console.log(`check:pdfsize — ${errors === 0 ? 'PASS' : 'FAIL'} (sampled ${sampled} PDFs, tol ±${TOL_MM}mm)`);
  process.exit(errors === 0 ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
