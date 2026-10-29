// Per-paper-type page content (original copy). Keyed by PaperType.slug.
// Structure follows the tool-first layout of a graph-paper generator, plus a
// long-form guide, a sizing table, a print how-to (mirrored in HowTo JSON-LD),
// an FAQ (mirrored in FAQPage JSON-LD) and related-type links.
export interface PaperPageContent {
  intro: string;                              // direct-answer lead, primary keyword in first sentence
  takeaways: string[];                        // 3-4 TL;DR bullets
  whatIs: string;                             // "What is …" definition
  article: { h3: string; body: string }[];    // long-form guide subsections
  sizing?: { opt: string; feel: string; use: string }[]; // comparison table
  printing: string[];                         // ordered how-to-print steps (HowTo JSON-LD source)
  faq: { q: string; a: string }[];
  related: { href: string; text: string }[];
}

export const paperPages: Record<string, PaperPageContent> = {
  'square-grid': {
    intro:
      'A square grid is a sheet printed with evenly spaced horizontal and vertical lines that cross into identical squares — the classic graph paper for maths, drawing and design. Pick a paper size, a spacing from 2 mm to 1 in, and a line color, then download a print-ready PDF, PNG or SVG that is true to scale.',
    takeaways: [
      'A 5 mm grid gives 42 squares across an A4 page, the standard for school maths.',
      'Every download is vector PDF or SVG, so the lines stay sharp at any print size.',
      'The generator, templates and all 84 size-and-spacing files are free with no watermark.',
    ],
    whatIs:
      'A square grid is a sheet printed with evenly spaced horizontal and vertical lines that cross into identical squares. Each square is a fixed size — commonly 5 mm, 1 cm or 0.25 in — so you can measure, plot and sketch without a ruler. Students use a 5 mm grid for maths and a 1 cm grid for early counting; engineers pick a 2 mm grid for precise circuit and mechanical layouts. A standard A4 sheet of 5 mm grid holds 42 squares across, enough for most homework problems and quick diagrams.',
    article: [
      { h3: 'Square grid vs dot grid', body: 'Square grids use solid lines in both directions, while dot grids print only the intersection points. Solid lines are easier to measure against, which is why a square grid is the default for maths and engineering. Dot paper looks cleaner for notes and bullet journals because the dots stay out of the way.' },
      { h3: 'Choosing the right grid spacing', body: 'Spacing is the distance between two neighbouring lines. Use 5 mm for school maths and handwriting practice, 1 cm for early counting and large diagrams, and 2 mm for fine technical work. On US Letter paper, 1/4 inch is the common classroom grid.' },
      { h3: 'Using a square grid for maths and drawing', body: 'The squares act as a built-in ruler. Plot points and graph equations by counting squares, draw floor plans to scale by assigning each square a length, and sketch shapes without measuring every line. The grid keeps rows and columns aligned for tables and schedules too.' },
    ],
    sizing: [
      { opt: '2 mm', feel: 'Fine, dense grid', use: 'Circuit and mechanical layouts' },
      { opt: '5 mm', feel: 'Standard school grid', use: 'Maths, notes and graphs' },
      { opt: '1 cm / 0.25 in', feel: 'Large, easy-to-count squares', use: 'Counting practice and big sketches' },
    ],
    printing: [
      'Choose your paper size — A4 and Letter print on any home printer, while A3 and Tabloid suit large diagrams.',
      'Pick the spacing and line color that fit your work.',
      'Download the PDF and open it in any PDF reader.',
      'Print at 100% scale with fit-to-page turned off, and check the paper size matches so each square stays true to size.',
    ],
    faq: [
      { q: 'What is a square grid used for?', a: 'It is used for maths, graphs, drawing and design. The squares act as a built-in ruler, so you can plot points, draw shapes to scale and sketch floor plans without measuring every line.' },
      { q: 'How many squares are in a square grid?', a: 'It depends on the spacing. A 5 mm grid gives 42 squares across an A4 page and 59 down, about 2,478 squares in total; a 1 cm grid gives 21 across and 29 down. 5 mm is the standard for school maths.' },
      { q: 'Which square grid PDF size should I download?', a: 'A4 and Letter cover most home and classroom printing. Choose A3 or Tabloid when you need a larger sheet for technical drawings or posters.' },
      { q: 'How do I print a square grid PDF at the right scale?', a: 'Set your printer to 100% scale and turn off fit-to-page. Check that the paper size matches the one you picked, so each square prints at its true 5 mm, 1 cm or 0.25 in.' },
      { q: 'What is the difference between graph paper and grid paper?', a: 'They are two names for the same thing. Graph paper usually implies a square grid for plotting, while grid paper can also mean dot, hex or triangle grids.' },
    ],
    related: [
      { href: '/isometric-grid/', text: 'Isometric Grid Paper' },
      { href: '/hex-grid/', text: 'Hexagonal Grid Paper' },
      { href: '/coordinate-plane/', text: 'Coordinate Plane Paper' },
      { href: '/engineering/', text: 'Engineering Paper' },
    ],
  },
  'staff-paper': {
    intro:
      'Staff paper is a sheet printed with groups of five parallel lines that hold musical notes. Download blank staves in 7 paper sizes, then print as many as you need for notation, guitar tabs and songwriting — every sheet free and watermark-free.',
    takeaways: [
      'Each staff is a group of five lines, and a blank A4 sheet holds about 9 staves.',
      'The PDF and SVG are vector files, so the lines stay crisp when enlarged.',
      'Pick any size from A4 to Poster for students, teachers or easy reading.',
    ],
    whatIs:
      'Staff paper is a sheet printed with groups of five parallel lines that hold musical notes. Each group is a staff, and a blank A4 sheet usually fits 8 to 10 staves with room between them for lyrics and chord symbols. Musicians print it to hand-write melodies, guitar tabs and exercises without drawing the lines themselves.',
    article: [
      { h3: 'How many lines are in a music staff', body: 'Every staff has exactly five lines and four spaces. Notes sit on the lines or in the spaces, and their vertical position tells you the pitch. The five lines are the reason staff paper is sometimes called five-line paper.' },
      { h3: 'Writing notes by hand', body: 'Place the note heads on the lines or spaces, and add stems, flags and beams as needed. Leave room between staves for lyrics, chord names or fingerings, so the page stays easy to read after you fill it in.' },
      { h3: 'Staff paper for guitar and tab', body: 'Standard notation works for any instrument, but guitarists often want a combined staff-and-tab layout. A blank staff sheet also works as tab paper if you draw six lines instead of five, or use it for chord charts and scale exercises.' },
    ],
    sizing: [
      { opt: 'A4 / Letter', feel: 'About 9 staves per page', use: 'Songwriting and exercises' },
      { opt: 'A3 / Tabloid', feel: 'Larger, wider-spaced staves', use: 'Young students and easy reading' },
      { opt: 'Poster', feel: 'Very large staves', use: 'Classroom charts and displays' },
    ],
    printing: [
      'Choose a paper size — A4 and Letter are the easiest to print.',
      'Download the PDF, or grab the SVG to edit the staff spacing in design software.',
      'Open the file in any PDF reader or editor.',
      'Print at 100% scale so the staves keep their intended spacing.',
    ],
    faq: [
      { q: 'How many lines are in a music staff?', a: 'Five. Each staff is a group of five parallel lines, and the notes sit on the lines or in the spaces between them.' },
      { q: 'What is blank staff paper used for?', a: 'Musicians and students use it to write melodies, harmonies, chords and guitar tablature by hand, and teachers use it for music theory exercises.' },
      { q: 'How many staves fit on one page?', a: 'A standard A4 sheet holds about 9 staves with enough space between them for lyrics or chord names.' },
      { q: 'Which paper size should I use for staff paper?', a: 'A4 and Letter are the easiest to print. Choose A3 or Tabloid if you want larger staves for young students or easier reading.' },
      { q: 'Can I print staff paper with a clef already drawn?', a: 'These sheets are blank so you can add your own clef. Write a treble or bass clef at the start of each staff with a pen, or edit the SVG to add it before printing.' },
    ],
    related: [
      { href: '/square-grid/', text: 'Square Grid' },
      { href: '/lined-paper/', text: 'Lined Paper' },
      { href: '/cornell/', text: 'Cornell Notes Paper' },
    ],
  },
  'dot-grid': {
    intro:
      'Dot grid paper is printed with a grid of small dots instead of solid lines, usually spaced 5 mm apart. Download dot grid templates in 7 sizes and 6 spacings for bullet journaling, sketching and calligraphy — light dots that guide without dominating the page.',
    takeaways: [
      '5 mm is the standard dot spacing for bullet journals.',
      'The dots guide your hand but stay faint enough to ignore.',
      'All PDF, PNG and SVG files are free and print at true scale.',
    ],
    whatIs:
      'Dot grid paper is printed with a grid of small dots instead of solid lines, usually spaced 5 mm apart. The dots give you a guide for drawing and writing while staying faint enough to ignore. Bullet journalers and sketchers prefer it because the dots keep things aligned without the heavy lines of graph paper.',
    article: [
      { h3: 'Dot grid paper vs square grid', body: 'A square grid draws solid lines in both directions, so the page looks busy behind your writing. Dot paper keeps only the intersection points, which gives the same alignment grid with a cleaner result — the reason journals and planners favour dots.' },
      { h3: 'Choosing a dot spacing', body: 'The spacing is the distance between the centres of two neighbouring dots. 5 mm is the everyday choice for journals, 1 cm is roomier for sketches, and 2 mm gives a fine grid for detailed drawings and calligraphy practice.' },
      { h3: 'Using dot grids for journals and layouts', body: 'Use the dots to draw straight lines for sections and tables, align handwriting, and build simple charts or habit trackers. Because the dots are faint, your finished layout reads as clean boxes and lines rather than a grid.' },
    ],
    sizing: [
      { opt: '2 mm', feel: 'Fine, subtle field of dots', use: 'Detailed drawing and calligraphy' },
      { opt: '5 mm', feel: 'Standard journal spacing', use: 'Bullet journals and notes' },
      { opt: '1 cm / 0.25 in', feel: 'Wide, airy spacing', use: 'Sketches and large layouts' },
    ],
    printing: [
      'Choose a paper size and dot spacing.',
      'Pick the dot color that suits your journal or printer ink.',
      'Download the PDF, PNG or SVG.',
      'Print at 100% scale so the dot spacing stays accurate.',
    ],
    faq: [
      { q: 'What is dot grid paper used for?', a: 'It is used for bullet journaling, calligraphy practice, sketching and layout planning, because the dots align your work without dominating the page.' },
      { q: 'What is the standard dot spacing?', a: '5 mm is the most common, and 1 cm and 1/4 inch are also widely used. The spacing is the distance between the centres of two neighbouring dots.' },
      { q: 'Is dot grid paper the same as graph paper?', a: 'Not quite. Graph paper uses solid lines, while dot grid paper uses only the intersection points, so the page looks cleaner for writing and notes.' },
      { q: 'Can I print dot grid paper at home?', a: 'Yes. Download the PDF for your paper size and print at 100% scale so the dot spacing stays accurate.' },
      { q: 'Can I draw straight lines on dot grid paper?', a: 'Yes. Line up a ruler between the dots to draw clean straight lines, or connect the dots by eye for quick boxes, charts and tables.' },
    ],
    related: [
      { href: '/square-grid/', text: 'Square Grid' },
      { href: '/lined-paper/', text: 'Lined Paper' },
      { href: '/cornell/', text: 'Cornell Notes Paper' },
      { href: '/hex-grid/', text: 'Hexagonal Grid Paper' },
    ],
  },
  'isometric-grid': {
    intro:
      'Isometric grid paper is printed with three line families at 0°, 60° and 120° that join into a lattice of equilateral triangles, so you can sketch 3-D objects in proportion. Choose a spacing from 2 mm to 1 in and download a print-ready isometric PDF, PNG or SVG.',
    takeaways: [
      'The three line families read as 30° diagonals on the page and make depth appear instantly.',
      'One grid spacing equals one unit on every axis, so cubes and rooms stay in proportion.',
      'All 84 isometric files are free to download and print at true scale.',
    ],
    whatIs:
      'Isometric grid paper is a sheet printed with three families of lines at 0°, 60° and 120° that join into a repeating lattice of equilateral triangles. Because the lines run at those three angles, you can sketch a 3-D object along three equal axes on a flat page. Drafters and game artists use it to keep cubes, buildings and pipes in proportion: one grid spacing — 5 mm or 1 cm — equals one unit on every axis. Unlike square graph paper, the diamond-shaped cells make depth read instantly, so no vanishing points are needed.',
    article: [
      { h3: 'Isometric vs perspective drawing', body: 'Perspective uses vanishing points and lines that converge, which is realistic but harder to measure. Isometric keeps all three axes parallel at fixed angles, so the same length stays the same everywhere on the page — ideal for technical and game art.' },
      { h3: 'Choosing an isometric spacing', body: 'The spacing is the distance between parallel lines and equals one unit on each axis. Use 2 mm for fine mechanical work, 5 mm for detailed sketches and 1 cm for diagrams or classroom drawing.' },
      { h3: 'Sketching cubes and rooms', body: 'Draw along the 0° and 60° diagonals for the two receding axes, and vertically for the third. Because the grid is uniform, you can stack cubes, extrude walls and draw pipes simply by counting grid steps.' },
    ],
    sizing: [
      { opt: '2 mm', feel: 'Fine, dense lattice', use: 'Mechanical and PCB-style layouts' },
      { opt: '5 mm', feel: 'Standard drawing grid', use: 'Product sketches and game art' },
      { opt: '1 cm', feel: 'Large, easy-to-count cells', use: 'Diagrams and classroom work' },
    ],
    printing: [
      'Choose a paper size and the isometric spacing you need.',
      'Pick a line color if you want gray or green lines instead of blue.',
      'Download the PDF for printing, or the SVG to edit in design software.',
      'Print at 100% scale so the 30° angles and spacing stay correct.',
    ],
    faq: [
      { q: 'What is isometric grid paper used for?', a: 'It is used for technical and 3-D drawing. Because the grid runs at 0°, 60° and 120°, you can draw cubes, rooms, product designs and game sprites that keep their proportions without calculating vanishing points.' },
      { q: 'What angle is an isometric grid?', a: 'An isometric grid is made of three line families at 0°, 60° and 120°. On the page the diagonal families read as 30° lines, and the three families meet to form equilateral triangles.' },
      { q: 'Which spacing should I use for isometric drawing?', a: '5 mm and 1 cm are the most common. Use 5 mm for detailed sketches and 1 cm for diagrams or classroom work; 2 mm suits fine mechanical or PCB-style layouts.' },
      { q: 'Which paper size is best for isometric paper?', a: 'A4 and Letter cover most sketches and print on any home printer. Choose A3 or Tabloid when you need room for a large object or a full room layout.' },
      { q: 'Is isometric paper the same as triangle grid paper?', a: 'They use the same three line angles, so the cells look alike. Isometric paper is marketed for 3-D drawing, while triangle paper is used for flat geometric patterns and tessellations.' },
    ],
    related: [
      { href: '/square-grid/', text: 'Square Grid' },
      { href: '/hex-grid/', text: 'Hexagonal Grid Paper' },
      { href: '/triangle-grid/', text: 'Triangle Grid Paper' },
      { href: '/engineering/', text: 'Engineering Paper' },
    ],
  },
  polar: {
    intro:
      'Polar graph paper is printed with concentric circles and lines that radiate from the centre, so you can plot data by angle and distance instead of X and Y. Download polar templates in 7 sizes for radar charts, antenna patterns and spirals — free as PDF, PNG or SVG.',
    takeaways: [
      'Polar paper plots by angle and radius rather than horizontal and vertical axes.',
      'A standard sheet draws a radial line every 15°, giving 24 spokes around the circle.',
      'Concentric rings give you a built-in scale, so you can read a radius without measuring.',
    ],
    whatIs:
      'Polar graph paper is printed with concentric circles and lines that radiate from the centre, so you can plot data by angle and distance instead of X and Y. Engineers and scientists use it for radar charts, antenna patterns and anything measured in degrees. A standard sheet has circles every few millimetres and radial lines every 15°.',
    article: [
      { h3: 'How polar paper works', body: 'Each point is defined by two numbers: a radius (how far from the centre) and an angle (which direction). The rings measure the radius and the spokes measure the angle, so a point at radius 4 and angle 45° is four rings out along the 45° spoke.' },
      { h3: 'Plotting a radar chart', body: 'Draw one spoke per category, then mark the value along each spoke and connect the marks into a polygon. The concentric rings give you a built-in scale, so the chart stays accurate without measuring.' },
      { h3: 'Polar paper for spirals and patterns', body: 'Spirals and circular designs follow the rings and spokes naturally. Sketch a spiral by increasing the radius as the angle turns, or use the spokes to divide a circle into equal sectors for pie charts and mandalas.' },
    ],
    sizing: [
      { opt: 'Fine rings', feel: 'Dense circular scale', use: 'Detailed radar and physics plots' },
      { opt: 'Standard rings', feel: 'Readable rings every few mm', use: 'Charts, spirals and classroom work' },
      { opt: 'Wide rings', feel: 'Fewer, larger rings', use: 'Simple diagrams and rough sketches' },
    ],
    printing: [
      'Choose a paper size — A4 and Letter suit most plots.',
      'Pick a ring spacing and line color.',
      'Download the PDF, or the SVG to edit in design software.',
      'Print at 100% scale so the rings stay concentric and evenly spaced.',
    ],
    faq: [
      { q: 'What is polar graph paper used for?', a: 'It is used to plot data by angle and radius, such as radar charts, antenna radiation patterns, spirals and polar coordinates in maths and physics.' },
      { q: 'How is polar graph paper different from square graph paper?', a: 'Square paper uses a horizontal and vertical axis. Polar paper uses a centre point with rings and spokes, so each position is an angle plus a distance.' },
      { q: 'What angle are the radial lines on polar paper?', a: 'Most polar grids draw a radial line every 15°, giving 24 lines around the full circle, though denser and lighter options exist.' },
      { q: 'Which paper size should I use for polar graph paper?', a: 'A4 and Letter work for most plots and print on any home printer. Choose A3 when you need a larger diagram.' },
      { q: 'Can I print polar graph paper with numbered rings?', a: 'These sheets are blank so you can label the rings yourself. Number each ring by hand, or open the SVG and add the numbers before printing.' },
    ],
    related: [
      { href: '/square-grid/', text: 'Square Grid' },
      { href: '/semi-log/', text: 'Semi-Log Graph Paper' },
      { href: '/log-log/', text: 'Log-Log Graph Paper' },
      { href: '/coordinate-plane/', text: 'Coordinate Plane Paper' },
    ],
  },
  'semi-log': {
    intro:
      'Semi-log graph paper has one linear axis and one logarithmic axis, which turns exponential growth into a straight line. Download semi-log templates in 7 sizes to plot population, bacterial growth and compound interest — free as PDF, PNG or SVG.',
    takeaways: [
      'Semi-log paper has one logarithmic and one linear axis.',
      'Constant percentage growth becomes a straight line, so growth rates are easy to compare.',
      'The log axis spans one to three decades, so it matches the range of your data.',
    ],
    whatIs:
      'Semi-log graph paper has one linear axis and one logarithmic axis, usually a linear horizontal axis and a log-scaled vertical axis. This layout turns exponential growth into a straight line, which makes growth rates easy to read. Scientists use it for population, bacterial growth and financial trends that grow by a fixed percentage.',
    article: [
      { h3: 'How a logarithmic scale works', body: 'A log scale stretches small values and compresses large ones, so each equal step multiplies by a fixed factor. The distance between 1 and 10 is the same as the distance between 10 and 100, which is why a doubling series plots as evenly spaced points.' },
      { h3: 'Reading growth rates', body: 'When exponential data is plotted on semi-log paper, a constant growth rate appears as a straight line. A steeper line means faster growth, so two growth curves are easy to compare at a glance.' },
      { h3: 'Choosing semi-log vs log-log', body: 'Use semi-log when one variable is linear and the other is exponential. Use log-log when both variables span many orders of magnitude, such as power-law relationships in physics and engineering.' },
    ],
    sizing: [
      { opt: '1 decade', feel: 'One order of magnitude per cycle', use: 'Narrow growth ranges' },
      { opt: '2 decades', feel: 'Two orders of magnitude', use: 'Typical population and financial data' },
      { opt: '3 decades', feel: 'Three orders of magnitude', use: 'Wide-ranging scientific data' },
    ],
    printing: [
      'Choose a paper size for your chart.',
      'Pick the linear-axis spacing and line color.',
      'Download the PDF for printing, or the SVG to edit.',
      'Print at 100% scale so the log cycles stay evenly spaced.',
    ],
    faq: [
      { q: 'What is semi-log graph paper used for?', a: 'It is used to plot exponential data such as population growth, bacterial counts, compound interest and earthquake magnitudes, where one value doubles at a steady rate.' },
      { q: 'What is the difference between semi-log and log-log paper?', a: 'Semi-log has one logarithmic axis and one linear axis. Log-log has logarithmic scales on both axes, for data that follows a power law.' },
      { q: 'Why does exponential data look straight on semi-log paper?', a: 'A logarithmic scale stretches small values and compresses large ones, so a constant percentage growth rate becomes a straight line that is easy to compare.' },
      { q: 'Which axis is logarithmic on semi-log paper?', a: 'Either can be, but the vertical axis is logarithmic on most printed sheets, while the horizontal axis stays linear.' },
      { q: 'What is a decade on a log scale?', a: 'A decade is a tenfold change, such as from 1 to 10 or from 10 to 100. Each decade takes up the same amount of space on a logarithmic axis.' },
    ],
    related: [
      { href: '/log-log/', text: 'Log-Log Graph Paper' },
      { href: '/polar/', text: 'Polar Graph Paper' },
      { href: '/coordinate-plane/', text: 'Coordinate Plane Paper' },
      { href: '/square-grid/', text: 'Square Grid' },
    ],
  },
  'hex-grid': {
    intro:
      'Hexagonal grid paper is printed with a honeycomb of regular hexagons that tile the page without gaps. Download hex grid templates in 7 sizes and 6 spacings for board-game maps, chemistry diagrams and design — free as PDF, PNG or SVG.',
    takeaways: [
      'Every hexagon has six equal sides and touches six neighbours at the same distance.',
      'The spacing controls the hexagon size, from fine 2 mm cells to large 1 in tiles.',
      'Pointy-top and flat-top orientations cover tall and wide maps alike.',
    ],
    whatIs:
      'Hexagonal grid paper is printed with a honeycomb of regular hexagons that tile the page without gaps. Each hexagon has 6 sides, and the cells share edges so they pack tightly. Game designers, cartographers and chemists use hex grids for board maps, territory layouts and molecular sketches.',
    article: [
      { h3: 'Why hex grids beat square grids for maps', body: 'On a square grid, diagonal neighbours are further away than side neighbours. On a hex grid, all six neighbours are the same distance, so movement and range feel fairer in board games and more natural for territory maps.' },
      { h3: 'Choosing a hex size', body: 'The spacing is roughly the size of one hexagon. Smaller values like 5 mm suit detailed maps and chemistry, while 1 cm tiles are easier to label for board games. The row stagger changes how the cells nest but not the hexagon diameter.' },
      { h3: 'Pointy-top vs flat-top hexagons', body: 'Pointy-top hexagons point upward and stagger left to right, which suits tall, vertical maps. Flat-top hexagons point sideways and suit wide, landscape maps. Both tile the same area; the choice is about which direction reads best.' },
    ],
    sizing: [
      { opt: '6–8 mm', feel: 'Dense honeycomb', use: 'Strategic overview maps' },
      { opt: '10–12 mm', feel: 'Balanced density', use: 'RPG encounter maps' },
      { opt: '15–20 mm', feel: 'Fewer, larger cells', use: 'Miniatures and labelled regions' },
    ],
    printing: [
      'Choose a paper size and hexagon size.',
      'Pick a line color for your map or diagram.',
      'Download the PDF for printing, or the SVG to edit the cells.',
      'Print at 100% scale so the hexagons stay regular and evenly spaced.',
    ],
    faq: [
      { q: 'What is hexagonal grid paper used for?', a: 'It is used for board game maps, war games, chemistry diagrams and any layout where every neighbouring cell is the same distance away.' },
      { q: 'How many sides does each hexagon have?', a: 'Six. The cells are regular hexagons with six equal sides, and they tile the page so each cell touches six others.' },
      { q: 'Is hex grid paper the same as graph paper?', a: 'No. Graph paper uses squares, where diagonal neighbours are further than side neighbours. Hex grids keep all six neighbours at the same distance.' },
      { q: 'Which spacing should I use for a hex grid?', a: 'The spacing is roughly the size of one hexagon. Smaller values like 5 mm suit detailed maps, while 1 cm suits board game tiles.' },
      { q: 'How do I measure the size of a hexagon?', a: 'Measure from the centre to any corner — that radius equals the length of one side. The spacing setting in the generator is roughly this radius, so a 5 mm setting gives hexagons about 5 mm per side.' },
    ],
    related: [
      { href: '/triangle-grid/', text: 'Triangle Grid Paper' },
      { href: '/isometric-grid/', text: 'Isometric Grid Paper' },
      { href: '/square-grid/', text: 'Square Grid' },
      { href: '/engineering/', text: 'Engineering Paper' },
    ],
  },
  'triangle-grid': {
    intro:
      'Triangle grid paper is printed with three line families that cross into a lattice of equilateral triangles. Download triangle grid templates in 7 sizes for tessellations, quilting and geometric patterns — free as PDF, PNG or SVG.',
    takeaways: [
      'The three line families run at 0°, 60° and 120°, forming 60° equilateral triangles.',
      'The cells pack evenly in every direction, so patterns repeat without gaps.',
      'Each triangle has three 60° angles, so patterns repeat without gaps or overlaps.',
    ],
    whatIs:
      'Triangle grid paper is printed with three families of lines that cross into a lattice of equilateral triangles. Every triangle has three equal sides and three 60° angles, so the cells pack evenly in every direction. Designers use it for tessellations, geometric patterns and 3-D sketches.',
    article: [
      { h3: 'Drawing tessellations', body: 'An equilateral triangle tiles the plane on its own, and combining triangles builds hexagons, diamonds and stars. Trace triangles repeatedly to make repeating patterns for quilting, tiling and surface design.' },
      { h3: 'Choosing a triangle size', body: 'The spacing sets the triangle size. 5 mm is standard for detailed patterns, while 1 cm suits larger tessellations and classroom geometry. The three line angles stay fixed regardless of spacing.' },
      { h3: 'Triangle grid vs isometric grid', body: 'The two use the same three line angles, so the cells look identical. Triangle paper is sold for flat geometric patterns, while isometric paper is labelled for 3-D drawing — the difference is mainly how you use it.' },
    ],
    sizing: [
      { opt: '2 mm', feel: 'Fine, dense triangles', use: 'Detailed patterns and technical work' },
      { opt: '5 mm', feel: 'Standard pattern grid', use: 'Tessellations and design' },
      { opt: '1 cm', feel: 'Large, easy-to-trace cells', use: 'Quilting and classroom geometry' },
    ],
    printing: [
      'Choose a paper size and triangle size.',
      'Pick a line color for your design.',
      'Download the PDF for printing, or the SVG to edit.',
      'Print at 100% scale so the 60° angles stay accurate.',
    ],
    faq: [
      { q: 'What is triangle grid paper used for?', a: 'It is used for geometric drawing, tessellations, quilting patterns and technical sketches that need equilateral triangles.' },
      { q: 'What angle are the lines on triangle grid paper?', a: 'The three line families run at 0°, 60° and 120°, so they meet to form equilateral triangles with 60° corners.' },
      { q: 'Is triangle grid paper the same as isometric grid paper?', a: 'They use the same three line angles, so the cells look alike. Isometric paper is labelled for 3-D drawing, while triangle paper is used for flat patterns.' },
      { q: 'Which spacing should I use for triangle grid paper?', a: '5 mm is standard for detailed work, and 1 cm suits larger tessellations and classroom geometry.' },
      { q: 'Can I draw 3-D sketches on triangle grid paper?', a: 'Yes. Because it uses the same 0°, 60° and 120° line families as isometric paper, you can sketch cubes and other 3-D objects along those three axes.' },
    ],
    related: [
      { href: '/hex-grid/', text: 'Hexagonal Grid Paper' },
      { href: '/isometric-grid/', text: 'Isometric Grid Paper' },
      { href: '/square-grid/', text: 'Square Grid' },
      { href: '/engineering/', text: 'Engineering Paper' },
    ],
  },
  'lined-paper': {
    intro:
      'Lined paper is printed with evenly spaced horizontal rules so handwriting stays straight, usually with a left margin line. Download ruled paper in 7 sizes and 6 line spacings, from wide-ruled to narrow-ruled — free as PDF, PNG or SVG.',
    takeaways: [
      'Wide-ruled paper spaces lines about 8 mm apart, narrow-ruled closer to 6 mm.',
      'A red left margin marks the start of the writing area.',
      'Line spacing runs from 2 mm up to 1 inch, so you can match any handwriting.',
    ],
    whatIs:
      'Lined paper is printed with evenly spaced horizontal rules so handwriting stays straight, usually with a left margin line. The spacing between lines is what changes: wide-ruled paper has about 8 mm between lines, while narrow ruled is closer to 6 mm. Students and writers use it for notes, essays and practice.',
    article: [
      { h3: 'Wide-ruled vs narrow-ruled vs college-ruled', body: 'Wide-ruled paper has about 8 mm between lines and suits larger handwriting. Narrow-ruled is about 6 mm and fits more text per page. College-ruled is the US standard, similar to narrow-ruled, with a margin down the left side.' },
      { h3: 'Choosing a line spacing', body: 'Pick the spacing that matches the handwriting. Young writers and large lettering need wide rules, while compact adult handwriting works on narrow rules. The generator lets you choose anything from 2 mm up to 1 inch.' },
      { h3: 'Using lined paper for notes and letters', body: 'The rules keep every line level and evenly spaced, so long notes and letters stay tidy. The margin gives a consistent place to start each line and room for dates, names or corrections.' },
    ],
    sizing: [
      { opt: 'Narrow (6 mm)', feel: 'More lines per page', use: 'Compact notes and essays' },
      { opt: 'Wide (8 mm)', feel: 'Roomier lines', use: 'Larger handwriting and schoolwork' },
      { opt: '1 cm / 0.5 in', feel: 'Very wide rules', use: 'Young children and practice' },
    ],
    printing: [
      'Choose a paper size and line spacing.',
      'Pick a line color if you want gray or green rules instead of blue.',
      'Download the PDF for printing, or the SVG to edit.',
      'Print at 100% scale so the line spacing stays correct.',
    ],
    faq: [
      { q: 'What is the difference between wide-ruled and narrow-ruled paper?', a: 'Wide-ruled paper has more space between lines, around 8 mm, for larger handwriting. Narrow-ruled paper has closer lines, around 6 mm, for smaller writing.' },
      { q: 'What is lined paper used for?', a: 'It is used for handwriting, school notes, letters and essays, because the rules keep each line straight and evenly spaced.' },
      { q: 'Can I choose the line spacing?', a: 'Yes. You can pick from 2 mm up to 1 inch, so you get wide or narrow rules to match the handwriting.' },
      { q: 'Which paper size should I use for lined paper?', a: 'A4 and Letter are the standard school and office sizes and print on any home printer.' },
      { q: 'What is college-ruled paper?', a: 'College-ruled paper is the common US notebook ruling with lines about 7 mm apart and a red margin line on the left. It sits between wide-ruled and narrow-ruled in line spacing.' },
    ],
    related: [
      { href: '/dot-grid/', text: 'Dot Grid Paper' },
      { href: '/cornell/', text: 'Cornell Notes Paper' },
      { href: '/staff-paper/', text: 'Staff Paper' },
    ],
  },
  'coordinate-plane': {
    intro:
      'Coordinate plane paper is printed with a light square grid and two heavier lines that mark the X and Y axes through the centre. Download coordinate grids in 7 sizes for plotting points and graphing equations — free as PDF, PNG or SVG.',
    takeaways: [
      'The X and Y axes cross at the origin (0, 0) and split the page into four quadrants.',
      'The axes are printed heavier than the grid so they stand out.',
      'Quadrants are numbered counter-clockwise, and points are written as ordered pairs (x, y).',
    ],
    whatIs:
      'Coordinate plane paper is printed with a light square grid and two heavier lines that mark the X and Y axes through the centre. The axes split the page into four quadrants so you can plot points with coordinates. Algebra students use it to graph equations and functions, with the axes meeting at the origin (0, 0).',
    article: [
      { h3: 'Reading the four quadrants', body: 'The axes divide the page into four quadrants, numbered counter-clockwise from the upper right. The upper right has positive X and Y, the upper left negative X and positive Y, and so on. Points are written as an ordered pair (x, y).' },
      { h3: 'Plotting points and lines', body: 'Start at the origin, move right or left along the X axis, then up or down along the Y axis, and mark the point. Connect points to graph a line or curve, using the grid squares to keep the scale even.' },
      { h3: 'Choosing a grid spacing', body: 'The spacing sets how many grid squares fit per unit. 5 mm gives a fine grid for detailed graphs, while 1 cm is easier to read for classroom work. Pick the spacing that matches the range of values you need to plot.' },
    ],
    sizing: [
      { opt: '2 mm', feel: 'Fine, precise grid', use: 'Detailed functions and curves' },
      { opt: '5 mm', feel: 'Standard graphing grid', use: 'Algebra and homework' },
      { opt: '1 cm', feel: 'Large, readable squares', use: 'Classroom demonstrations' },
    ],
    printing: [
      'Choose a paper size and grid spacing.',
      'Pick a line color for the grid and axes.',
      'Download the PDF for printing, or the SVG to edit.',
      'Print at 100% scale so the axes stay centred and the grid stays even.',
    ],
    faq: [
      { q: 'What is coordinate plane paper used for?', a: 'It is used in algebra and geometry to plot points, graph equations and show the relationship between two variables on X and Y axes.' },
      { q: 'Where is the origin on a coordinate plane?', a: 'The origin is the point (0, 0) where the X and Y axes cross, usually in the centre of the page.' },
      { q: 'How many quadrants does a coordinate plane have?', a: 'Four. The X and Y axes divide the page into four quadrants, numbered counter-clockwise from the upper right.' },
      { q: 'Which spacing should I use for coordinate paper?', a: '5 mm gives a fine grid for detailed graphs, while 1 cm is easier to read for classroom work and larger scales.' },
      { q: 'Can I print a numbered coordinate plane?', a: 'These sheets are blank so you can number the axes yourself. Label each grid line by hand, or open the SVG and add the numbers before printing.' },
    ],
    related: [
      { href: '/square-grid/', text: 'Square Grid' },
      { href: '/semi-log/', text: 'Semi-Log Graph Paper' },
      { href: '/polar/', text: 'Polar Graph Paper' },
      { href: '/number-grid/', text: 'Number Grid' },
    ],
  },
  'number-grid': {
    intro:
      'A number grid is a chart of the numbers 1 to 100 arranged in a 10 by 10 table, one number in each cell. Download number grids in 7 sizes for counting practice, skip counting and pattern spotting — free as PDF, PNG or SVG.',
    takeaways: [
      'A full 1-100 grid has 10 rows of 10, with 100 cells in total.',
      'The layout makes skip-counting patterns, like multiples of 5, easy to see.',
      'Move right to add, left to subtract, and down to add ten — the grid doubles as a number line.',
    ],
    whatIs:
      'A number grid is a chart of the numbers 1 to 100 arranged in a 10 by 10 table, one number in each cell. Teachers print it so children can practise counting, skip-counting and spotting patterns like the multiples of 5 running down a column. The 10 columns and 10 rows make the sequence easy to follow.',
    article: [
      { h3: 'How the 1-100 grid works', body: 'The numbers run left to right across each row, wrapping to the next row after every 10. The first row is 1 to 10, the second 11 to 20, and so on to 100. This layout makes number order and place value easy to see.' },
      { h3: 'Skip counting and patterns', body: 'Count by twos, fives or tens and mark each step to reveal a diagonal or column pattern. Multiples of 5 all end in 0 or 5, so they form two neat columns. These patterns help children internalise number relationships.' },
      { h3: 'Using number grids for addition and subtraction', body: 'Move right to add and left to subtract within a row, and move down to add ten or up to subtract ten. The grid turns arithmetic into a visible movement, which helps younger learners build a mental number line.' },
    ],
    sizing: [
      { opt: 'A4 / Letter', feel: 'One grid per page', use: 'Individual worksheets' },
      { opt: 'A3 / Tabloid', feel: 'Large, easy-to-read cells', use: 'Group work and wall charts' },
      { opt: 'Poster', feel: 'Very large 1-100 chart', use: 'Classroom display' },
    ],
    printing: [
      'Choose a paper size for the worksheet or wall chart.',
      'Download the PDF for printing, or the SVG to edit.',
      'Print in black and white or grayscale to save ink.',
      'Print at 100% scale so the numbers stay clear and aligned.',
    ],
    faq: [
      { q: 'What is a 1-100 number grid used for?', a: 'It is used to teach counting, number order, skip counting and addition and subtraction, and to help children spot number patterns.' },
      { q: 'How many numbers are on a number grid?', a: 'A full grid holds 100 numbers, from 1 to 100, arranged in 10 rows of 10.' },
      { q: 'Which size should I print for a number grid?', a: 'A4 and Letter are the standard classroom sizes. Choose A3 for a large wall chart or group work.' },
      { q: 'Can I use a number grid for skip counting?', a: 'Yes. The rows and columns make patterns easy to see, such as all multiples of 5 ending in 0 or 5.' },
      { q: 'Can I get a number grid that goes beyond 100?', a: 'This template covers 1 to 100. For a larger chart, print several pages and tape them together, or edit the SVG to extend the numbers.' },
    ],
    related: [
      { href: '/coordinate-plane/', text: 'Coordinate Plane Paper' },
      { href: '/blank-table/', text: 'Blank Table' },
      { href: '/sudoku/', text: 'Sudoku Grid' },
    ],
  },
  sudoku: {
    intro:
      'A sudoku grid is a 9 by 9 square divided into nine smaller 3 by 3 boxes, with 81 cells in total. Download blank sudoku grids in 7 sizes for logic practice and puzzle books — free as PDF, PNG or SVG.',
    takeaways: [
      'A sudoku grid is 9 squares wide and 9 tall, with 81 cells in total.',
      'The bold lines mark the nine 3 by 3 boxes.',
      'Blank grids leave room to pencil in candidates in each cell as you solve.',
    ],
    whatIs:
      'A sudoku grid is a 9 by 9 square divided into nine smaller 3 by 3 boxes, with 81 cells in total. Some cells are pre-filled as clues and the rest are left blank for the solver. The goal is to place the digits 1 to 9 so each row, column and box contains every digit exactly once.',
    article: [
      { h3: 'How the sudoku grid is laid out', body: 'The 9 by 9 board is split into nine boxes of 3 by 3. The lines between boxes are drawn heavier than the lines inside each box, so you can see the three regions you must satisfy at a glance.' },
      { h3: 'Writing in candidates', body: 'Puzzle solvers often write small candidate digits in the corner of each cell, then erase them as they narrow the options. Blank grids give you the room to make your own puzzles or fill in printed clues by hand.' },
      { h3: 'Using blank grids for puzzle books', body: 'Print a batch of blank grids to copy puzzles from a screen or book, or to design your own. Keep the grids in a folder and you have a reusable supply for practice and puzzle-making.' },
    ],
    sizing: [
      { opt: 'A4 / Letter', feel: 'One standard grid per page', use: 'Everyday solving' },
      { opt: 'A3 / Tabloid', feel: 'Larger cells', use: 'Easier writing and kids' },
      { opt: 'Poster', feel: 'Very large grid', use: 'Classroom demonstrations' },
    ],
    printing: [
      'Choose a paper size for the grid.',
      'Download the PDF for printing, or the SVG to edit.',
      'Print in black and white for the clearest lines.',
      'Print at 100% scale so the 3 by 3 boxes stay square.',
    ],
    faq: [
      { q: 'How many squares are in a sudoku grid?', a: '81. A sudoku grid is 9 squares wide and 9 squares tall, divided into nine boxes of 3 by 3.' },
      { q: 'What are the rules of sudoku?', a: 'Fill every row, column and 3 by 3 box with the digits 1 to 9, using each digit exactly once in each row, column and box.' },
      { q: 'What is a sudoku grid used for?', a: 'It is the board for sudoku puzzles, used for logic practice, classroom activities and printed puzzle books.' },
      { q: 'Which paper size should I print sudoku on?', a: 'A4 and Letter are standard. Choose A3 or Tabloid for larger cells that are easier to write in.' },
      { q: 'How many clues does a sudoku puzzle need?', a: 'A proper sudoku puzzle has exactly one solution. Well-formed puzzles usually have around 25 to 30 pre-filled clues, though the exact count depends on the puzzle design.' },
    ],
    related: [
      { href: '/number-grid/', text: 'Number Grid' },
      { href: '/blank-table/', text: 'Blank Table' },
      { href: '/coordinate-plane/', text: 'Coordinate Plane Paper' },
      { href: '/lined-paper/', text: 'Lined Paper' },
    ],
  },
  'blank-table': {
    intro:
      'A blank table is a sheet divided into rows and columns that you fill in with your own headings and data. Download empty tables in 7 sizes for schedules, checklists and simple paper spreadsheets — free as PDF, PNG or SVG.',
    takeaways: [
      'The standard layout has 4 columns and 10 rows with a header row.',
      'The header row is left blank so you can label each column yourself.',
      'Four columns cover most lists — date, item, quantity and notes.',
    ],
    whatIs:
      'A blank table is a sheet divided into rows and columns that you fill in with your own headings and data. A common layout has 4 columns and 10 rows, with a bold header row across the top. People print blank tables for schedules, checklists, inventories and simple spreadsheets on paper.',
    article: [
      { h3: 'How the blank table is laid out', body: 'The page is divided into evenly spaced columns and rows, with a heavier line under the header row. The header cells are empty so you can write your own column titles, then fill the rows below with data.' },
      { h3: 'Choosing columns for your data', body: 'Four columns suit most lists — for example date, item, quantity and notes. If you need more columns, print the page and rule extra vertical lines, or edit the SVG to add columns before printing.' },
      { h3: 'Using tables for tracking and planning', body: 'Blank tables work for schedules, budgets, attendance, checklists and inventories. The grid keeps entries aligned, and the header row makes each column self-explanatory.' },
    ],
    sizing: [
      { opt: 'A4 / Letter', feel: 'Compact table', use: 'Lists and schedules' },
      { opt: 'A3 / Tabloid', feel: 'Larger cells', use: 'Inventories and wall charts' },
      { opt: 'Poster', feel: 'Very large table', use: 'Group tracking and displays' },
    ],
    printing: [
      'Choose a paper size for the table.',
      'Download the PDF for printing, or the SVG to edit.',
      'Print in black and white to save ink.',
      'Print at 100% scale so the rows and columns stay straight.',
    ],
    faq: [
      { q: 'What is a blank table used for?', a: 'It is used to organise data by hand, such as schedules, checklists, budgets, attendance lists and simple paper spreadsheets.' },
      { q: 'How many rows and columns does a blank table have?', a: 'The standard layout has 4 columns and 10 rows with a header row, though you can add or remove rows on the page.' },
      { q: 'Can I write my own headings?', a: 'Yes. The header row is left blank so you can label each column to match your data.' },
      { q: 'Which paper size should I use for a blank table?', a: 'A4 and Letter work for most lists and print on any printer. Choose A3 for a large wall chart.' },
      { q: 'Can I change the number of columns?', a: 'The template uses 4 columns. Rule extra vertical lines by hand, or open the SVG and add columns to match the data you need to track.' },
    ],
    related: [
      { href: '/number-grid/', text: 'Number Grid' },
      { href: '/sudoku/', text: 'Sudoku Grid' },
      { href: '/cornell/', text: 'Cornell Notes Paper' },
      { href: '/lined-paper/', text: 'Lined Paper' },
    ],
  },
  cornell: {
    intro:
      'Cornell notes paper divides the page into three areas: a narrow cue column on the left, a wide notes area on the right, and a summary strip across the bottom. Download Cornell templates in 7 sizes for organised study notes — free as PDF, PNG or SVG.',
    takeaways: [
      'The cue column takes about a quarter of the page, the notes area the rest.',
      'The bottom summary strip holds a one-sentence recap of the page.',
      'Cover the notes area and self-test from the cue column alone.',
    ],
    whatIs:
      'Cornell notes paper divides the page into three areas: a narrow cue column on the left, a wide notes area on the right, and a summary strip across the bottom. The standard layout uses about a third of the page for cues and the rest for notes. Students use it to take organised notes and to self-test by covering the notes column.',
    article: [
      { h3: 'How the three sections work', body: 'Write the main notes in the wide right-hand area during a lecture or reading. Afterwards, add keywords and questions in the cue column, then write a one-sentence summary in the bottom strip to capture the page in a glance.' },
      { h3: 'Self-testing with the cue column', body: 'Cover the notes area and try to recall the content from the cues alone. This turns your notes into a study tool, because answering from memory strengthens recall more than re-reading.' },
      { h3: 'Choosing a layout', body: 'The cue column takes about a quarter to a third of the width. A wider cue column gives more room for questions, while a wider notes area suits dense material. The generator uses a balanced 26% cue column.' },
    ],
    sizing: [
      { opt: 'A4 / Letter', feel: 'One page of notes', use: 'Lectures and reading' },
      { opt: 'A3 / Tabloid', feel: 'More notes room', use: 'Dense topics and diagrams' },
      { opt: 'Poster', feel: 'Very large layout', use: 'Group study and displays' },
    ],
    printing: [
      'Choose a paper size for your notes.',
      'Download the PDF for printing, or the SVG to edit.',
      'Print at 100% scale so the three sections keep their proportions.',
      'Print double-sided to save paper for long study sessions.',
    ],
    faq: [
      { q: 'What is Cornell notes paper used for?', a: 'It is used for structured note-taking and study. You write notes in the main area, keywords and questions in the cue column, and a summary at the bottom.' },
      { q: 'What are the three sections of a Cornell page?', a: 'A narrow cue column on the left, a wide notes area on the right, and a summary strip across the bottom of the page.' },
      { q: 'Why is there a cue column?', a: 'The cue column holds questions and keywords, so you can cover the notes and test yourself later from the cues alone.' },
      { q: 'Which paper size should I use for Cornell notes?', a: 'A4 and Letter are the most common. Letter is popular for US college note-taking, and A4 for international use.' },
      { q: 'How wide should the cue column be?', a: 'The cue column usually takes about a quarter to a third of the page width. This template uses roughly 26%, leaving the rest for notes and a strip at the bottom for the summary.' },
    ],
    related: [
      { href: '/lined-paper/', text: 'Lined Paper' },
      { href: '/dot-grid/', text: 'Dot Grid Paper' },
      { href: '/blank-table/', text: 'Blank Table' },
    ],
  },
  'log-log': {
    intro:
      'Log-log graph paper has logarithmic scales on both axes, which turns power-law relationships into straight lines. Download log-log templates in 7 sizes for circuit design and physics scaling data — free as PDF, PNG or SVG.',
    takeaways: [
      'Both axes use logarithmic scales, so each equal step multiplies by ten.',
      'A power relationship plots as a straight line whose slope is the exponent.',
      'Both axes span one to three decades, covering several orders of magnitude.',
    ],
    whatIs:
      'Log-log graph paper has logarithmic scales on both axes, so each axis stretches small values and compresses large ones. It is used to plot data that follows a power law, because a power relationship becomes a straight line on log-log paper. Engineers use it for circuit design and physics for scaling relationships.',
    article: [
      { h3: 'How both axes use log scales', body: 'Each axis is divided into decades — equal steps of tenfold change. The distance from 1 to 10 matches the distance from 10 to 100 on both axes, so the page covers several orders of magnitude in a compact space.' },
      { h3: 'Reading power laws', body: 'A relationship of the form y equals a power of x becomes a straight line on log-log paper, and the slope of that line is the exponent. This makes it easy to spot and measure scaling behaviour in experimental data.' },
      { h3: 'Log-log vs semi-log', body: 'Use log-log when both variables span orders of magnitude and you suspect a power law. Use semi-log when only one variable is exponential and the other is linear.' },
    ],
    sizing: [
      { opt: '1 decade per axis', feel: 'One order of magnitude each way', use: 'Narrow scaling ranges' },
      { opt: '2 decades per axis', feel: 'Two orders of magnitude each way', use: 'Typical engineering data' },
      { opt: '3 decades per axis', feel: 'Three orders of magnitude each way', use: 'Wide-ranging physics data' },
    ],
    printing: [
      'Choose a paper size for your chart.',
      'Download the PDF for printing, or the SVG to edit.',
      'Pick a line color that suits your printer.',
      'Print at 100% scale so the log cycles stay evenly spaced.',
    ],
    faq: [
      { q: 'What is log-log graph paper used for?', a: 'It is used to plot data that follows a power law, such as frequency response, fluid flow and scaling relationships in physics and engineering.' },
      { q: 'What is the difference between log-log and semi-log paper?', a: 'Log-log paper has logarithmic scales on both axes, while semi-log has one logarithmic and one linear axis.' },
      { q: 'Why does a power law look straight on log-log paper?', a: 'Both axes are logarithmic, so a relationship of the form y equals a power of x becomes a straight line whose slope is the exponent.' },
      { q: 'Which axis is logarithmic on log-log paper?', a: 'Both. The horizontal and vertical axes both use logarithmic scales.' },
      { q: 'What is a decade on a log scale?', a: 'A decade is a tenfold change, such as from 1 to 10 or from 100 to 1,000. Each decade occupies the same amount of space on a logarithmic axis.' },
    ],
    related: [
      { href: '/semi-log/', text: 'Semi-Log Graph Paper' },
      { href: '/polar/', text: 'Polar Graph Paper' },
      { href: '/coordinate-plane/', text: 'Coordinate Plane Paper' },
      { href: '/engineering/', text: 'Engineering Paper' },
    ],
  },
  perspective: {
    intro:
      'Perspective grid paper is printed with a horizon line, a vanishing point and lines that converge toward it, so you can draw objects that recede into the distance. Download perspective grids in 7 sizes for rooms, streets and buildings — free as PDF, PNG or SVG.',
    takeaways: [
      'The horizon line and vanishing point keep converging lines consistent.',
      'One-point perspective suits straight-on views, two-point suits angled views.',
      'Drawing edges toward the vanishing point makes a road or room narrow the way your eye expects.',
    ],
    whatIs:
      'Perspective grid paper is printed with a horizon line, a vanishing point and lines that converge toward it, so you can draw objects that recede into the distance. Artists and architects use one-point and two-point perspective grids to keep buildings, roads and rooms in proportion. The converging guides make depth read naturally.',
    article: [
      { h3: 'How the vanishing point works', body: 'Parallel lines that recede into the distance appear to meet at a single point on the horizon. Drawing your edges toward that point keeps the scene consistent, so a road or room narrows the way your eye expects.' },
      { h3: 'One-point vs two-point perspective', body: 'One-point perspective uses a single vanishing point and works for views straight down a street or hallway. Two-point perspective uses two vanishing points and suits objects seen at an angle, such as the corner of a building.' },
      { h3: 'Drawing rooms and buildings', body: 'Start with the horizon line and vanishing point, then draw the floor and walls along the converging guides. The grid gives you the receding lines for free, so you can focus on the shapes and details.' },
    ],
    sizing: [
      { opt: 'A4 / Letter', feel: 'One scene per page', use: 'Sketching and studies' },
      { opt: 'A3 / Tabloid', feel: 'More room to extend lines', use: 'Full scenes and buildings' },
      { opt: 'Poster', feel: 'Very large grid', use: 'Murals and presentations' },
    ],
    printing: [
      'Choose a paper size for your drawing.',
      'Download the PDF for printing, or the SVG to edit.',
      'Print at 100% scale so the converging lines stay accurate.',
      'Sketch lightly so you can erase the construction lines later.',
    ],
    faq: [
      { q: 'What is perspective grid paper used for?', a: 'It is used for drawing scenes with depth, such as rooms, streets and buildings, using a horizon line and a vanishing point.' },
      { q: 'What is a vanishing point?', a: 'It is the point on the horizon where parallel lines appear to meet as they move away from the viewer.' },
      { q: 'What is the difference between one-point and two-point perspective?', a: 'One-point perspective uses a single vanishing point for views straight on. Two-point perspective uses two vanishing points for objects seen at an angle.' },
      { q: 'Which paper size should I use for perspective drawing?', a: 'A4 and Letter suit most sketches, while A3 gives more room for full scenes and detailed buildings.' },
      { q: 'Can I print a two-point perspective grid?', a: 'This template uses a single central vanishing point. For a two-point layout, print two copies and combine them, or edit the SVG to add a second vanishing point.' },
    ],
    related: [
      { href: '/isometric-grid/', text: 'Isometric Grid Paper' },
      { href: '/triangle-grid/', text: 'Triangle Grid Paper' },
      { href: '/hex-grid/', text: 'Hexagonal Grid Paper' },
      { href: '/engineering/', text: 'Engineering Paper' },
    ],
  },
  engineering: {
    intro:
      'Engineering paper is printed with a light square grid, a border and a title block for recording the drawing name, scale and date. Download engineering templates in 7 sizes and 6 spacings for technical sketches and lab work — free as PDF, PNG or SVG.',
    takeaways: [
      'The light grid stays faint so hand-drawn lines stand out.',
      'The title block in the corner holds the drawing name, scale, date and author.',
      'The grid runs 2 mm to 1 cm, matching the precision your drawing needs.',
    ],
    whatIs:
      'Engineering paper is printed with a light square grid, usually 5 mm or 0.25 inch, with a title block and border around the page. The grid stays faint so it does not compete with hand-drawn lines, and the title block holds the drawing name, scale and date. Engineers and students use it for technical sketches and lab work.',
    article: [
      { h3: 'Why the grid is printed faint', body: 'The grid is a guide for measurement, not the drawing itself. A light grid lets your pencil and ink lines stand out clearly, so the finished sketch reads as a drawing rather than a page of lines.' },
      { h3: 'What goes in the title block', body: 'Record the drawing title, scale, date and your name in the boxed corner. Adding these details makes a sketch traceable and professional, which matters in labs and coursework.' },
      { h3: 'Choosing a grid spacing', body: '5 mm and 0.25 inch are the standard engineering grids. Use 2 mm for fine mechanical work and 1 cm for larger layouts. Match the spacing to the level of precision the drawing needs.' },
    ],
    sizing: [
      { opt: '2 mm', feel: 'Fine precision grid', use: 'Mechanical and circuit layouts' },
      { opt: '5 mm / 0.25 in', feel: 'Standard engineering grid', use: 'Technical sketches and lab work' },
      { opt: '1 cm', feel: 'Coarse, readable grid', use: 'Large layouts and diagrams' },
    ],
    printing: [
      'Choose a paper size and grid spacing.',
      'Pick a line color for the grid and title block.',
      'Download the PDF for printing, or the SVG to edit.',
      'Print at 100% scale so the grid and title block stay accurate.',
    ],
    faq: [
      { q: 'What is engineering paper used for?', a: 'It is used for technical drawings, lab reports and sketches that need a light grid for accuracy plus a title block for details.' },
      { q: 'What is the grid spacing on engineering paper?', a: 'The light grid is usually 5 mm or 0.25 inch, and the lines are printed faint so hand-drawn lines stand out.' },
      { q: 'What is a title block?', a: 'It is a boxed area, usually in the corner of the sheet, where you record the drawing name, scale, date and who drew it.' },
      { q: 'Which paper size should I use for engineering paper?', a: 'A4 and Letter are standard for lab and coursework, while A3 suits larger technical drawings.' },
      { q: 'What should I write in the title block?', a: 'Record the drawing title, scale, date and your name. For coursework, also add the course or project name so the sheet is easy to identify.' },
    ],
    related: [
      { href: '/square-grid/', text: 'Square Grid' },
      { href: '/isometric-grid/', text: 'Isometric Grid Paper' },
      { href: '/coordinate-plane/', text: 'Coordinate Plane Paper' },
      { href: '/log-log/', text: 'Log-Log Graph Paper' },
    ],
  },
};
