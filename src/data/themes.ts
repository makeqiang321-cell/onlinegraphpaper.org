export interface Theme {
  id: string;
  name: string;
  background: string; // paper colour
  color: string;      // line / dot colour
}

export const themes: Theme[] = [
  { id: 'classic-blue', name: 'Classic Blue', background: '#ffffff', color: '#2563EB' },
  { id: 'midnight', name: 'Midnight', background: '#0f172a', color: '#93c5fd' },
  { id: 'sepia', name: 'Sepia', background: '#faf3e0', color: '#8b5e34' },
  { id: 'minimalist', name: 'Minimalist', background: '#ffffff', color: '#6b7280' },
  { id: 'ocean', name: 'Ocean', background: '#f0f9ff', color: '#0891b2' },
  { id: 'rose', name: 'Rose', background: '#fff1f2', color: '#e11d48' },
  { id: 'purple', name: 'Purple', background: '#faf5ff', color: '#7c3aed' },
  { id: 'engineering', name: 'Engineering', background: '#e8f5e9', color: '#16a34a' },
  { id: 'blueprint', name: 'Blueprint', background: '#1e3a8a', color: '#ffffff' },
];

export const defaultTheme = themes[0];
