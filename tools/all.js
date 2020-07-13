import { PickTool } from './pick.js';
import { PencilTool } from './pencil.js';
import { FillTool } from './fill.js';
import { BrushTool } from './brush.js';

export const tools = [
  {
    tooltip: 'Free-Form Select',
    helpText: 'Selects a free-form part of the picture to move, copy, or edit.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAADBJREFUCB0FwbERQEAAAMFlBDfmA6HwS9GRFoRKVI5dMdJpmXoVHJmba/XdemBnkB9LmANpE19kLgAAAABJRU5ErkJggg==',
  },
  {
    tooltip: 'Select',
    helpText:
      'Selects a rectangular part of the picture to move, copy, or edit.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQ0lEQVQ4je2SMQ4AIAgDe/7/zzUYfIDioIm3wNKGpugKbDvu8MYuUsRqEsBjpNsWgFo6LTN1rVrCj3AgQlD6xNeR1AEwNEXpsKHoyQAAAABJRU5ErkJggg==',
  },
  {
    tooltip: 'Eraser/Color Eraser',
    helpText:
      'Erases a portion of the picture, using the selected eraser shape.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAc0lEQVQ4jd2SQQ7AIAgE2caH8TSfxs9osHqgRVt6adK9YOLOagD6XFDV6R8AhJeqCgDtXFbwEW5GX3twS9jysPdeAu7gWhcBWdgFPIWtWhNdwFuYhlNEwkkw8xQeYwyncFb0ctjELGwqfaum67iC/yAi2gFigVAcWPXdyQAAAABJRU5ErkJggg==',
  },
  {
    tooltip: 'Fill With Color',
    helpText: 'Fills an area with the current drawing color.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAD///8AAAAAgID////eavLtAAAAAnRSTlMAAHaTzTgAAABOSURBVAgdBcHRFYQwCACwwPXfdgPf7b8buICYAIiDUyTixnLml6dkeO73v609p0xIz6btRbs46ardQmLYlUyL6UTbJZuJaQvqJQfTAPgAaBMeUmcbbboAAAAASUVORK5CYII=',
    instance: new FillTool(),
  },
  {
    tooltip: 'Pick Color',
    helpText: 'Picks up a color from the picture for drawing.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEUAAADAwMAAAAAAgICAgIDAwMD///8xPE7VAAAAAnRSTlMAAHaTzTgAAABRSURBVAhbNcrREYAwCAPQrgBOQHrHv2UDR3AFve4/gjTY/PCSo7UdYWAFvVEACthQ/D8OyILOywh/jcghW8IfI3QOIWqQdvQR50KgR3AJXvkAZRYNwZTWSqEAAAAASUVORK5CYII=',
    instance: new PickTool(),
  },
  {
    tooltip: 'Magnifier',
    helpText: 'Changes the magnification.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEUAAAD///8AAAAAAICAgIDAwMD///9DxYGBAAAAAnRSTlMAAHaTzTgAAABZSURBVAhbXc3BEYAgEANASyBQgTf617mhAkcLEEMFSv8lyIkffWU/STpABIDrIKQY/FZ49IZC0jBeFfsH/MPXzE9rJc+hDeZFDfUi6mwAQtIGRJ0aQnoBdTfP0hZSez+WVgAAAABJRU5ErkJggg==',
  },
  {
    tooltip: 'Pencil',
    helpText: 'Draws a free-form line one pixel wide.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEUAAAD///8AAACAAADAwMD//wD////WEyfaAAAAAnRSTlMAAHaTzTgAAABISURBVAhbY2BgEBQUUhJgYAAxlI0VUBlCykYQKaEgqBpVFUUIQykIwhBydRKEMMKUIAygEggDqATKUBKEMhRhDEEoQxHGgAAAkQsIYR8JLfIAAAAASUVORK5CYII=',
    instance: new PencilTool(),
  },
  {
    tooltip: 'Brush',
    helpText: 'Draws using a brush with the selected shape and size.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAElBMVEUAAAD///8AAACAgACAgID///+JwSUpAAAAAnRSTlMAAHaTzTgAAAA0SURBVAhbY2BgFBRSFGQAAkZBZSMyGELGxopghrKxsRGYoQQEqAzV0NAgCMPVFQeDCaIYAGu+CkFHCSK2AAAAAElFTkSuQmCC',
  },
  {
    tooltip: 'Airbrush',
    helpText: 'Draws using an airbrush of the selected size.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgElEQVQ4jcWSWQ6AIAxEp4n3Vk8+hkVpkQKRD5s0LU1meCxYDpIxgYO61r2XWwAQOUnuousNJiJPT1IawHbnUsGkSaHWhqaD/xaHUR6rozfE2qAWpywkXQIrbpu4BLMmw+fqm8S5T9A3yUeY/TDWBPquxuLaxP0HX3JJnA3+DAAXAZDWVnJBj/IAAAAASUVORK5CYII=',
  },
  {
    tooltip: 'Text',
    helpText: 'Inserts text into the picture.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAD///8AAABzxoNxAAAAAnRSTlMAAHaTzTgAAAA0SURBVAhbY2AAgdDI0ACG0CwEMRVIzAITSwMYwsLAxEogsQpIRIauAhFZAQyrwlYtYEAFAGVnFBHp8PybAAAAAElFTkSuQmCC',
  },
  {
    tooltip: 'Line',
    helpText: 'Draws a straight line with the selected line width.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAD///8AAABzxoNxAAAAAnRSTlMAAHaTzTgAAAA3SURBVAhbY2AAAc3Q0BAGKRAhNhVIiC4FEZkgIgpEhE0FEqFLQUQmiIgCEWFTgEToEhCRwQAHAJ/sEAoMX0CVAAAAAElFTkSuQmCC',
  },
  {
    tooltip: 'Curve',
    helpText: 'Draws a curved line with the selected line width.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAD///8AAABzxoNxAAAAAnRSTlMAAHaTzTgAAAAsSURBVAhbY2CICmBgYAibACRCF4CIBDixACYBVpIJIpaCiKlwYilcAqwECAAJgQxFb0kdcAAAAABJRU5ErkJggg==',
  },
  {
    tooltip: 'Rectangle',
    helpText: 'Draws a rectangle with the selected fill style.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAANUlEQVQ4jWMYcMDIwMDwnwJHMLKAyP///zOSrJOREWwxE6VBMGrAsDCA4pRIqQMGGjAwMAAAqH0GF9/HfSAAAAAASUVORK5CYII=',
  },
  {
    tooltip: 'Polygon',
    helpText: 'Draws a polygon with the selected fill style.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAD///8AAABzxoNxAAAAAnRSTlMAAHaTzTgAAAA1SURBVAhbY2AAgdBVqyYwhE4NC4AQYaGRUCIyNBVKpIZOBRJhqxYAWaEJDFPhxKpVQDE4AACDURW36fu9wQAAAABJRU5ErkJggg==',
  },
  {
    tooltip: 'Ellipse',
    helpText: 'Draws an ellipse with the selected fill style.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAD///8AAABzxoNxAAAAAnRSTlMAAHaTzTgAAAAoSURBVAhbY2BABaGrVoYwRIWGTWFIDQ1NYZgaGhqBToAlwErAilEBAJIUEG18k6HcAAAAAElFTkSuQmCC',
  },
  {
    tooltip: 'Rounded Rectangle',
    helpText: 'Draws a rounded rectangle with the selected fill style.',
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAD///8AAABzxoNxAAAAAnRSTlMAAHaTzTgAAAAhSURBVAhbY2CAg6hVq6YwpIaGpjBMDQ2NIECA1YF1oAIAFmYSjAjEn48AAAAASUVORK5CYII=',
  },
];
