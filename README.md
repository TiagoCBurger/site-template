# Modern React Site

A modern React site built with:
- Vite for blazing-fast development and builds
- TypeScript for type safety
- shadcn/ui for beautiful, accessible UI components
- Tailwind CSS for utility-first styling

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser at: `http://localhost:5173`

## Features

- Modern and responsive UI with shadcn/ui components
- Dark mode and light mode support
- Type-safe code with TypeScript
- Fast development with Vite

## Project Structure

- `src/` - Source code
  - `components/` - Reusable UI components
    - `ui/` - shadcn/ui components
  - `lib/` - Utility functions and helpers
  - `assets/` - Static assets

## Adding More shadcn/ui Components

You can add more shadcn/ui components as needed:

```bash
npx shadcn-ui@latest add [component-name]
# Example: npx shadcn-ui@latest add card
```

## Building for Production

```bash
npm run build
```

This will create an optimized build in the `dist` directory.
