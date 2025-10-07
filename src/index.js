#!/usr/bin/env node

/**
 * File: src/index.js
 * Location: /src/index.js
 * 
 * Main CLI entry point for the Next.js Project Scaffolder
 * Handles command-line argument parsing and program execution
 */

import { Command } from 'commander';
import chalk from 'chalk';
import { createProjectStructure } from './scaffolder.js';
import { showWelcome } from './utils/display.js';

// Initialize Commander.js program for CLI interface
const program = new Command();

// Configure the CLI program with name, description, and version
program
  .name('scaffold-next')
  .description('CLI tool for scaffolding professional Next.js project structures')
  .version('1.0.0');

// Define command arguments and options
program
  .argument('[path]', 'Target directory (default: current directory)', '.') // Optional path argument
  .option('-p, --preview', 'Preview what will be created without making changes') // Preview mode flag
  .option('--no-readme', 'Skip creating README.md file') // Skip README option
  .action(async (targetPath, options) => {
    // Show welcome message to user
    showWelcome();
    
    try {
      // Execute the main scaffolding function with provided arguments
      await createProjectStructure(targetPath, options);
    } catch (error) {
      // Handle any errors that occur during scaffolding
      console.error(chalk.red('❌ Error:'), error.message);
      process.exit(1); // Exit with error code
    }
  });

// Parse command-line arguments and execute the program
program.parse();

/**
 * Footer: src/index.js
 * 
 * This file serves as the main entry point for the Next.js Project Scaffolder CLI tool.
 * It uses Commander.js to handle command-line argument parsing and provides a clean
 * interface for users to scaffold Next.js projects with various options like preview
 * mode and README generation control. The file handles error catching and provides
 * user-friendly error messages when operations fail.
 */