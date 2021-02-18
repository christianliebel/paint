import { PickTool } from './pick.js';
import { PencilTool } from './pencil.js';
import { FillTool } from './fill.js';
import { BrushTool } from './brush.js';
import { RectangleTool } from './rectangle.js';
import { LineTool } from './line.js';
import { SelectTool } from './select.js';
import { EraserTool } from './eraser.js';
import { EllipseTool } from './ellipse.js';
export const FREE_FORM_SELECT = {
  tooltip: 'Free-Form Select',
  helpText: 'Selects a free-form part of the picture to move, copy, or edit.',
  imagePosition: '0 0'
};
export const SELECT = {
  tooltip: 'Select',
  helpText: 'Selects a rectangular part of the picture to move, copy, or edit.',
  imagePosition: '-16px 0',
  instance: new SelectTool()
};
export const ERASER = {
  tooltip: 'Eraser/Color Eraser',
  helpText: 'Erases a portion of the picture, using the selected eraser shape.',
  imagePosition: '-32px 0',
  instance: new EraserTool(),
  cursor: 'none'
};
export const FILL = {
  tooltip: 'Fill With Color',
  helpText: 'Fills an area with the current drawing color.',
  imagePosition: '-48px 0',
  instance: new FillTool()
};
export const PICK_COLOR = {
  tooltip: 'Pick Color',
  helpText: 'Picks up a color from the picture for drawing.',
  imagePosition: '-64px 0',
  instance: new PickTool()
};
export const MAGNIFIER = {
  tooltip: 'Magnifier',
  helpText: 'Changes the magnification.',
  imagePosition: '-80px 0'
};
export const PENCIL = {
  tooltip: 'Pencil',
  helpText: 'Draws a free-form line one pixel wide.',
  imagePosition: '-96px 0',
  instance: new PencilTool()
};
export const BRUSH = {
  tooltip: 'Brush',
  helpText: 'Draws using a brush with the selected shape and size.',
  imagePosition: '-112px 0',
  instance: new BrushTool()
};
export const AIRBRUSH = {
  tooltip: 'Airbrush',
  helpText: 'Draws using an airbrush of the selected size.',
  imagePosition: '-128px 0'
};
export const TEXT = {
  tooltip: 'Text',
  helpText: 'Inserts text into the picture.',
  imagePosition: '-144px 0'
};
export const LINE = {
  tooltip: 'Line',
  helpText: 'Draws a straight line with the selected line width.',
  imagePosition: '-160px 0',
  instance: new LineTool(),
  detailsSelector: 'paint-tool-line-width'
};
export const CURVE = {
  tooltip: 'Curve',
  helpText: 'Draws a curved line with the selected line width.',
  imagePosition: '-176px 0',
  detailsSelector: 'paint-tool-line-width'
};
export const RECTANGLE = {
  tooltip: 'Rectangle',
  helpText: 'Draws a rectangle with the selected fill style.',
  imagePosition: '-192px 0',
  instance: new RectangleTool()
};
export const POLYGON = {
  tooltip: 'Polygon',
  helpText: 'Draws a polygon with the selected fill style.',
  imagePosition: '-208px 0'
};
export const ELLIPSE = {
  tooltip: 'Ellipse',
  helpText: 'Draws an ellipse with the selected fill style.',
  imagePosition: '-224px 0',
  instance: new EllipseTool()
};
export const ROUNDED_RECTANGLE = {
  tooltip: 'Rounded Rectangle',
  helpText: 'Draws a rounded rectangle with the selected fill style.',
  imagePosition: '-240px 0'
};
export const tools = [FREE_FORM_SELECT, SELECT, ERASER, FILL, PICK_COLOR, MAGNIFIER, PENCIL, BRUSH, AIRBRUSH, TEXT, LINE, CURVE, RECTANGLE, POLYGON, ELLIPSE, ROUNDED_RECTANGLE];