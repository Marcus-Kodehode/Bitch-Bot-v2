/**
 * File: src/config/structure.js
 * Location: /src/config/structure.js
 * 
 * Configuration file defining the standard Next.js project folder structure
 * Used by the scaffolder to create organized, professional project layouts
 */

/**
 * Standard Next.js 13+ App Router project folder structure
 * This array defines all the directories that will be created during scaffolding
 * Following Next.js best practices and modern project organization patterns
 */
export const folderStructure = [
  // Main app directory structure (Next.js 13+ App Router)
  'app/components',          // Reusable React components
  'app/components/ui',       // Basic UI elements (buttons, inputs, cards, etc.)
  'app/components/forms',    // Form-specific components and validation
  'app/components/layout',   // Layout components (header, footer, sidebar, etc.)
  'app/lib',                 // Utility libraries and configurations
  'app/hooks',               // Custom React hooks for shared logic
  'app/types',               // TypeScript type definitions and interfaces
  'app/styles',              // Global styles, CSS modules, and theme files
  'app/utils',               // Helper functions and utility modules
  
  // Public assets directory
  'public/assets',           // Static assets served directly by Next.js
  'public/assets/images',    // Image files (logos, photos, graphics)
  'public/assets/icons',     // Icon files (SVG, PNG icons)
  
  // Documentation and testing directories
  'docs',                    // Project documentation and guides
  'tests'                    // Test files and testing utilities
];

/**
 * Footer: src/config/structure.js
 * 
 * This configuration file defines the complete folder structure for Next.js projects
 * created by the scaffolder. The structure follows Next.js 13+ App Router conventions
 * and modern React development best practices. Each folder serves a specific purpose
 * in organizing code, assets, and documentation for maintainable project development.
 * The structure can be easily modified to accommodate different project requirements
 * or organizational preferences.
 */