// Homepage category groups, shared by index.astro and the [category].astro hub pages.
export type PaperGroupKey = 'math' | 'music' | 'drawing' | 'writing';

export interface PaperGroup {
  key: PaperGroupKey;
  title: string; // short label on the homepage
  slug: string; // category hub URL
  name: string; // H1 on the category page
  seoTitle: string; // <title> tag
  description: string; // meta description
  intro: string; // category page lead
  show: string[]; // homepage picks, three per group
}

export const paperGroups: PaperGroup[] = [
  {
    key: 'math',
    title: 'Math',
    slug: 'math-graph-paper',
    name: 'Math Graph Paper',
    seoTitle: 'Math Graph Paper — Free Printable PDF, PNG & SVG',
    description: 'Free printable math graph paper with square grids, coordinate planes, number grids, polar and semi-log paper in A4, Letter, A3 and Legal sizes.',
    intro: 'Math graph paper covers the grids used in class and lab work — seven types in all. Square grids for arithmetic, coordinate planes with labeled x and y axes for plotting, number grids for counting, and semi-log, log-log, and polar grids for data.',
    show: ['square-grid', 'coordinate-plane', 'number-grid'],
  },
  {
    key: 'music',
    title: 'Music',
    slug: 'music-paper',
    name: 'Music Paper',
    seoTitle: 'Music Paper — Free Printable Staff Paper PDF',
    description: 'Free printable music paper and staff paper for notation, lead sheets and songwriting. Blank staves you can print as PDF, PNG or SVG.',
    intro: 'Music paper is blank staff paper for handwriting music — five-line staves for notation, guitar tab, lead sheets and songwriting, ready to print and export like the rest of the catalog.',
    show: ['staff-paper'],
  },
  {
    key: 'drawing',
    title: 'Drawing',
    slug: 'drawing-graph-paper',
    name: 'Drawing Graph Paper',
    seoTitle: 'Drawing Graph Paper — Free Printable Dot & Isometric PDF',
    description: 'Free printable drawing graph paper: dot grids, isometric grids, perspective, hex and triangle grids for sketching, 3D and design.',
    intro: 'Drawing graph paper is a grid you draw over. Five types — dot, isometric, perspective, hex, and triangle — cover journals, 3D drawing, maps, games, and patterns.',
    show: ['dot-grid', 'isometric-grid', 'perspective'],
  },
  {
    key: 'writing',
    title: 'Writing & Technical',
    slug: 'writing-and-technical-paper',
    name: 'Writing & Technical Paper',
    seoTitle: 'Writing and Technical Paper — Free Printable Lined PDF',
    description: 'Free printable writing and technical paper: lined paper, Cornell notes, engineering paper and blank tables for notes, lab work and data.',
    intro: 'Writing and technical paper keeps notes and records tidy. Four types — lined, Cornell notes, engineering, and blank table — cover handwriting, studying, lab work, and your own data.',
    show: ['lined-paper', 'cornell', 'engineering'],
  },
];
