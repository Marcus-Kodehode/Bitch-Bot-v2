import fs from 'fs/promises';
import path from 'path';
import chalk from 'chalk';
import { folderStructure } from './config/structure.js';
import { createReadmeTemplate } from './templates/readme.js';
import { logOperation } from './utils/logger.js';

export async function createProjectStructure(targetPath, options = {}) {
  const { preview = false, readme = true } = options;
  const absolutePath = path.resolve(targetPath);
  
  console.log(chalk.blue('🚀 Next.js Project Scaffolder'));
  console.log(chalk.gray('================================\n'));
  
  if (preview) {
    console.log(chalk.yellow('🔍 Preview Mode - Ingen endringer vil bli gjort\n'));
  }
  
  console.log(chalk.cyan(`📁 Target directory: ${absolutePath}\n`));
  
  // Show what will be created
  console.log(chalk.green('📋 Folder structure som vil bli opprettet:'));
  showStructurePreview(folderStructure);
  
  if (readme) {
    console.log(chalk.green('📄 README.md fil vil bli opprettet'));
  }
  
  if (preview) {
    console.log(chalk.yellow('\n✨ Preview fullført! Kjør uten --preview for å opprette strukturen.'));
    return;
  }
  
  // Create the actual structure
  console.log(chalk.blue('\n🚀 Starter opprettelse av mappestruktur...\n'));
  
  const stats = {
    foldersCreated: 0,
    filesCreated: 0,
    errors: 0
  };
  
  // Create folders
  for (const folder of folderStructure) {
    try {
      const folderPath = path.join(absolutePath, folder);
      await fs.mkdir(folderPath, { recursive: true });
      console.log(chalk.green(`📁 Opprettet: ${folder}`));
      logOperation(`Opprettet mappe: ${folder}`);
      stats.foldersCreated++;
    } catch (error) {
      console.error(chalk.red(`❌ Feil ved opprettelse av ${folder}:`, error.message));
      logOperation(`FEIL: Kunne ikke opprette ${folder} - ${error.message}`);
      stats.errors++;
    }
  }
  
  // Create README if requested
  if (readme) {
    try {
      const readmePath = path.join(absolutePath, 'README.md');
      const readmeContent = createReadmeTemplate();
      await fs.writeFile(readmePath, readmeContent);
      console.log(chalk.green('📄 Opprettet: README.md'));
      logOperation('Opprettet README.md');
      stats.filesCreated++;
    } catch (error) {
      console.error(chalk.red('❌ Feil ved opprettelse av README.md:', error.message));
      logOperation(`FEIL: Kunne ikke opprette README.md - ${error.message}`);
      stats.errors++;
    }
  }
  
  // Show completion stats
  console.log(chalk.blue('\n✅ Scaffolding fullført!\n'));
  console.log(chalk.cyan('📊 Statistikk:'));
  console.log(chalk.green(`   • Mapper opprettet: ${stats.foldersCreated}`));
  console.log(chalk.green(`   • Filer opprettet: ${stats.filesCreated}`));
  if (stats.errors > 0) {
    console.log(chalk.red(`   • Feil: ${stats.errors}`));
  }
  
  console.log(chalk.yellow('\n🎉 Din Next.js prosjektstruktur er klar!'));
  console.log(chalk.gray('Lykke til med kodingen! 🚀'));
}

function showStructurePreview(structure, indent = '') {
  for (const folder of structure) {
    console.log(chalk.gray(`${indent}📁 ${folder}/`));
  }
}