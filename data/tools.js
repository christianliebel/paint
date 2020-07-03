export const tools = [{
    id: 'freeform',
    tooltip: 'Free-Form Select',
    description: 'Selects a free-form part of the picture to move, copy, or edit.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAADBJREFUCB0FwbERQEAAAMFlBDfmA6HwS9GRFoRKVI5dMdJpmXoVHJmba/XdemBnkB9LmANpE19kLgAAAABJRU5ErkJggg=='
}, {
    id: 'select',
    tooltip: 'Select',
    description: 'Selects a rectangular part of the picture to move, copy, or edit.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQ0lEQVQ4je2SMQ4AIAgDe/7/zzUYfIDioIm3wNKGpugKbDvu8MYuUsRqEsBjpNsWgFo6LTN1rVrCj3AgQlD6xNeR1AEwNEXpsKHoyQAAAABJRU5ErkJggg=='
}, {
    id: 'eraser',
    tooltip: 'Eraser/Color Eraser',
    description: 'Erases a portion of the picture, using the selected eraser shape.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAc0lEQVQ4jd2SQQ7AIAgE2caH8TSfxs9osHqgRVt6adK9YOLOagD6XFDV6R8AhJeqCgDtXFbwEW5GX3twS9jysPdeAu7gWhcBWdgFPIWtWhNdwFuYhlNEwkkw8xQeYwyncFb0ctjELGwqfaum67iC/yAi2gFigVAcWPXdyQAAAABJRU5ErkJggg=='
}, {
    id: 'fill',
    tooltip: 'Fill With Color',
    description: 'Fills an area with the current drawing color.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAD///8AAAAAgID////eavLtAAAAAnRSTlMAAHaTzTgAAABOSURBVAgdBcHRFYQwCACwwPXfdgPf7b8buICYAIiDUyTixnLml6dkeO73v609p0xIz6btRbs46ardQmLYlUyL6UTbJZuJaQvqJQfTAPgAaBMeUmcbbboAAAAASUVORK5CYII='
}, {
    id: 'pick',
    tooltip: 'Pick Color',
    description: 'Picks up a color from the picture for drawing.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEUAAADAwMAAAAAAgICAgIDAwMD///8xPE7VAAAAAnRSTlMAAHaTzTgAAABRSURBVAhbNcrREYAwCAPQrgBOQHrHv2UDR3AFve4/gjTY/PCSo7UdYWAFvVEACthQ/D8OyILOywh/jcghW8IfI3QOIWqQdvQR50KgR3AJXvkAZRYNwZTWSqEAAAAASUVORK5CYII='
}, {
    id: 'magnifier',
    tooltip: 'Magnifier',
    description: 'Changes the magnification.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEUAAAD///8AAAAAAICAgIDAwMD///9DxYGBAAAAAnRSTlMAAHaTzTgAAABZSURBVAhbXc3BEYAgEANASyBQgTf617mhAkcLEEMFSv8lyIkffWU/STpABIDrIKQY/FZ49IZC0jBeFfsH/MPXzE9rJc+hDeZFDfUi6mwAQtIGRJ0aQnoBdTfP0hZSez+WVgAAAABJRU5ErkJggg=='
}, {
    id: 'pencil',
    tooltip: 'Pencil',
    description: 'Draws a free-form line one pixel wide.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAFVBMVEUAAAD///8AAACAAADAwMD//wD////WEyfaAAAAAnRSTlMAAHaTzTgAAABISURBVAhbY2BgEBQUUhJgYAAxlI0VUBlCykYQKaEgqBpVFUUIQykIwhBydRKEMMKUIAygEggDqATKUBKEMhRhDEEoQxHGgAAAkQsIYR8JLfIAAAAASUVORK5CYII='
}, {
    id: 'brush',
    tooltip: 'Brush',
    description: 'Draws using a brush with the selected shape and size.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAElBMVEUAAAD///8AAACAgACAgID///+JwSUpAAAAAnRSTlMAAHaTzTgAAAA0SURBVAhbY2BgFBRSFGQAAkZBZSMyGELGxopghrKxsRGYoQQEqAzV0NAgCMPVFQeDCaIYAGu+CkFHCSK2AAAAAElFTkSuQmCC'
}, {
    id: 'airbrush',
    tooltip: 'Airbrush',
    description: 'Draws using an airbrush of the selected size.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgElEQVQ4jcWSWQ6AIAxEp4n3Vk8+hkVpkQKRD5s0LU1meCxYDpIxgYO61r2XWwAQOUnuousNJiJPT1IawHbnUsGkSaHWhqaD/xaHUR6rozfE2qAWpywkXQIrbpu4BLMmw+fqm8S5T9A3yUeY/TDWBPquxuLaxP0HX3JJnA3+DAAXAZDWVnJBj/IAAAAASUVORK5CYII='
}, {
    id: 'text',
    tooltip: 'Text',
    description: 'Inserts text into the picture.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAD///8AAABzxoNxAAAAAnRSTlMAAHaTzTgAAAA0SURBVAhbY2AAgdDI0ACG0CwEMRVIzAITSwMYwsLAxEogsQpIRIauAhFZAQyrwlYtYEAFAGVnFBHp8PybAAAAAElFTkSuQmCC'
}, {
    id: 'line',
    tooltip: 'Line',
    description: 'Draws a straight line with the selected line width.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAD///8AAABzxoNxAAAAAnRSTlMAAHaTzTgAAAA3SURBVAhbY2AAAc3Q0BAGKRAhNhVIiC4FEZkgIgpEhE0FEqFLQUQmiIgCEWFTgEToEhCRwQAHAJ/sEAoMX0CVAAAAAElFTkSuQmCC'
}, {
    id: 'curve',
    tooltip: 'Curve',
    description: 'Draws a curved line with the selected line width.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAD///8AAABzxoNxAAAAAnRSTlMAAHaTzTgAAAAsSURBVAhbY2CICmBgYAibACRCF4CIBDixACYBVpIJIpaCiKlwYilcAqwECAAJgQxFb0kdcAAAAABJRU5ErkJggg=='
}, {
    id: 'rectangle',
    tooltip: 'Rectangle',
    description: 'Draws a rectangle with the selected fill style.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAANUlEQVQ4jWMYcMDIwMDwnwJHMLKAyP///zOSrJOREWwxE6VBMGrAsDCA4pRIqQMGGjAwMAAAqH0GF9/HfSAAAAAASUVORK5CYII='
}, {
    id: 'polygon',
    tooltip: 'Polygon',
    description: 'Draws a polygon with the selected fill style.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAD///8AAABzxoNxAAAAAnRSTlMAAHaTzTgAAAA1SURBVAhbY2AAgdBVqyYwhE4NC4AQYaGRUCIyNBVKpIZOBRJhqxYAWaEJDFPhxKpVQDE4AACDURW36fu9wQAAAABJRU5ErkJggg=='
}, {
    id: 'ellipse',
    tooltip: 'Ellipse',
    description: 'Draws an ellipse with the selected fill style.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAD///8AAABzxoNxAAAAAnRSTlMAAHaTzTgAAAAoSURBVAhbY2BABaGrVoYwRIWGTWFIDQ1NYZgaGhqBToAlwErAilEBAJIUEG18k6HcAAAAAElFTkSuQmCC'
}, {
    id: 'rounded',
    tooltip: 'Rounded Rectangle',
    description: 'Draws a rounded rectangle with the selected fill style.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAD///8AAABzxoNxAAAAAnRSTlMAAHaTzTgAAAAhSURBVAhbY2CAg6hVq6YwpIaGpjBMDQ2NIECA1YF1oAIAFmYSjAjEn48AAAAASUVORK5CYII='
}];
