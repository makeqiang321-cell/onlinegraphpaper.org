export interface PaperSize {
  id: string;
  name: string;
  widthMm: number;
  heightMm: number;
  widthIn: number;
  heightIn: number;
}

export const sizes: PaperSize[] = [
  { id: 'a4', name: 'A4', widthMm: 210, heightMm: 297, widthIn: 8.27, heightIn: 11.69 },
  { id: 'letter', name: 'Letter', widthMm: 216, heightMm: 279, widthIn: 8.5, heightIn: 11 },
  { id: 'a3', name: 'A3', widthMm: 297, heightMm: 420, widthIn: 11.69, heightIn: 16.54 },
  { id: 'a2', name: 'A2', widthMm: 420, heightMm: 594, widthIn: 16.54, heightIn: 23.39 },
  { id: 'legal', name: 'Legal', widthMm: 216, heightMm: 356, widthIn: 8.5, heightIn: 14 },
  { id: 'tabloid', name: 'Tabloid', widthMm: 279, heightMm: 432, widthIn: 11, heightIn: 17 },
  { id: 'poster', name: 'Poster', widthMm: 457, heightMm: 610, widthIn: 18, heightIn: 24 },
];
