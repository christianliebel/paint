export async function paste({context}) {
    // TODO: Selection
    const items = await navigator.clipboard.read();
    for (let item of items) {
        try {
            for (let type of item.types) {
                if (type.match(/^image\//)) {
                    const blob = await item.getType(type);
                    const image = new Image();
                    image.onload = () => {
                        context.drawImage(image, 0, 0);
                        URL.revokeObjectURL(image.src);
                    };
                    image.src = URL.createObjectURL(blob);
                }
            }
        } catch (e) {
            console.error('Clipboard API paste error', e);
        }
    }
}
