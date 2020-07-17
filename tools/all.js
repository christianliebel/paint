import {PencilTool} from './pencil.js';

export const tools = [{
    tooltip: 'Free-Form Select',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAATUlEQVQ4y71S2QoAIAxS6P9/2d6CYLF2lK9TdwnYEM7YasMhMmBsEpURe+soI0rdoGXcJ2J1dF58GmIGTMhEV95MrOpx1fXOUny/ZAITeuwb82N8y4sAAAAASUVORK5CYII='
    helpText: 'Selects a free-form part of the picture to move, copy, or edit.',
}, {
    tooltip: 'Select',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKElEQVQ4y2NgGBbgPxQTYuOU/0+h5dTxAtl6WQZNLAwDL1CUkIY4AABdMRvtVCCWxwAAAABJRU5ErkJggg=='
    helpText: 'Selects a rectangular part of the picture to move, copy, or edit.',
}, {
    tooltip: 'Eraser/Color Eraser',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAYElEQVQ4y2NgGGjASED+PyF9+Az4//H/egxBfsZAFL0sJGtuYIBgKGAhWTMaYKFEM3oYEKe5AXsg/scZlHg0o3jhChYjdBjxa8YXC9hcwYgvDP4TcAEjoZT4n4LUOtQBAKrjIRo4xtzPAAAAAElFTkSuQmCC'
    helpText: 'Erases a portion of the picture, using the selected eraser shape.',
}, {
    tooltip: 'Fill With Color',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAYElEQVQ4y2NgGGjASED+PyF9+Az4//H/egxBfsZAFL0sJGtuYIBgKGAhWTMaYKFEM3oYEKe5AXsg/scZlHg0o3jhChYjdBjxa8YXC9hcwYgvDP4TcAEjoZT4n4LUOtQBAKrjIRo4xtzPAAAAAElFTkSuQmCC'
    helpText: 'Fills an area with the current drawing color.',
}, {
    tooltip: 'Pick Color',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAACVBMVEUAAAAAAAAArafQeB0vAAAAAXRSTlMAQObYZgAAAD5JREFUCB0FwTENgDAQAMD7BJgZ6IIEVLwEhr4I3CCiJASV3EFHFOZCK1Qn6kQl0TBtWBMXYmC5sSeeD8fLDwv/B/CGwemxAAAAAElFTkSuQmCC'
    helpText: 'Picks up a color from the picture for drawing.',
}, {
    tooltip: 'Magnifier',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAADFBMVEUAAAAAAAAArad25P8qjoCKAAAAAXRSTlMAQObYZgAAADpJREFUCFtjYAhhYGBg/evAwCD//wKUqP//BZmASlwBqcsEqg7JAqpmkJoAJNiWAAnGlUCCASTDIAIA+9MVjTmiL1AAAAAASUVORK5CYII='
    helpText: 'Changes the magnification.',
}, {
    tooltip: 'Pencil',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAD1BMVEUAAAAAAACqAADU/wDx/68cBCymAAAAAXRSTlMAQObYZgAAADFJREFUCFtjYAACQQYIYFQSQGMIwqSEDXExGI0xGQJoDEFBKEPEEapbBCoAt5sBIgAAAuADhDcByHUAAAAASUVORK5CYII='
    helpText: 'Draws a free-form line one pixel wide.',
    instance: new PencilTool()
}, {
    tooltip: 'Brush',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAV0lEQVQ4y+2SsQrAQAxC9ciH98NL7XQUSpQbr1CnDNFBHyXBiaQAQBLdT0Xz8dwuxAas6g/YIYAdSBOgtzoWqjM7OjugEom4dGKwkHCPHRDjayu49tMSNzsqKLNFMCGrAAAAAElFTkSuQmCC'
    helpText: 'Draws using a brush with the selected shape and size.',
}, {
    tooltip: 'Airbrush',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFVBMVEX///8AAAAAAIAAAP8AgIAA//8R/P87CDhcAAAAAXRSTlMAQObYZgAAAFNJREFUCB0FwbENwyAQAMCjSI+RF+AnIAXpLXmAl9Dvv0ruAAAAwN7fq+NTeb0P9l73OzpVeT8xOcc9IrpKLSKm32JEdJW0mJzE6FSiYS9AARzAHxQbCx2D+M74AAAAAElFTkSuQmCC'
    helpText: 'Draws using an airbrush of the selected size.',
}, {
    tooltip: 'Text',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAACxJREFUCB1jYACCAyDECEQPGJiAqICBBYIsGPh/MHDIMAjIMBjIMdTYA5UCANO8B/vh6q3yAAAAAElFTkSuQmCC'
    helpText: 'Inserts text into the picture.',
}, {
    tooltip: 'Line',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFklEQVQ4y2NgoAz8H9U8qnlU87DRDABNiA/xUZW66AAAAABJRU5ErkJggg=='
    helpText: 'Draws a straight line with the selected line width.',
}, {
    tooltip: 'Curve',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAACZJREFUCB0FwQENADAIACB0bq9hFKMZ1SgHD8vQNM2wgqQoiiRwH0MVAtphf7+PAAAAAElFTkSuQmCC'
    helpText: 'Draws a curved line with the selected line width.',
}, {
    tooltip: 'Rectangle',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAJUlEQVQ4y2NgGPKAkYGB4T+lhlBiwH8WSm0fNWAwGECVhDTEAQBUugQbgUfDcwAAAABJRU5ErkJggg=='
    helpText: 'Draws a rectangle with the selected fill style.',
}, {
    tooltip: 'Polygon',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQklEQVQ4y2NkwAT/GXADRgYiwH8SxSnTzMJAIaDYAGKc+p8SzQQNGFxhQJb/GZEUMtIiAAnqGxyB+J8SvYwUGsAAACY2Egxkcb4+AAAAAElFTkSuQmCC'
    helpText: 'Draws a polygon with the selected fill style.',
}, {
    tooltip: 'Ellipse',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMklEQVQ4y2NgGPKAEY/cf2LUMpKgAa/8fzJc/58SzXC9LJQG4sAbQHEgUhyNFCekYQAATj8MC0rigyEAAAAASUVORK5CYII='
    helpText: 'Draws an ellipse with the selected fill style.',
}, {
    tooltip: 'Rounded Rectangle',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKklEQVQ4y2NgGPKAEYn9nwK9JGtG0fOfAh/8Z6E0DEYNoEI0Ui0hDWEAAMk0CBHA/VZLAAAAAElFTkSuQmCC'
    helpText: 'Draws a rounded rectangle with the selected fill style.',
}];
