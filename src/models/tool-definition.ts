import type { Tool } from './tool';

/**
 * Contains all information about a tool in the tool box.
 */
export interface ToolDefinition {
  /**
   * Contains the tool's tooltip when hovered over in the tool box.
   */
  tooltip: string;
  /**
   * Contains the help text shown in the status bar.
   */
  helpText: string;
  /**
   * Contains the position of the tool's icon in the tools' background image.
   */
  imagePosition: string;
  /**
   * Contains the actual {@see Tool} instance for this tool.
   */
  instance?: Tool;
  /**
   * Defines the cursor to show.
   */
  cursor?: string;
}
