export interface PaperType {
  slug: string;        // URL segment + asset directory
  name: string;        // display name / H1
  title: string;       // <title>
  description: string; // meta description
}

// One entry per paper-type page. src/pages/[slug].astro builds these routes via getStaticPaths.
// scripts/generate-assets.ts, check-assets.ts and check-pdfsize.ts derive their type list from this.
export const paperTypes: PaperType[] = [
  {
    slug: 'square-grid',
    name: 'Square Grid',
    title: 'Square Grid — Free Graph Paper PDF, PNG & SVG',
    description:
      'Free printable square grid templates in 7 sizes, 2 mm–1 in spacing. Download 84 square grid PDF, PNG and SVG files for math, drawing and design.',
  },
  {
    slug: 'staff-paper',
    name: 'Staff Paper',
    title: 'Staff Paper — Free Printable PDF, PNG & SVG',
    description:
      'Free printable music staff paper in 7 sizes from A4 to Poster. Download blank staves as PDF, PNG or SVG for music notation, guitar tabs and songwriting.',
  },
  {
    slug: 'dot-grid',
    name: 'Dot Grid Paper',
    title: 'Dot Grid Paper — Free Printable PDF, PNG & SVG',
    description:
      'Download free dot grid paper in 7 sizes and 6 spacings from 2 mm to 1 in. Light dots for bullet journaling, sketching and calligraphy, as PDF, PNG and SVG.',
  },
  {
    slug: 'isometric-grid',
    name: 'Isometric Grid Paper',
    title: 'Isometric Grid Paper — Free Printable PDF, PNG & SVG',
    description:
      'Download free isometric grid paper in 7 sizes from A4 to Poster with 2 mm–1 in spacing. 84 printable isometric PDF, PNG and SVG templates for 3D drawing.',
  },
  {
    slug: 'polar',
    name: 'Polar Graph Paper',
    title: 'Polar Graph Paper — Free Printable PDF, PNG & SVG',
    description:
      'Free printable polar graph paper with concentric circles and radial lines. Download polar templates in 7 sizes as PDF, PNG or SVG for charts and spirals.',
  },
  {
    slug: 'semi-log',
    name: 'Semi-Log Graph Paper',
    title: 'Semi-Log Graph Paper — Free Printable PDF, PNG & SVG',
    description:
      'Free printable semi-log graph paper with a linear axis and logarithmic axis. Download semi-log templates in 7 sizes as PDF, PNG or SVG for growth data.',
  },
  {
    slug: 'hex-grid',
    name: 'Hexagonal Grid Paper',
    title: 'Hexagonal Grid Paper — Free Printable PDF, PNG & SVG',
    description:
      'Download free hexagonal grid paper in 7 sizes and 6 spacings. Honeycomb cells for maps, games, chemistry and design, available as PDF, PNG and SVG.',
  },
  {
    slug: 'triangle-grid',
    name: 'Triangle Grid Paper',
    title: 'Triangle Grid Paper — Free Printable PDF, PNG & SVG',
    description:
      'Free printable triangle grid paper with equilateral triangles. Download triangle grid templates in 7 sizes as PDF, PNG or SVG for tessellations and design.',
  },
  {
    slug: 'lined-paper',
    name: 'Lined Paper',
    title: 'Lined Paper — Free Printable PDF, PNG & SVG',
    description:
      'Free printable lined paper with ruled rows for neat handwriting. Download ruled paper in 7 sizes and 6 line spacings as PDF, PNG or SVG.',
  },
  {
    slug: 'coordinate-plane',
    name: 'Coordinate Plane Paper',
    title: 'Coordinate Plane Paper — Free Printable PDF, PNG & SVG',
    description:
      'Free printable coordinate plane paper with X and Y axes. Download coordinate grids in 7 sizes and 6 spacings as PDF, PNG or SVG for plotting.',
  },
  {
    slug: 'number-grid',
    name: 'Number Grid',
    title: 'Number Grid — Free Printable PDF, PNG & SVG',
    description:
      'Free printable number grid with a 1-100 chart for counting practice. Download number grids in 7 sizes as PDF, PNG or SVG for classroom worksheets.',
  },
  {
    slug: 'sudoku',
    name: 'Sudoku Grid',
    title: 'Sudoku Grid — Free Printable PDF, PNG & SVG',
    description:
      'Free printable sudoku grids in 7 sizes. Download blank 9 by 9 sudoku grids as PDF, PNG or SVG for logic practice and puzzle books.',
  },
  {
    slug: 'blank-table',
    name: 'Blank Table',
    title: 'Blank Table — Free Printable PDF, PNG & SVG',
    description:
      'Free printable blank table templates to fill with your own data. Download empty tables in 7 sizes as PDF, PNG or SVG for schedules and tracking.',
  },
  {
    slug: 'cornell',
    name: 'Cornell Notes Paper',
    title: 'Cornell Notes Paper — Free Printable PDF, PNG & SVG',
    description:
      'Free printable Cornell notes paper with cue, notes and summary sections. Download Cornell templates in 7 sizes as PDF, PNG or SVG for study.',
  },
  {
    slug: 'log-log',
    name: 'Log-Log Graph Paper',
    title: 'Log-Log Graph Paper — Free Printable PDF, PNG & SVG',
    description:
      'Free printable log-log graph paper with logarithmic scales on both axes. Download log-log templates in 7 sizes as PDF, PNG or SVG for power laws.',
  },
  {
    slug: 'perspective',
    name: 'Perspective Grid Paper',
    title: 'Perspective Grid Paper — Free Printable PDF, PNG & SVG',
    description:
      'Free printable perspective grid paper with a horizon and converging guides. Download perspective grids in 7 sizes as PDF, PNG or SVG for drawing depth.',
  },
  {
    slug: 'english',
    name: 'Printable Staff Paper',
    title: 'Printable Staff Paper — Free PDF, PNG & SVG',
    description:
      'Free printable staff paper for songwriting. Download blank five-line staves in 7 sizes as PDF, PNG or SVG to build lead sheets with melody, chords and lyrics.',
  },
  {
    slug: 'engineering',
    name: 'Engineering Paper',
    title: 'Engineering Paper — Free Printable PDF, PNG & SVG',
    description:
      'Free printable engineering paper with a grid and title block. Download engineering templates in 7 sizes and 6 spacings as PDF, PNG or SVG.',
  },
];
