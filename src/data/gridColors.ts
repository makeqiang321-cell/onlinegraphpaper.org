export interface GridColor {
  id: string;
  hex: string;
  isDefault: boolean;
}

export const gridColors: GridColor[] = [
  { id: 'blue', hex: '#2563EB', isDefault: true },
  { id: 'gray', hex: '#9CA3AF', isDefault: false },
  { id: 'green', hex: '#16A34A', isDefault: false },
  { id: 'black', hex: '#111827', isDefault: false },
];

export const defaultGridColor = gridColors.find((c) => c.isDefault)!;
