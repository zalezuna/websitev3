# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based marketing website for regenmedai, a healthcare AI consulting company. The site is built with:

- React 18
- Vite as the build tool
- TailwindCSS for styling
- Lucide React for icons

The website is a simple single-page application with sections for services, company information, and contact details.

## Commands

### Development

```bash
# Install dependencies
npm install

# Start development server (auto-opens in browser at http://localhost:5173)
npm run dev

# Build for production (output to /dist directory)
npm run build

# Preview production build locally
npm run preview
```

### Docker

The project includes Docker support:

```bash
# Build Docker image
docker build -t regenmed-website .

# Run Docker container
docker run -p 80:80 regenmed-website
```

## Project Structure

- `/src/App.jsx` - Main application component containing all content sections
- `/src/main.jsx` - Entry point for the React application
- `/src/index.css` - Minimal CSS with Tailwind imports
- `/tailwind.config.js` - TailwindCSS configuration with custom theme colors
- `/vite.config.js` - Vite build configuration

The website uses a brand-specific color scheme defined in the TailwindCSS configuration:
- Primary: Deep Navy (#0A2540)
- Accent: Muted Maroon (#8C3B4A)
- Other brand colors for text, backgrounds, and borders

## Architecture Notes

This is a simple static React website with all content contained in the main App component. There are no complex state management solutions, APIs, or backends. The site uses:

1. React hooks (useState) for mobile menu state
2. Simple component structure with all UI in App.jsx
3. TailwindCSS for responsive design and styling
4. Lucide React for SVG icons

All website content (text, links, services) is defined within the App component as JavaScript variables.