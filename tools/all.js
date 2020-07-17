import { PickTool } from './pick.js';
import { PencilTool } from './pencil.js';
import { FillTool } from './fill.js';
import { BrushTool } from './brush.js';
import { RectangleTool } from './rectangle.js';
import { LineTool } from './line.js';
import { SelectTool } from './select.js';
import { EraserTool } from './eraser.js';

export const FREE_FORM_SELECT = {
  tooltip: 'Free-Form Select',
  helpText: 'Selects a free-form part of the picture to move, copy, or edit.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAATUlEQVQ4y71S2QoAIAxS6P9/2d6CYLF2lK9TdwnYEM7YasMhMmBsEpURe+soI0rdoGXcJ2J1dF58GmIGTMhEV95MrOpx1fXOUny/ZAITeuwb82N8y4sAAAAASUVORK5CYII=',
};

export const SELECT = {
  tooltip: 'Select',
  helpText:
    'Selects a rectangular part of the picture to move, copy, or edit.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKElEQVQ4y2NgGBbgPxQTYuOU/0+h5dTxAtl6WQZNLAwDL1CUkIY4AABdMRvtVCCWxwAAAABJRU5ErkJggg==',
  instance: new SelectTool(),
};

export const ERASER = {
  tooltip: 'Eraser/Color Eraser',
  helpText:
    'Erases a portion of the picture, using the selected eraser shape.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAYElEQVQ4y2NgGGjASED+PyF9+Az4//H/egxBfsZAFL0sJGtuYIBgKGAhWTMaYKFEM3oYEKe5AXsg/scZlHg0o3jhChYjdBjxa8YXC9hcwYgvDP4TcAEjoZT4n4LUOtQBAKrjIRo4xtzPAAAAAElFTkSuQmCC',
  instance: new EraserTool(),
  cursor: 'none',
};

export const FILL = {
  tooltip: 'Fill With Color',
  helpText: 'Fills an area with the current drawing color.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAACVBMVEUAAAAAAAAArafQeB0vAAAAAXRSTlMAQObYZgAAAEJJREFUCB0FwaENgDAQAMAjKR4BottUoRH/JKCrmAbDCAi25A4ATNAxfCzr2+T5bPLKkDUPOWYXQ97C3oTKrFCg4AeVvwo78oeFFAAAAABJRU5ErkJggg==',
  instance: new FillTool(),
};

export const PICK_COLOR = {
  tooltip: 'Pick Color',
  helpText: 'Picks up a color from the picture for drawing.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAACVBMVEUAAAAAAAAArafQeB0vAAAAAXRSTlMAQObYZgAAAD5JREFUCB0FwTENgDAQAMD7BJgZ6IIEVLwEhr4I3CCiJASV3EFHFOZCK1Qn6kQl0TBtWBMXYmC5sSeeD8fLDwv/B/CGwemxAAAAAElFTkSuQmCC',
  instance: new PickTool(),
};

export const MAGNIFIER = {
  tooltip: 'Magnifier',
  helpText: 'Changes the magnification.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAADFBMVEUAAAAAAAAArad25P8qjoCKAAAAAXRSTlMAQObYZgAAADpJREFUCFtjYAhhYGBg/evAwCD//wKUqP//BZmASlwBqcsEqg7JAqpmkJoAJNiWAAnGlUCCASTDIAIA+9MVjTmiL1AAAAAASUVORK5CYII=',
};

export const PENCIL = {
  tooltip: 'Pencil',
  helpText: 'Draws a free-form line one pixel wide.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAD1BMVEUAAAAAAACqAADU/wDx/68cBCymAAAAAXRSTlMAQObYZgAAADFJREFUCFtjYAACQQYIYFQSQGMIwqSEDXExGI0xGQJoDEFBKEPEEapbBCoAt5sBIgAAAuADhDcByHUAAAAASUVORK5CYII=',
  instance: new PencilTool(),
};

