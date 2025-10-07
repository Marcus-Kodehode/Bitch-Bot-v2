/**
 * File: src/scaffolder.js
 * Location: /src/scaffolder.js
 * 
 * Core scaffolding logic for creating Next.js project structures
 * Handles folder creation, README generation, and operation logging
 */

import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import { folderStructure } from './config/structure.js';
import { createReadmeTemplate } from './templates/readme.js';
import { logOperation } from './utils/logger.js';

/**
 * Main function to create a complete Next.js project structure
 * @param {string} targetPath - The directory where the project should be created
 * @param {Object} options - Configuration options for scaffolding
 * @param {boolean} options.preview - If true, only shows what would be created
 * @param {boolean} options.readme - If true, creates a README.md file
 */
export async function createProjectStructure(targetPath, options = {}) {
  // Extract options with default values
  const { preview = false, readme = true } = options;
  const absolutePath = path.resolve(targetPath); // Convert to absolute path
  
  // Display header information
  console.log(chalk.blue('🚀 Next.js Project Scaffolder'));
  console.log(chalk.gray('================================\n'));
  
  // Show preview mode indicator if enabled
  if (preview) {
    console.log(chalk.yellow('🔍 Preview Mode - Ingen endringer vil bli gjort\n'));
  }
  
  // Display target directory
  console.log(chalk.cyan(`📁 Target directory: ${absolutePath}\n`));
  
  // Show what will be created
  console.log(chalk.green('📋 Folder structure som vil bli opprettet:'));
  showStructurePreview(folderStructure);
  
  // Indicate if README will be created
  if (readme) {
    console.log(chalk.green('📄 README.md fil vil bli opprettet'));
  }
  
  // Exit early if in preview mode
  if (preview) {
    console.log(chalk.yellow('\n✨ Preview fullført! Kjør uten --preview for å opprette strukturen.'));
    return;
  }
  
  // Start actual structure creation
  console.log(chalk.blue('\n🚀 Starter opprettelse av mappestruktur...\n'));
  
  // Initialize statistics tracking
  const stats = {
    foldersCreated: 0,
    filesCreated: 0,
    errors: 0
  };
  
  // Create each folder in the structure
  for (const folder of folderStructure) {
    try {
      const folderPath = path.join(absolutePath, folder);
      // Create folder recursively (creates parent directories if needed)
      await fs.mkdir(folderPath, { recursive: true });
      console.log(chalk.green(`📁 Opprettet: ${folder}`));
      logOperation(`Opprettet mappe: ${folder}`); // Log the operation
      stats.foldersCreated++;
    } catch (error) {
      // Handle folder creation errors
      console.error(chalk.red(`❌ Feil ved opprettelse av ${folder}:`, error.message));
      logOperation(`FEIL: Kunne ikke opprette ${folder} - ${error.message}`);
      stats.errors++;
    }
  }
  
  // Create README file if requested
  if (readme) {
    try {
      const readmePath = path.join(absolutePath, 'README.md');
      const readmeContent = createReadmeTemplate(); // Generate README content
      await fs.writeFile(readmePath, readmeContent); // Write file to disk
      console.log(chalk.green('📄 Opprettet: README.md'));
      logOperation('Opprettet README.md');
      stats.filesCreated++;
    } catch (error) {
      // Handle README creation errors
      console.error(chalk.red('❌ Feil ved opprettelse av README.md:', error.message));
      logOperation(`FEIL: Kunne ikke opprette README.md - ${error.message}`);
      stats.errors++;
    }
  }
  
  // Display completion statistics
  console.log(chalk.blue('\n✅ Scaffolding fullført!\n'));
  console.log(chalk.cyan('📊 Statistikk:'));
  console.log(chalk.green(`   • Mapper opprettet: ${stats.foldersCreated}`));
  console.log(chalk.green(`   • Filer opprettet: ${stats.filesCreated}`));
  if (stats.errors > 0) {
    console.log(chalk.red(`   • Feil: ${stats.errors}`));
  }
  
  // Show completion message
  console.log(chalk.yellow('\n🎉 Din Next.js prosjektstruktur er klar!'));
  console.log(chalk.gray('Lykke til med kodingen! 🚀'));
}

/**
 * Helper function to display the folder structure preview
 * @param {Array} structure - Array of folder paths to display
 * @param {string} indent - Indentation string for nested display
 */
function showStructurePreview(structure, indent = '') {
  for (const folder of structure) {
    console.log(chalk.gray(`${indent}📁 ${folder}/`));
  }
}

/**
 * Footer: src/scaffolder.js
 * 
 * This file contains the core scaffolding logic for the Next.js Project Scaffolder.
 * It handles the creation of folder structures, README file generation, and provides
 * comprehensive error handling and logging. The main function supports both preview
 * mode (for showing what would be created) and actual creation mode. It tracks
 * statistics about the scaffolding process and provides user-friendly feedback
 * throughout the operation.
 */