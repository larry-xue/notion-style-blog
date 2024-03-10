# Notion-Style-Blog

An elegant, Notion-inspired blogging platform designed to simplify content creation and presentation. Embrace the clean, distraction-free aesthetic of Notion to share your ideas, stories, and knowledge in a beautifully organized space. Perfect for creators seeking a seamless and intuitive blogging experience.

This project leverages the power of React, MUI, React Router, Vite, and TypeScript (TSX) to bring you a personal blogging experience reminiscent of Notion's simplicity and elegance.

## Features

- Notion-inspired UI for a clean and distraction-free writing and reading experience.
- Built with React + MUI for a modern, responsive design.
- Uses React Router for efficient navigation.
- Vite for fast development and HMR (Hot Module Replacement).
- TypeScript for strong typing and developer experience.

## Installation

To get started with this template, follow the steps below to install the project on your local machine.

### Prerequisites

Ensure you have Node.js and npm installed on your machine. This project was built with Node.js version 14.x or newer.

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/larry-xue/notion-style-blog
cd notion-style-blog
```

### Install Dependencies

Next, install the project dependencies using npm:

```bash
npm install
```

### Run the Project

To run the project locally and access it in your browser:

```bash
npm run dev
```

This command starts the Vite development server. You can view your blog by opening `http://localhost:3000` in your browser.

## Customizing ESLint Configuration

This project includes a basic ESLint setup for React and TypeScript. To expand the ESLint configuration for production:

- Update the `parserOptions` in your ESLint configuration to enable type-aware linting rules:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Consider replacing `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-requiring-type-checking` or `plugin:@typescript-eslint/strict`.
- Optionally, add `plugin:@typescript-eslint/eslint-recommended` and `plugin:@typescript-eslint/recommended-requiring-type-checking` for stricter type checks.
- Install `eslint-plugin-react` and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the extends list for React-specific linting.

## Contributing

Contributions to the Notion-Style-Blog are welcome! Please feel free to submit pull requests or open issues to improve the project or suggest new features.

## License

This project is open-sourced under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Start building your Notion-like blog today and bring your content creation and presentation to the next level with Notion-Style-Blog!