export const BRUSH = {
  tooltip: 'Brush',
  helpText: 'Draws using a brush with the selected shape and size.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAV0lEQVQ4y+2SsQrAQAxC9ciH98NL7XQUSpQbr1CnDNFBHyXBiaQAQBLdT0Xz8dwuxAas6g/YIYAdSBOgtzoWqjM7OjugEom4dGKwkHCPHRDjayu49tMSNzsqKLNFMCGrAAAAAElFTkSuQmCC',
  instance: new BrushTool(),
};

export const AIRBRUSH = {
  tooltip: 'Airbrush',
  helpText: 'Draws using an airbrush of the selected size.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFVBMVEX///8AAAAAAIAAAP8AgIAA//8R/P87CDhcAAAAAXRSTlMAQObYZgAAAFNJREFUCB0FwbENwyAQAMCjSI+RF+AnIAXpLXmAl9Dvv0ruAAAAwN7fq+NTeb0P9l73OzpVeT8xOcc9IrpKLSKm32JEdJW0mJzE6FSiYS9AARzAHxQbCx2D+M74AAAAAElFTkSuQmCC',
};

export const TEXT = {
  tooltip: 'Text',
  helpText: 'Inserts text into the picture.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAACxJREFUCB1jYACCAyDECEQPGJiAqICBBYIsGPh/MHDIMAjIMBjIMdTYA5UCANO8B/vh6q3yAAAAAElFTkSuQmCC',
};

export const LINE = {
  tooltip: 'Line',
  helpText: 'Draws a straight line with the selected line width.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFklEQVQ4y2NgoAz8H9U8qnlU87DRDABNiA/xUZW66AAAAABJRU5ErkJggg==',
  instance: new LineTool(),
  detailsSelector: 'paint-tool-line-width',
};

export const CURVE = {
  tooltip: 'Curve',
  helpText: 'Draws a curved line with the selected line width.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAACZJREFUCB0FwQENADAIACB0bq9hFKMZ1SgHD8vQNM2wgqQoiiRwH0MVAtphf7+PAAAAAElFTkSuQmCC',
  detailsSelector: 'paint-tool-line-width',
};

export const RECTANGLE = {
  tooltip: 'Rectangle',
  helpText: 'Draws a rectangle with the selected fill style.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAJUlEQVQ4y2NgGPKAkYGB4T+lhlBiwH8WSm0fNWAwGECVhDTEAQBUugQbgUfDcwAAAABJRU5ErkJggg==',
  instance: new RectangleTool(),
};

export const POLYGON = {
  tooltip: 'Polygon',
  helpText: 'Draws a polygon with the selected fill style.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQklEQVQ4y2NkwAT/GXADRgYiwH8SxSnTzMJAIaDYAGKc+p8SzQQNGFxhQJb/GZEUMtIiAAnqGxyB+J8SvYwUGsAAACY2Egxkcb4+AAAAAElFTkSuQmCC',
};

export const ELLIPSE = {
  tooltip: 'Ellipse',
  helpText: 'Draws an ellipse with the selected fill style.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMklEQVQ4y2NgGPKAEY/cf2LUMpKgAa/8fzJc/58SzXC9LJQG4sAbQHEgUhyNFCekYQAATj8MC0rigyEAAAAASUVORK5CYII=',
};

export const ROUNDED_RECTANGLE = {
  tooltip: 'Rounded Rectangle',
  helpText: 'Draws a rounded rectangle with the selected fill style.',
  image:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKklEQVQ4y2NgGPKAEYn9nwK9JGtG0fOfAh/8Z6E0DEYNoEI0Ui0hDWEAAMk0CBHA/VZLAAAAAElFTkSuQmCC',
};

export const tools = [
  FREE_FORM_SELECT,
  SELECT,
  ERASER,
  FILL,
  PICK_COLOR,
  MAGNIFIER,
  PENCIL,
  BRUSH,
  AIRBRUSH,
  TEXT,
  LINE,
  CURVE,
  RECTANGLE,
  POLYGON,
  ELLIPSE,
  ROUNDED_RECTANGLE,
];
