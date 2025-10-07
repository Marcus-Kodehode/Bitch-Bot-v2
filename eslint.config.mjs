/**
 * File: eslint.config.mjs
 * Location: /eslint.config.mjs
 * 
 * ESLint configuration for Node.js CLI application
 * Configured for ES6+ modules and Node.js environment
 */

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        // Node.js globals
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        global: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly"
      }
    },
    rules: {
      // Basic JavaScript rules
      "no-unused-vars": "warn",
      "no-console": "off", // Allow console in CLI apps
      "prefer-const": "error",
      "no-var": "error",
      
      // ES6+ rules
      "arrow-spacing": "error",
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      
      // Code style
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"]
    },
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "*.log",
      ".kiro/**"
    ]
  }
];
