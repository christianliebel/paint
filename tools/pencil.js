export class PencilTool {
    onMouseDown({event, context, x, y, secondaryColor, primaryColor}) {
        context.beginPath();
        context.strokeStyle = event.button === 2 ? secondaryColor : primaryColor;
        context.moveTo(x, y);
    }

    onMouseMove({x, y, context}) {
        context.lineTo(x, y);
        context.stroke();
    }
}
