import type { Tool } from './tool';

export interface ToolDefinition {
  tooltip: string;
  helpText: string;
  imagePosition: string;
  instance?: Tool;
  cursor?: 'none';
}
