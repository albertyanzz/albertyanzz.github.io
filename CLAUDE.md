# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn export` - Export static files

## Architecture Overview

This is a Next.js-based personal portfolio website built with TypeScript and React. The site uses a terminal-inspired interface design.

### Core Structure

- **Content Management**: Uses markdown files in `/posts/` for content (resume sections, project descriptions, experiences)
- **Content Processing**: `lib/posts.ts` handles markdown parsing with gray-matter for frontmatter and remark for HTML conversion
- **Layout System**: Global layout wrapper in `components/Layout.tsx` with consistent styling
- **Responsive Design**: Mobile breakpoint defined in `lib/constants.ts` (900px)

### Key Components

- **Terminal Components**: `Terminal.tsx` and `TerminalLine.tsx` create the terminal interface
- **Navigation**: `MenuBar.tsx`, `SideMenu.tsx`, and `MobileMenu.tsx` handle different navigation patterns
- **Content Display**: `ProjectCard.tsx`, `ExperienceCard.tsx` with associated modules for structured content presentation
- **Interactive Elements**: Uses `react-draggable` for draggable components

### File Organization

- `/pages/` - Next.js pages (about, experience, projects, links, etc.)
- `/components/` - Reusable React components
- `/lib/` - Utility functions and shared logic
- `/posts/` - Markdown content organized by type (resume/experiences, resume/projects, etc.)
- `/styles/` - CSS modules for component styling
- `/public/` - Static assets (images, PDFs, icons)

### Content Structure

Content is organized hierarchically in markdown:

- `/posts/resume/experiences/` - Work experience entries
- `/posts/resume/projects/` - Project descriptions
- Each markdown file uses gray-matter frontmatter for metadata

### Styling Approach

Uses CSS Modules for component-specific styling with global styles in `globals.css`. Responsive design implemented with media queries and mobile-first approach.
