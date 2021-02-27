import type { DrawingContext } from '../models/drawing-context';
import { PENCIL } from '../tools/all';

export const DRAWING_CONTEXT: DrawingContext = {
  lineWidth: 1,
  colors: {
    primary: '#000000',
    secondary: '#FFFFFF',
  },
  palette: [
    '#000000', // black
    '#808080', // gray
    '#800000', // maroon
    '#808000', // olive
    '#008000', // green
    '#008080', // teal
    '#000080', // navy
    '#800080', // purple
    '#808040',
    '#004040',
    '#0080FF',
    '#004080',
    '#4000FF',
    '#804000',
    '#FFFFFF', // white
    '#C0C0C0', // silver
    '#FF0000', // red
    '#FFFF00', // yellow
    '#00FF00', // lime
    '#00FFFF', // aqua
    '#0000FF', // blue
    '#FF00FF', // fuchsia
    '#FFFF80',
    '#00FF80',
    '#80FFFF',
    '#8080FF',
    '#FF0080',
    '#FF8040',
  ],
  previewColor: null,
  drawOpaque: true,
  eraserSize: 8,
  magnifierSize: -1,
  brush: {
    type: 'circle',
    size: 4,
  },
  airbrushSize: 9,
  fillStyle: {
    stroke: true,
    fill: false,
  },
  tool: PENCIL,
  selection: null,
  view: {
    statusBar: true,
    colorBox: true,
    toolBox: true,
    textToolbar: true,
  },
  document: {
    title: 'untitled',
  },
  text: {
    active: false,
    font: 'Arial',
    size: 12,
    showToolbar: false,
    bold: false,
    italic: false,
    underline: false
  },
  element: null,
  previewCanvas: null,
  previewContext: null,
  canvas: null,
  context: null,
};
