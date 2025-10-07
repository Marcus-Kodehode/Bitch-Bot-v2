/**
 * File: src/utils/logger.js
 * Location: /src/utils/logger.js
 * 
 * Logging utility for tracking scaffolder operations
 * Provides persistent logging of all scaffolding activities for debugging and audit
 */

import fs from 'fs/promises';
import path from 'path';

// Log file name - created in the current working directory
const LOG_FILE = 'scaffolder.log';

/**
 * Logs a scaffolding operation with timestamp to a persistent log file
 * Used to track all folder creation, file generation, and error events
 * @param {string} message - The message to log (operation description or error)
 */
export async function logOperation(message) {
  // Create ISO timestamp for consistent log formatting
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;
  
  try {
    // Append log entry to file (creates file if it doesn't exist)
    await fs.appendFile(LOG_FILE, logEntry);
  } catch (error) {
    // Silently fail if logging doesn't work - don't break scaffolding process
    console.error('Logging error:', error.message);
  }
}

/**
 * Footer: src/utils/logger.js
 * 
 * This utility provides logging functionality for the scaffolder operations.
 * It creates a persistent log file that tracks all scaffolding activities including
 * successful folder creation, file generation, and any errors that occur during
 * the process. The logging is designed to fail gracefully - if logging fails,
 * it won't interrupt the main scaffolding process. This is useful for debugging
 * issues and maintaining an audit trail of scaffolding operations.
 */