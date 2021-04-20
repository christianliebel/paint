import {PENCIL} from "../tools/all.js";
export const DRAWING_CONTEXT = {
  lineWidth: 1,
  colors: {
    primary: "#000000",
    secondary: "#FFFFFF"
  },
  palette: [
    "#000000",
    "#808080",
    "#800000",
    "#808000",
    "#008000",
    "#008080",
    "#000080",
    "#800080",
    "#808040",
    "#004040",
    "#0080FF",
    "#004080",
    "#4000FF",
    "#804000",
    "#FFFFFF",
    "#C0C0C0",
    "#FF0000",
    "#FFFF00",
    "#00FF00",
    "#00FFFF",
    "#0000FF",
    "#FF00FF",
    "#FFFF80",
    "#00FF80",
    "#80FFFF",
    "#8080FF",
    "#FF0080",
    "#FF8040"
  ],
  previewColor: null,
  drawOpaque: true,
  eraserSize: 8,
  magnifierSize: -1,
  brush: {
    type: "circle",
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
    title: "untitled"
  },
  text: {
    active: false,
    font: "Arial",
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
  context: null
};
