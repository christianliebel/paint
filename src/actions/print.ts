import type { Action } from '../models/action';

export class PrintAction implements Action {
  execute(): void {
    window.print();
  }
}
