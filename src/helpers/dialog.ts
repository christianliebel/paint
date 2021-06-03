import type {
  CustomZoom,
  CustomZoomResult,
} from '../elements/dialogs/custom-zoom';
import type {
  MessageBox,
  MessageBoxResult,
} from '../elements/dialogs/message-box';

export function showDialog(selector: 'paint-dialog-about'): Promise<void>;
export function showDialog(
  selector: 'paint-dialog-custom-zoom',
  propertyBag: Partial<CustomZoom>,
): Promise<CustomZoomResult | undefined>;
export function showDialog(
  selector: 'paint-dialog-message-box',
  propertyBag: Partial<MessageBox>,
): Promise<MessageBoxResult | undefined>;
export function showDialog(
  selector: string,
  propertyBag: Record<string, unknown> = {},
): Promise<unknown> {
  return new Promise((res) => {
    const app = document.querySelector('paint-app')?.shadowRoot;
    const dialog = document.createElement(selector);

    Object.entries(propertyBag).forEach(
      ([key, value]) =>
        ((dialog as unknown as Record<string, unknown>)[key] = value),
    );

    dialog.addEventListener('close', (event: unknown) => {
      app?.removeChild(dialog);
      res((event as CustomEvent).detail);
    });
    app?.appendChild(dialog);
  });
}
