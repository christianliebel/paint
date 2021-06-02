import { PENCIL } from '../tools/all.js';
import { DEFAULT_COLORS, DEFAULT_PALETTE } from './colors.js';
export const DRAWING_CONTEXT = {
  lineWidth: 1,
  colors: { ...DEFAULT_COLORS
  },
  palette: [...DEFAULT_PALETTE],
  previewColor: null,
  drawOpaque: true,
  eraserSize: 8,
  magnifierSize: -1,
  brush: {
    type: 'circle',
    size: 4
  },
  airbrushSize: 9,
  fillStyle: {
    stroke: true,
    fill: false
  },
  tool: PENCIL,
  selection: null,
  view: {
    statusBar: true,
    colorBox: true,
    toolBox: true,
    textToolbar: false
  },
  document: {
    title: 'untitled',
    dirty: false
  },
  text: {
    active: false,
    font: 'Arial',
    size: 12,
    showToolbar: true,
    bold: false,
    italic: false,
    underline: false
  },
  element: null,
  previewCanvas: null,
  previewContext: null,
  canvas: null,
  context: null,
  history: null
};