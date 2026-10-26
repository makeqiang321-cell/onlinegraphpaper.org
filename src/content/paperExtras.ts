// Deeper, use-case-driven content per paper type (original copy). Rendered on each
// inner page after the core guide: applications, an optional comparison table, and a
// gallery of rendered paper examples. Items may carry an internal href for body links.
export interface ApplicationItem {
  text: string;
  href?: string;
}

export interface PaperExtra {
  applications?: { h3: string; items: ApplicationItem[] }[];
  comparison?: { aLabel: string; bLabel: string; rows: { feature: string; a: string; b: string }[] };
  gallery?: { base: string; caption: string; href?: string }[];
}

export const paperExtras: Record<string, PaperExtra> = {
  'square-grid': {
    applications: [
      {
        h3: 'Maths and schoolwork',
        items: [
          { text: 'Plot points and graph equations on a steady scale' },
          { text: 'Draw 2-D shapes and measure by counting squares' },
          { text: 'Model multiplication and area with rectangular grids' },
          { text: 'Work through geometry constructions and translations', href: '/coordinate-plane/' },
        ],
      },
      {
        h3: 'Drawing and design',
        items: [
          { text: 'Sketch floor plans where one square equals one unit' },
          { text: 'Draft cross-stitch, pixel and perler-bead patterns' },
          { text: 'Plan furniture layouts and room dimensions' },
          { text: 'Lay out game boards and battle maps', href: '/hex-grid/' },
        ],
      },
      {
        h3: 'Engineering and technical work',
        items: [
          { text: 'Sketch circuit and PCB layouts on a 2 mm grid' },
          { text: 'Draw mechanical parts to a measured scale' },
          { text: 'Keep lab data in aligned tables' },
          { text: 'Build border and title-block drawings', href: '/engineering/' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Square grid',
      bLabel: 'Dot grid paper',
      rows: [
        { feature: 'Lines', a: 'Solid in both directions', b: 'Only intersection points' },
        { feature: 'Measuring', a: 'Easy to count and measure', b: 'Harder to measure precisely' },
        { feature: 'Look of finished work', a: 'Grid stays visible', b: 'Dots fade behind writing' },
        { feature: 'Best for', a: 'Maths, graphs, engineering', b: 'Journals, notes, sketches' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 · 5 mm square grid — the school standard' },
      { base: 'letter-portrait-0.25in', caption: 'Letter · 1/4 inch grid — the US classroom size' },
      { base: 'a4-portrait-1cm', caption: 'A4 · 1 cm grid — wide squares for early counting' },
    ],
  },
  'staff-paper': {
    applications: [
      {
        h3: 'Music notation',
        items: [
          { text: 'Hand-write melodies, harmonies and chord progressions' },
          { text: 'Write guitar tablature and scale exercises' },
          { text: 'Notate rhythm studies and sight-reading drills' },
        ],
      },
      {
        h3: 'Teaching and lessons',
        items: [
          { text: 'Print theory worksheets with room for answers' },
          { text: 'Draw clefs, key signatures and intervals by hand' },
          { text: 'Give each student a clean sheet for dictation' },
        ],
      },
      {
        h3: 'Songwriting and practice',
        items: [
          { text: 'Sketch a melody with chord names above each staff' },
          { text: 'Keep a paper log of riffs and arrangements', href: '/lined-paper/' },
          { text: 'Work out fingerings without erasing a notebook' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Staff paper',
      bLabel: 'Tab paper',
      rows: [
        { feature: 'Lines per group', a: 'Five, for standard notes', b: 'Six, for guitar strings' },
        { feature: 'What it shows', a: 'Pitch and rhythm', b: 'Fret positions' },
        { feature: 'Best for', a: 'Any instrument', b: 'Guitar and bass' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 staff paper — blank staves for notation' },
      { base: 'letter-portrait-0.25in', caption: 'Letter staff paper — US music sheet size' },
      { base: 'a3-portrait-5mm', caption: 'A3 staff paper — larger staves for young students' },
    ],
  },
  'dot-grid': {
    applications: [
      {
        h3: 'Bullet journaling',
        items: [
          { text: 'Build habit trackers and monthly spreads' },
          { text: 'Draw straight section lines and boxes' },
          { text: 'Align handwriting without heavy rules' },
        ],
      },
      {
        h3: 'Calligraphy and lettering',
        items: [
          { text: 'Practice letter height and slant guides' },
          { text: 'Space descenders and ascenders evenly' },
          { text: 'Warm up with stroke drills' },
        ],
      },
      {
        h3: 'Sketches and planning',
        items: [
          { text: 'Sketch wireframes and interface layouts' },
          { text: 'Plan room layouts and quilting patterns', href: '/triangle-grid/' },
          { text: 'Draft charts and tables that read cleanly', href: '/lined-paper/' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Dot grid paper',
      bLabel: 'Lined paper',
      rows: [
        { feature: 'Guides', a: 'Dots in both directions', b: 'Horizontal rules only' },
        { feature: 'Freedom', a: 'Draw and write in any direction', b: 'Writing follows the rows' },
        { feature: 'Best for', a: 'Journals, sketches, layouts', b: 'Long-form handwriting' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 · 5 mm dot grid — standard journal spacing' },
      { base: 'letter-portrait-0.25in', caption: 'Letter · 1/4 inch dot grid' },
      { base: 'a4-portrait-1cm', caption: 'A4 · 1 cm dots — airy spacing for sketches' },
    ],
  },
  'isometric-grid': {
    applications: [
      {
        h3: '3-D drawing',
        items: [
          { text: 'Sketch cubes, rooms and buildings in proportion' },
          { text: 'Draw product concepts without a vanishing point' },
          { text: 'Extrude walls and pipes by counting grid steps' },
        ],
      },
      {
        h3: 'Game art',
        items: [
          { text: 'Design isometric tiles and sprites' },
          { text: 'Block out levels and terrain' },
          { text: 'Keep asset proportions consistent', href: '/hex-grid/' },
        ],
      },
      {
        h3: 'Technical illustration',
        items: [
          { text: 'Draw piping and HVAC layouts' },
          { text: 'Sketch mechanical assemblies' },
          { text: 'Prepare patent and instruction diagrams', href: '/engineering/' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Isometric grid',
      bLabel: 'Perspective grid',
      rows: [
        { feature: 'Axes', a: 'Three fixed 0/60/120° axes', b: 'Lines converge to vanishing points' },
        { feature: 'Measuring', a: 'Same length stays the same', b: 'Lengths shrink with distance' },
        { feature: 'Feel', a: 'Technical, even', b: 'Realistic, deep' },
        { feature: 'Best for', a: 'Products, games, diagrams', b: 'Scenes, rooms, buildings' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 · 5 mm isometric lattice' },
      { base: 'letter-portrait-0.25in', caption: 'Letter · 1/4 inch isometric grid' },
      { base: 'a4-portrait-1cm', caption: 'A4 · 1 cm isometric grid for larger drawings' },
    ],
  },
  polar: {
    applications: [
      {
        h3: 'Science and data',
        items: [
          { text: 'Plot radar charts and antenna patterns' },
          { text: 'Graph wind direction and compass bearings' },
          { text: 'Work polar coordinates and phasors' },
        ],
      },
      {
        h3: 'Maths',
        items: [
          { text: 'Sketch rose curves, spirals and limacons' },
          { text: 'Plot points by angle and radius' },
          { text: 'Teach trigonometric functions visually', href: '/coordinate-plane/' },
        ],
      },
      {
        h3: 'Design',
        items: [
          { text: 'Divide circles into equal sectors' },
          { text: 'Sketch mandalas and radial patterns' },
          { text: 'Draft clock faces and dials', href: '/log-log/' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Polar paper',
      bLabel: 'Square (Cartesian) paper',
      rows: [
        { feature: 'Position system', a: 'Angle plus radius', b: 'X and Y coordinates' },
        { feature: 'Circular data', a: 'Natural fit', b: 'Awkward to plot' },
        { feature: 'Straight-line data', a: 'Harder', b: 'Natural fit' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 polar grid — rings and radial spokes' },
      { base: 'letter-portrait-0.25in', caption: 'Letter polar grid for radar charts' },
      { base: 'a4-portrait-1cm', caption: 'A4 polar grid with wider rings' },
    ],
  },
  'semi-log': {
    applications: [
      {
        h3: 'Biology and population',
        items: [
          { text: 'Plot bacterial growth and doubling times' },
          { text: 'Track population growth curves' },
          { text: 'Compare infection and recovery rates' },
        ],
      },
      {
        h3: 'Finance and economics',
        items: [
          { text: 'Chart compound interest and long-term returns' },
          { text: 'Compare stock and index growth over decades' },
          { text: 'Plot inflation and price trends' },
        ],
      },
      {
        h3: 'Science and engineering',
        items: [
          { text: 'Graph earthquake magnitudes and energy release' },
          { text: 'Plot sound levels and decibels' },
          { text: 'Draw frequency-response and Bode plots', href: '/log-log/' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Semi-log paper',
      bLabel: 'Log-log paper',
      rows: [
        { feature: 'Logarithmic axes', a: 'One axis', b: 'Both axes' },
        { feature: 'Straightens', a: 'Exponential growth', b: 'Power-law relationships' },
        { feature: 'Slope means', a: 'Growth rate', b: 'The exponent in y = ax^b' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 semi-log — log vertical axis' },
      { base: 'letter-portrait-0.25in', caption: 'Letter semi-log for growth charts' },
      { base: 'a3-portrait-5mm', caption: 'A3 semi-log for wide data ranges' },
    ],
  },
  'hex-grid': {
    applications: [
      {
        h3: 'Board games and maps',
        items: [
          { text: 'Design RPG encounter and overworld maps' },
          { text: 'Lay out hex wargame terrain' },
          { text: 'Plan territories where every neighbour is equal', href: '/isometric-grid/' },
        ],
      },
      {
        h3: 'Chemistry',
        items: [
          { text: 'Sketch benzene rings and molecular structures' },
          { text: 'Draw aromatic and carbon frameworks' },
          { text: 'Practise bond angles and geometry' },
        ],
      },
      {
        h3: 'Design',
        items: [
          { text: 'Draft honeycomb and tiling patterns' },
          { text: 'Plan quilting and mosaic layouts', href: '/triangle-grid/' },
          { text: 'Prototype hex-based interfaces' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Hex grid',
      bLabel: 'Square grid',
      rows: [
        { feature: 'Neighbour distance', a: 'All six neighbours equal', b: 'Diagonals further than sides' },
        { feature: 'Movement feel', a: 'Fair in every direction', b: 'Faster on diagonals' },
        { feature: 'Best for', a: 'Maps, games, chemistry', b: 'Maths, graphs, engineering' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 · 5 mm hex honeycomb' },
      { base: 'letter-portrait-0.25in', caption: 'Letter hex grid for maps' },
      { base: 'a4-portrait-1cm', caption: 'A4 · 1 cm hex tiles for board games' },
    ],
  },
  'triangle-grid': {
    applications: [
      {
        h3: 'Tessellations',
        items: [
          { text: 'Build repeating geometric patterns' },
          { text: 'Combine triangles into hexagons and stars' },
          { text: 'Design surface patterns and tiles' },
        ],
      },
      {
        h3: 'Quilting and textiles',
        items: [
          { text: 'Plan triangle-piece quilt blocks' },
          { text: 'Draft half-square and equilateral patterns' },
          { text: 'Sketch embroidery and patchwork grids', href: '/hex-grid/' },
        ],
      },
      {
        h3: 'Geometry',
        items: [
          { text: 'Practise 60° constructions' },
          { text: 'Explore tiling and symmetry' },
          { text: 'Sketch 3-D forms on a triangular lattice', href: '/isometric-grid/' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Triangle grid',
      bLabel: 'Hex grid',
      rows: [
        { feature: 'Cells', a: 'Equilateral triangles', b: 'Regular hexagons' },
        { feature: 'Building block', a: 'Six triangles make one hex', b: 'Hexes are whole cells' },
        { feature: 'Best for', a: 'Tessellations and quilting', b: 'Maps and game boards' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 · 5 mm triangle lattice' },
      { base: 'letter-portrait-0.25in', caption: 'Letter triangle grid' },
      { base: 'a4-portrait-1cm', caption: 'A4 · 1 cm triangles for quilting' },
    ],
  },
  'lined-paper': {
    applications: [
      {
        h3: 'Handwriting',
        items: [
          { text: 'Keep notes and letters level and spaced' },
          { text: 'Practise cursive and print lettering' },
          { text: 'Write essays and study notes' },
        ],
      },
      {
        h3: 'School and office',
        items: [
          { text: 'Take meeting and lecture notes' },
          { text: 'Write to-do lists and daily logs' },
          { text: 'Draft documents by hand', href: '/cornell/' },
        ],
      },
      {
        h3: 'Journaling',
        items: [
          { text: 'Keep a daily journal with clean rules' },
          { text: 'Write letters and thank-you notes' },
          { text: 'Combine writing with small sketches', href: '/dot-grid/' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Lined paper',
      bLabel: 'Dot grid paper',
      rows: [
        { feature: 'Guides', a: 'Horizontal rules', b: 'Dots in both directions' },
        { feature: 'Writing', a: 'Natural for long text', b: 'Best for short notes and drawing' },
        { feature: 'Best for', a: 'Essays and letters', b: 'Journals and layouts' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 narrow-ruled paper' },
      { base: 'letter-portrait-0.25in', caption: 'Letter wide-ruled paper' },
      { base: 'a4-portrait-1cm', caption: 'A4 wide rules for young writers' },
    ],
  },
  'coordinate-plane': {
    applications: [
      {
        h3: 'Algebra',
        items: [
          { text: 'Graph linear equations and slopes' },
          { text: 'Plot quadratics, exponentials and functions' },
          { text: 'Find intercepts and intersections' },
        ],
      },
      {
        h3: 'Geometry',
        items: [
          { text: 'Plot polygons and compute distances' },
          { text: 'Work translations, reflections and rotations' },
          { text: 'Show symmetry and the midpoint formula', href: '/polar/' },
        ],
      },
      {
        h3: 'Data',
        items: [
          { text: 'Draw scatter plots and lines of best fit' },
          { text: 'Chart two-variable relationships' },
          { text: 'Teach negative numbers on the axes', href: '/number-grid/' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Coordinate plane',
      bLabel: 'Square grid',
      rows: [
        { feature: 'Axes', a: 'Bold X and Y through the centre', b: 'Uniform lines only' },
        { feature: 'Quadrants', a: 'Four marked regions', b: 'No marked regions' },
        { feature: 'Best for', a: 'Graphing and functions', b: 'General drawing and notes' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 · 5 mm coordinate plane with axes' },
      { base: 'letter-portrait-0.25in', caption: 'Letter coordinate plane' },
      { base: 'a4-portrait-1cm', caption: 'A4 · 1 cm grid for classroom graphs' },
    ],
  },
  'number-grid': {
    applications: [
      {
        h3: 'Counting and number sense',
        items: [
          { text: 'Practise counting from 1 to 100' },
          { text: 'Spot number order and place value' },
          { text: 'Skip count by twos, fives and tens' },
        ],
      },
      {
        h3: 'Arithmetic',
        items: [
          { text: 'Move right to add and left to subtract' },
          { text: 'Move down to add ten, up to subtract ten' },
          { text: 'Build a mental number line', href: '/coordinate-plane/' },
        ],
      },
      {
        h3: 'Games and activities',
        items: [
          { text: 'Play number bingo and battleship' },
          { text: 'Colour multiples to reveal patterns' },
          { text: 'Build classroom wall charts', href: '/sudoku/' },
        ],
      },
    ],
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 1-100 number grid' },
      { base: 'letter-portrait-0.25in', caption: 'Letter number grid worksheet' },
      { base: 'a3-portrait-5mm', caption: 'A3 number grid for the wall' },
    ],
  },
  sudoku: {
    applications: [
      {
        h3: 'Puzzle solving',
        items: [
          { text: 'Solve puzzles from books and screens' },
          { text: 'Write candidates in the corner of each cell' },
          { text: 'Keep a reusable supply of boards' },
        ],
      },
      {
        h3: 'Education',
        items: [
          { text: 'Build logic and reasoning skills' },
          { text: 'Run classroom puzzle activities', href: '/number-grid/' },
          { text: 'Practise pencil-and-paper problem solving' },
        ],
      },
      {
        h3: 'Puzzle making',
        items: [
          { text: 'Design and test your own sudoku puzzles' },
          { text: 'Copy puzzles into a personal book' },
          { text: 'Lay out printable puzzle pages', href: '/blank-table/' },
        ],
      },
    ],
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 blank 9 × 9 sudoku grid' },
      { base: 'letter-portrait-0.25in', caption: 'Letter sudoku board' },
      { base: 'a3-portrait-5mm', caption: 'A3 sudoku with larger cells' },
    ],
  },
  'blank-table': {
    applications: [
      {
        h3: 'Planning and schedules',
        items: [
          { text: 'Build weekly planners and timetables' },
          { text: 'Track habits and chores' },
          { text: 'Plan lessons and meetings', href: '/cornell/' },
        ],
      },
      {
        h3: 'Lists and inventory',
        items: [
          { text: 'Keep checklists and packing lists' },
          { text: 'Log inventory and supplies' },
          { text: 'Record attendance and scores', href: '/number-grid/' },
        ],
      },
      {
        h3: 'Paper spreadsheets',
        items: [
          { text: 'Track budgets and expenses' },
          { text: 'Compare products and options' },
          { text: 'Collect survey and tally data' },
        ],
      },
    ],
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 blank table with a header row' },
      { base: 'letter-portrait-0.25in', caption: 'Letter blank table' },
      { base: 'a3-portrait-5mm', caption: 'A3 table for wall charts' },
    ],
  },
  cornell: {
    applications: [
      {
        h3: 'Lectures and classes',
        items: [
          { text: 'Take notes in the wide right-hand area' },
          { text: 'Add questions in the cue column' },
          { text: 'Summarise each page in the bottom strip' },
        ],
      },
      {
        h3: 'Reading and revision',
        items: [
          { text: 'Capture the point of each section' },
          { text: 'Turn notes into self-testing cards' },
          { text: 'Review by covering the notes column', href: '/lined-paper/' },
        ],
      },
      {
        h3: 'Meetings and planning',
        items: [
          { text: 'Record action items and follow-ups' },
          { text: 'Link each note to a keyword' },
          { text: 'Build a one-line recap per page', href: '/blank-table/' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Cornell notes',
      bLabel: 'Lined paper',
      rows: [
        { feature: 'Layout', a: 'Cue column, notes and summary', b: 'Plain rules' },
        { feature: 'Review', a: 'Built-in self-testing', b: 'No review structure' },
        { feature: 'Best for', a: 'Study and revision', b: 'Long-form writing' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 Cornell notes layout' },
      { base: 'letter-portrait-0.25in', caption: 'Letter Cornell notes' },
      { base: 'a4-portrait-1cm', caption: 'A4 Cornell notes with a wider cue column' },
    ],
  },
  'log-log': {
    applications: [
      {
        h3: 'Physics',
        items: [
          { text: 'Plot power laws and scaling relationships' },
          { text: 'Measure the exponent of a data fit' },
          { text: 'Study metabolic scaling across animals' },
        ],
      },
      {
        h3: 'Engineering',
        items: [
          { text: 'Draw frequency-response curves' },
          { text: 'Plot filter gain over decades', href: '/semi-log/' },
          { text: 'Analyse fluid flow and turbulence' },
        ],
      },
      {
        h3: 'Science',
        items: [
          { text: 'Graph earthquake magnitude versus frequency' },
          { text: 'Plot reaction rates and kinetics' },
          { text: 'Compare widely separated magnitudes', href: '/polar/' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Log-log paper',
      bLabel: 'Semi-log paper',
      rows: [
        { feature: 'Logarithmic axes', a: 'Both axes', b: 'One axis' },
        { feature: 'Straightens', a: 'Power laws', b: 'Exponential growth' },
        { feature: 'Slope means', a: 'Exponent', b: 'Growth rate' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 log-log — log scale on both axes' },
      { base: 'letter-portrait-0.25in', caption: 'Letter log-log paper' },
      { base: 'a3-portrait-5mm', caption: 'A3 log-log for wide-ranging data' },
    ],
  },
  perspective: {
    applications: [
      {
        h3: 'Art and illustration',
        items: [
          { text: 'Draw rooms and hallways receding to a point' },
          { text: 'Sketch streets and buildings' },
          { text: 'Block out scenes before adding detail' },
        ],
      },
      {
        h3: 'Architecture',
        items: [
          { text: 'Sketch building elevations in perspective' },
          { text: 'Draw interiors and exteriors' },
          { text: 'Present concepts with depth', href: '/isometric-grid/' },
        ],
      },
      {
        h3: 'Design',
        items: [
          { text: 'Visualise products and interiors' },
          { text: 'Draft stage and set layouts' },
          { text: 'Create thumbnail concept scenes', href: '/engineering/' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Perspective grid',
      bLabel: 'Isometric grid',
      rows: [
        { feature: 'Lines', a: 'Converge to vanishing points', b: 'Parallel at fixed angles' },
        { feature: 'Depth', a: 'Realistic and dramatic', b: 'Even and measurable' },
        { feature: 'Best for', a: 'Scenes and rooms', b: 'Products and diagrams' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 one-point perspective grid' },
      { base: 'letter-portrait-0.25in', caption: 'Letter perspective grid' },
      { base: 'a4-portrait-1cm', caption: 'A4 perspective grid for room sketches' },
    ],
  },
  english: {
    applications: [
      {
        h3: 'Songwriting',
        items: [
          { text: 'Sketch a verse and chorus as a lead sheet' },
          { text: 'Add chord symbols above the melody line' },
          { text: 'Rewrite a lyric under each phrase' },
        ],
      },
      {
        h3: 'Chord charts',
        items: [
          { text: 'Map a chord progression bar by bar' },
          { text: 'Mark the key and time signature at the top' },
          { text: 'Notate a turnaround or key change' },
        ],
      },
      {
        h3: 'Sharing and rehearsing',
        items: [
          { text: 'Print one copy per band member' },
          { text: 'Pass out clean charts at rehearsal' },
          { text: 'Save the PDF to share with collaborators' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Printed at home',
      bLabel: 'Bought manuscript notebook',
      rows: [
        { feature: 'Cost', a: 'Free, unlimited copies', b: 'Paid per notebook' },
        { feature: 'Layout', a: 'Any of 7 paper sizes', b: 'Fixed to the notebook' },
        { feature: 'Reprinting', a: 'Print a fresh sheet anytime', b: 'Buy a new notebook' },
        { feature: 'Best for', a: 'Flexible practice and drafts', b: 'A bound, portable log' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 printable staff paper — blank staves for notation' },
      { base: 'letter-portrait-0.25in', caption: 'Letter staff paper — US music sheet size' },
      { base: 'a3-portrait-5mm', caption: 'A3 staff paper — larger staves for young students' },
    ],
  },
  engineering: {
    applications: [
      {
        h3: 'Engineering and drafting',
        items: [
          { text: 'Sketch mechanical parts on a light grid' },
          { text: 'Record the drawing name and scale in the title block' },
          { text: 'Draft circuit and electrical layouts', href: '/square-grid/' },
        ],
      },
      {
        h3: 'Lab and coursework',
        items: [
          { text: 'Keep lab data in aligned tables' },
          { text: 'Annotate measurements and results' },
          { text: 'Submit traceable, titled sheets', href: '/log-log/' },
        ],
      },
      {
        h3: 'Technical sketching',
        items: [
          { text: 'Draw isometric and orthographic views' },
          { text: 'Plan layouts at 2 mm or 5 mm precision' },
          { text: 'Add borders and notes to drawings', href: '/isometric-grid/' },
        ],
      },
    ],
    comparison: {
      aLabel: 'Engineering paper',
      bLabel: 'Square grid',
      rows: [
        { feature: 'Grid', a: 'Light 5 mm or 1/4 inch', b: 'Standard, more visible' },
        { feature: 'Title block', a: 'Boxed corner for details', b: 'Usually none' },
        { feature: 'Best for', a: 'Technical sketches and labs', b: 'General maths and drawing' },
      ],
    },
    gallery: [
      { base: 'a4-portrait-5mm', caption: 'A4 engineering paper with a title block' },
      { base: 'letter-portrait-0.25in', caption: 'Letter engineering grid' },
      { base: 'a4-portrait-1cm', caption: 'A4 coarse engineering grid' },
    ],
  },
};
