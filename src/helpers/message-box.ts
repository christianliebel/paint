import type {
  DialogLayout,
  MessageBoxIcon,
  MessageBoxResult,
} from '../elements/dialogs/message-box';
import { showDialog } from './dialog';

export function showMessageBox(
  prompt: string,
  icon: MessageBoxIcon = null,
  title = '',
  layout: DialogLayout = 'ok',
): Promise<MessageBoxResult | undefined> {
  return showDialog('paint-dialog-message-box', {
    prompt,
    icon,
    title,
    layout,
  });
}
