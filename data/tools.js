export const tools = [{
    id: 'freeform',
    tooltip: 'Free-Form Select',
    description: 'Selects a free-form part of the picture to move, copy, or edit.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAATUlEQVQ4y71S2QoAIAxS6P9/2d6CYLF2lK9TdwnYEM7YasMhMmBsEpURe+soI0rdoGXcJ2J1dF58GmIGTMhEV95MrOpx1fXOUny/ZAITeuwb82N8y4sAAAAASUVORK5CYII='
}, {
    id: 'select',
    tooltip: 'Select',
    description: 'Selects a rectangular part of the picture to move, copy, or edit.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKElEQVQ4y2NgGBbgPxQTYuOU/0+h5dTxAtl6WQZNLAwDL1CUkIY4AABdMRvtVCCWxwAAAABJRU5ErkJggg=='
}, {
    id: 'eraser',
    tooltip: 'Eraser/Color Eraser',
    description: 'Erases a portion of the picture, using the selected eraser shape.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAYElEQVQ4y2NgGGjASED+PyF9+Az4//H/egxBfsZAFL0sJGtuYIBgKGAhWTMaYKFEM3oYEKe5AXsg/scZlHg0o3jhChYjdBjxa8YXC9hcwYgvDP4TcAEjoZT4n4LUOtQBAKrjIRo4xtzPAAAAAElFTkSuQmCC'
}, {
    id: 'fill',
    tooltip: 'Fill With Color',
    description: 'Fills an area with the current drawing color.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAYElEQVQ4y2NgGGjASED+PyF9+Az4//H/egxBfsZAFL0sJGtuYIBgKGAhWTMaYKFEM3oYEKe5AXsg/scZlHg0o3jhChYjdBjxa8YXC9hcwYgvDP4TcAEjoZT4n4LUOtQBAKrjIRo4xtzPAAAAAElFTkSuQmCC'
}, {
    id: 'pick',
    tooltip: 'Pick Color',
    description: 'Picks up a color from the picture for drawing.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAACVBMVEUAAAAAAAAArafQeB0vAAAAAXRSTlMAQObYZgAAAD5JREFUCB0FwTENgDAQAMD7BJgZ6IIEVLwEhr4I3CCiJASV3EFHFOZCK1Qn6kQl0TBtWBMXYmC5sSeeD8fLDwv/B/CGwemxAAAAAElFTkSuQmCC'
}, {
    id: 'magnifier',
    tooltip: 'Magnifier',
    description: 'Changes the magnification.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAADFBMVEUAAAAAAAAArad25P8qjoCKAAAAAXRSTlMAQObYZgAAADpJREFUCFtjYAhhYGBg/evAwCD//wKUqP//BZmASlwBqcsEqg7JAqpmkJoAJNiWAAnGlUCCASTDIAIA+9MVjTmiL1AAAAAASUVORK5CYII='
}, {
    id: 'pencil',
    tooltip: 'Pencil',
    description: 'Draws a free-form line one pixel wide.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAD1BMVEUAAAAAAACqAADU/wDx/68cBCymAAAAAXRSTlMAQObYZgAAADFJREFUCFtjYAACQQYIYFQSQGMIwqSEDXExGI0xGQJoDEFBKEPEEapbBCoAt5sBIgAAAuADhDcByHUAAAAASUVORK5CYII='
}, {
    id: 'brush',
    tooltip: 'Brush',
    description: 'Draws using a brush with the selected shape and size.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAV0lEQVQ4y+2SsQrAQAxC9ciH98NL7XQUSpQbr1CnDNFBHyXBiaQAQBLdT0Xz8dwuxAas6g/YIYAdSBOgtzoWqjM7OjugEom4dGKwkHCPHRDjayu49tMSNzsqKLNFMCGrAAAAAElFTkSuQmCC'
}, {
    id: 'airbrush',
    tooltip: 'Airbrush',
    description: 'Draws using an airbrush of the selected size.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFVBMVEX///8AAAAAAIAAAP8AgIAA//8R/P87CDhcAAAAAXRSTlMAQObYZgAAAFNJREFUCB0FwbENwyAQAMCjSI+RF+AnIAXpLXmAl9Dvv0ruAAAAwN7fq+NTeb0P9l73OzpVeT8xOcc9IrpKLSKm32JEdJW0mJzE6FSiYS9AARzAHxQbCx2D+M74AAAAAElFTkSuQmCC'
}, {
    id: 'text',
    tooltip: 'Text',
    description: 'Inserts text into the picture.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAACxJREFUCB1jYACCAyDECEQPGJiAqICBBYIsGPh/MHDIMAjIMBjIMdTYA5UCANO8B/vh6q3yAAAAAElFTkSuQmCC'
}, {
    id: 'line',
    tooltip: 'Line',
    description: 'Draws a straight line with the selected line width.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFklEQVQ4y2NgoAz8H9U8qnlU87DRDABNiA/xUZW66AAAAABJRU5ErkJggg=='
}, {
    id: 'curve',
    tooltip: 'Curve',
    description: 'Draws a curved line with the selected line width.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAACZJREFUCB0FwQENADAIACB0bq9hFKMZ1SgHD8vQNM2wgqQoiiRwH0MVAtphf7+PAAAAAElFTkSuQmCC'
}, {
    id: 'rectangle',
    tooltip: 'Rectangle',
    description: 'Draws a rectangle with the selected fill style.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAJUlEQVQ4y2NgGPKAkYGB4T+lhlBiwH8WSm0fNWAwGECVhDTEAQBUugQbgUfDcwAAAABJRU5ErkJggg=='
}, {
    id: 'polygon',
    tooltip: 'Polygon',
    description: 'Draws a polygon with the selected fill style.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQklEQVQ4y2NkwAT/GXADRgYiwH8SxSnTzMJAIaDYAGKc+p8SzQQNGFxhQJb/GZEUMtIiAAnqGxyB+J8SvYwUGsAAACY2Egxkcb4+AAAAAElFTkSuQmCC'
}, {
    id: 'ellipse',
    tooltip: 'Ellipse',
    description: 'Draws an ellipse with the selected fill style.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAMklEQVQ4y2NgGPKAEY/cf2LUMpKgAa/8fzJc/58SzXC9LJQG4sAbQHEgUhyNFCekYQAATj8MC0rigyEAAAAASUVORK5CYII='
}, {
    id: 'rounded',
    tooltip: 'Rounded Rectangle',
    description: 'Draws a rounded rectangle with the selected fill style.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAKklEQVQ4y2NgGPKAEYn9nwK9JGtG0fOfAh/8Z6E0DEYNoEI0Ui0hDWEAAMk0CBHA/VZLAAAAAElFTkSuQmCC'
}];
