#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { createProjectStructure } from './scaffolder.js';
import { showWelcome } from './utils/display.js';

const program = new Command();

program
  .name('scaffold-next')
  .description('CLI tool for scaffolding professional Next.js project structures')
  .version('1.0.0');

program
  .argument('[path]', 'Target directory (default: current directory)', '.')
  .option('-p, --preview', 'Preview what will be created without making changes')
  .option('--no-readme', 'Skip creating README.md file')
  .action(async (targetPath, options) => {
    showWelcome();
    
    try {
      await createProjectStructure(targetPath, options);
    } catch (error) {
      console.error(chalk.red('❌ Error:'), error.message);
      process.exit(1);
    }
  });

program.parse();