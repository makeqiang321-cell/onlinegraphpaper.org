// Homepage paper-type catalog (original copy). href points at the generator page per type.
// `cat` groups entries on the homepage, ordered Math → Music → Drawing → Writing & Technical.
export interface CatalogEntry {
  id: string;
  name: string;
  desc: string;
  tags: string[];
  cat: 'math' | 'music' | 'drawing' | 'writing';
  href?: string; // omitted until the target page is built
}

export const paperCatalog: CatalogEntry[] = [
  // Math
  { id: 'square-grid', name: 'Square Grid', desc: 'Standard square grids, 2 mm to 1 in', tags: ['Math', 'Engineering', 'General'], cat: 'math', href: '/square-grid/' },
  { id: 'semi-log', name: 'Semi-Log Grid', desc: 'Linear and logarithmic axes for growth data', tags: ['Science', 'Data', 'Log'], cat: 'math', href: '/semi-log/' },
  { id: 'polar', name: 'Polar Grid', desc: 'Circular grid for radar charts and spirals', tags: ['Math', 'Circular', 'Physics'], cat: 'math', href: '/polar/' },
  { id: 'log-log', name: 'Log-Log Grid', desc: 'Log scales on both axes for power laws', tags: ['Engineering', 'Physics', 'Advanced'], cat: 'math', href: '/log-log/' },
  { id: 'coordinate-plane', name: 'Coordinate Plane', desc: 'X and Y axes for plotting points', tags: ['Algebra', 'Graphing', 'Teaching'], cat: 'math', href: '/coordinate-plane/' },
  { id: 'number-grid', name: 'Number Grid', desc: 'Numbered 1–100 grids for counting practice', tags: ['Counting', 'Worksheets', 'Classroom'], cat: 'math', href: '/number-grid/' },
  { id: 'sudoku', name: 'Sudoku Grid', desc: 'Print-ready blank 9 × 9 grids', tags: ['Puzzles', 'Logic', 'PDF'], cat: 'math', href: '/sudoku/' },
  // Music
  { id: 'staff-paper', name: 'Staff Paper', desc: 'Blank music staves for notation and tab', tags: ['Music', 'Notation', 'Hobby'], cat: 'music', href: '/staff-paper/' },
  // Drawing
  { id: 'dot-grid', name: 'Dot Grid', desc: 'Minimal dots for journals and sketching', tags: ['Journaling', 'Design', 'Sketching'], cat: 'drawing', href: '/dot-grid/' },
  { id: 'isometric-grid', name: 'Isometric Grid', desc: '30° grid for 3D and technical drawing', tags: ['3D Drawing', 'Architecture', 'Design'], cat: 'drawing', href: '/isometric-grid/' },
  { id: 'perspective', name: 'Perspective Grid', desc: 'Converging guides for drawing depth', tags: ['Art', 'Sketching', 'Architecture'], cat: 'drawing', href: '/perspective/' },
  { id: 'hex-grid', name: 'Hexagonal Grid', desc: 'Honeycomb cells for maps, games and chemistry', tags: ['Gaming', 'Mapping', 'Chemistry'], cat: 'drawing', href: '/hex-grid/' },
  { id: 'triangle-grid', name: 'Triangle Grid', desc: 'Equilateral grid for tessellations', tags: ['Geometry', 'Patterns', 'Design'], cat: 'drawing', href: '/triangle-grid/' },
  // Writing & Technical
  { id: 'lined-paper', name: 'Lined Paper', desc: 'Ruled rows for neat handwriting', tags: ['Writing', 'School', 'Notes'], cat: 'writing', href: '/lined-paper/' },
  { id: 'cornell', name: 'Cornell Notes', desc: 'Cue, notes and summary layout for study', tags: ['Study', 'University', 'Notes'], cat: 'writing', href: '/cornell/' },
  { id: 'engineering', name: 'Engineering Paper', desc: 'Grid paper with a title block and borders', tags: ['Technical', 'Lab', 'Professional'], cat: 'writing', href: '/engineering/' },
  { id: 'blank-table', name: 'Blank Table', desc: 'Empty tables to fill with your own data', tags: ['Data', 'Tables', 'Printable'], cat: 'writing', href: '/blank-table/' },
];
