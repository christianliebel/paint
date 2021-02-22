export type BrushType = 'circle' | 'square' | 'forward-diagonal' | 'backward-diagonal';

export interface Brush {
  type: BrushType;
  size: number;
}
