/**
 * File: src/utils/display.js
 * Location: /src/utils/display.js
 * 
 * Display utilities for CLI user interface
 * Handles welcome messages and other console output formatting
 */

import chalk from 'chalk';

/**
 * Displays the welcome message when the scaffolder starts
 * Shows the tool name, description, and a visual separator
 * Uses chalk for colored terminal output
 */
export function showWelcome() {
  console.log(chalk.blue.bold('\n🚀 Next.js Project Scaffolder'));
  console.log(chalk.gray('Professional folder structure generator for Next.js projects'));
  console.log(chalk.gray('================================\n'));
}

/**
 * Footer: src/utils/display.js
 * 
 * This utility file handles the visual presentation of the CLI interface.
 * It provides functions for displaying welcome messages and other formatted
 * output to enhance the user experience. The file uses the chalk library
 * to add colors and styling to terminal output, making the CLI more
 * visually appealing and easier to read.
 */