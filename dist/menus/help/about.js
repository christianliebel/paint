import { showDialog } from '../../helpers/dialog.js';
export class AboutAction {
  execute() {
    showDialog('paint-dialog-about');
  }
}