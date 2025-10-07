import fs from 'fs/promises';
import path from 'path';

const LOG_FILE = 'scaffolder.log';

export async function logOperation(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;
  
  try {
    await fs.appendFile(LOG_FILE, logEntry);
  } catch (error) {
    // Silently fail if logging doesn't work
    console.error('Logging error:', error.message);
  }
}