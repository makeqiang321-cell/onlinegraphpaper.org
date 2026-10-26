export interface GridSpacing {
  id: string;
  mm: number; // millimetre equivalent
}

export const spacings: GridSpacing[] = [
  { id: '2mm', mm: 2 },
  { id: '5mm', mm: 5 },
  { id: '1cm', mm: 10 },
  { id: '0.25in', mm: 6.35 },
  { id: '0.5in', mm: 12.7 },
  { id: '1in', mm: 25.4 },
];
