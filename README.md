<div align="center">

<p><img src="/public/images/MBlogo.png" alt="Personal Logo" width="150" /></p>

<p><img src="/public/images/scaffolder-logo.png" alt="Next.js Scaffolder Logo" width="150" /></p>

# Next.js Project Scaffolder

> Professional CLI tool for scaffolding Next.js project folder structures – built with Node.js and modern JavaScript

[![Node.js](https://img.shields.io/badge/Node.js-16+-339933.svg)](https://nodejs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Commander.js](https://img.shields.io/badge/Commander.js-11-blue.svg)](https://github.com/tj/commander.js)
[![Inquirer.js](https://img.shields.io/badge/Inquirer.js-9-green.svg)](https://github.com/SBoudrias/Inquirer.js)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

## Features

- 🚀 **Professional scaffolding** - Creates well-organized Next.js project structures
- 📁 **Intelligent folder organization** - Follows Next.js 13+ App Router best practices  
- 🎯 **CLI interface** - Interactive command-line tool with user-friendly prompts
- 📄 **README generation** - Automatically creates comprehensive project documentation
- 🔍 **Preview mode** - See what will be created before making changes
- 🎨 **Customizable structure** - Configurable folder layouts and options
- 💾 **Logging system** - Tracks all operations for debugging and review
- ⚡ **Fast execution** - Efficient folder and file creation process

## Screenshot

<div align="center">
<img src="/public/images/scaffolder-screenshot.png" alt="Next.js Scaffolder Screenshot" width="900" />
</div>

## Getting Started

### Prerequisites

- **Node.js 16+** - [Download here](https://nodejs.org)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/nextjs-project-scaffolder.git
cd nextjs-project-scaffolder
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the scaffolder**
```bash
# Interactive mode
npm run dev

# Or run directly
node src/index.js
```

4. **Global installation (optional)**
```bash
# Install globally to use anywhere
npm install -g .

# Then use from any directory
scaffold-next
```

## Built With

- **[Node.js](https://nodejs.org)** - JavaScript runtime for CLI applications
- **[Commander.js](https://github.com/tj/commander.js)** - Command-line interface framework
- **[Inquirer.js](https://github.com/SBoudrias/Inquirer.js)** - Interactive command line prompts
- **[Chalk](https://github.com/chalk/chalk)** - Terminal string styling and colors
- **[ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)** - Modern JavaScript module system

## Project Structure

```
nextjs-project-scaffolder/
├── src/
│   ├── config/
│   │   └── structure.js        # Folder structure definitions
│   ├── templates/
│   │   └── readme.js          # README template generator
│   ├── utils/
│   │   └── logger.js          # Operation logging utilities
│   ├── index.js               # CLI entry point and argument parsing
│   └── scaffolder.js          # Core scaffolding logic
├── .kiro/
│   └── specs/                 # Feature specifications and documentation
├── package.json               # Project dependencies and scripts
└── README.md                  # This file
```

## How NPM Scripts Work

### Understanding NPM Scripts

NPM scripts are defined in `package.json` under the `"scripts"` section:

```json
{
  "scripts": {
    "dev": "node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

### With `src/` Directory Structure

**This project uses a `src/` directory structure:**

- **Entry point**: `src/index.js` (defined in `"main"` field)
- **Binary**: `src/index.js` (defined in `"bin"` field)
- **Module type**: `"type": "module"` enables ES6 imports/exports

**Running commands:**
```bash
# Runs the script defined in package.json
npm run dev          # Executes: node src/index.js

# Direct execution
node src/index.js    # Runs the main entry point

# Global installation creates a command
npm install -g .     # Creates 'scaffold-next' command
scaffold-next        # Runs src/index.js globally
```

### Without `src/` Directory (Traditional)

**Traditional Node.js projects often have:**

- **Entry point**: `index.js` or `app.js` in root
- **Scripts**: `npm start`, `npm test`, `npm run build`

**Example structure:**
```bash
# Traditional structure
npm start            # Usually runs: node index.js
npm run dev          # Often runs: nodemon index.js
npm test             # Runs test suite
```

### Key Differences

| Aspect | With `src/` | Without `src/` |
|--------|-------------|----------------|
| **Entry Point** | `src/index.js` | `index.js` |
| **Organization** | Source code separated | All files in root |
| **Build Process** | May need compilation | Direct execution |
| **Best Practice** | Modern, organized | Traditional, simple |

## CLI Usage

### Interactive Mode
```bash
npm run dev
```
The scaffolder will prompt you for:
- Target directory path
- Whether to include README generation
- Preview mode option

### Command Line Arguments
```bash
# Preview what will be created (no changes made)
node src/index.js --preview /path/to/project

# Create structure without README
node src/index.js --no-readme /path/to/project

# Get help
node src/index.js --help
```

## Generated Project Structure

The scaffolder creates this Next.js 13+ App Router structure:

```
your-project/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Basic UI elements
│   │   ├── forms/          # Form components
│   │   └── layout/         # Layout components
│   ├── lib/                # Utility libraries and configurations
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   ├── styles/             # Global styles and CSS modules
│   └── utils/              # Helper functions
├── public/
│   └── assets/
│       ├── images/         # Static images
│       └── icons/          # Icon files
├── docs/                   # Project documentation
├── tests/                  # Test files
└── README.md               # Generated project documentation
```

## Configuration

### Folder Structure Configuration

Edit `src/config/structure.js` to customize the generated folder structure:

```javascript
export const folderStructure = [
  'app/components/ui',
  'app/components/forms',
  'app/components/layout',
  // Add your custom folders here
];
```

### README Template Customization

Modify `src/templates/readme.js` to change the generated README content:

```javascript
export function createReadmeTemplate() {
  return `# Your Custom Template
  
  Add your custom README content here...`;
}
```

## Browser Support

This is a Node.js CLI tool, so browser support is not applicable. However, the generated Next.js projects support:

- Chrome/Chromium 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Building for Production

```bash
# The tool is ready to use as-is
npm run dev

# For global distribution
npm pack              # Creates a .tgz file for distribution
npm publish           # Publishes to npm registry (requires npm account)
```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/nextjs-project-scaffolder/issues).

### Development Guidelines

1. **Follow JavaScript ES6+ standards** - Use modern syntax and features
2. **Maintain CLI usability** - Ensure commands are intuitive and well-documented
3. **Test thoroughly** - Verify folder creation and README generation
4. **Update documentation** - Keep README and code comments current
5. **Use semantic versioning** - Follow semver for version updates

### Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Make your changes in the `src/` directory
4. Test with: `npm run dev`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

*"Great projects start with great structure."*

<sub>Built with ❤️ for Next.js developers</sub>

</div>
