/**
 * File: src/templates/readme.js
 * Location: /src/templates/readme.js
 * 
 * README template generator for scaffolded Next.js projects
 * Creates comprehensive project documentation with standard sections
 */

/**
 * Generates a complete README.md template for new Next.js projects
 * Includes all standard sections: features, installation, structure, scripts, etc.
 * @returns {string} Complete README.md content as a formatted string
 */
export function createReadmeTemplate() {
  return `# 🚀 Next.js Project

A professional Next.js application with a well-organized folder structure.

## ✨ Features

- 🎯 Modern Next.js setup
- 📁 Professional folder structure
- 🎨 Ready for styling (CSS/Tailwind)
- 🔧 TypeScript ready
- 📱 Responsive design ready

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

\`\`\`
app/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI elements (buttons, inputs, etc.)
│   ├── forms/          # Form components
│   └── layout/         # Layout components (header, footer, etc.)
├── lib/                # Utility libraries and configurations
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── styles/             # Global styles and CSS modules
└── utils/              # Helper functions and utilities

public/
├── assets/
│   ├── images/         # Static images
│   └── icons/          # Icon files

docs/                   # Project documentation
tests/                  # Test files
\`\`\`

## 🛠️ Available Scripts

\`\`\`bash
# Development
npm run dev             # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run type-check      # Run TypeScript checks
\`\`\`

## 🎨 Styling

This project is ready for your preferred styling solution:
- CSS Modules
- Tailwind CSS
- Styled Components
- Emotion

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License.

---

**"Great projects start with great structure."** 

Built with ❤️ using Next.js
`;
}

/**
 * Footer: src/templates/readme.js
 * 
 * This file provides the README template generation functionality for the scaffolder.
 * It creates a comprehensive, professional README.md file for new Next.js projects
 * with all the standard sections developers expect: features, installation instructions,
 * project structure, available scripts, styling options, learning resources, and
 * contribution guidelines. The template uses markdown formatting and includes emojis
 * for visual appeal and better readability.
 */