# MusicWave - Music Website

A modern, responsive music streaming and artist discovery platform built with Vite and React.

## Project Overview

MusicWave is a web application that allows users to discover music, explore artists, and stay updated with the latest releases. The platform features a clean, modern UI with responsive design to ensure a great user experience across all devices.

## Features

- Responsive design that works on desktop, tablet, and mobile
- Home page with featured artists and latest releases
- Artists page with filtering by genre
- Latest releases page with filtering by release type
- User authentication (Login/Signup)
- About page with company information
- Interactive UI elements with smooth animations

## Tech Stack

- React
- React Router
- Vite (for fast development and optimized builds)
- CSS3 (with modern features and variables)
- Responsive Design

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd MusicProject
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open the application
   ```
   Visit http://localhost:5173 in your browser
   ```

## Project Structure

- `/public` - Static assets
- `/src` - Source code
  - `/components` - Reusable UI components
  - `/pages` - Page components for routing
  - `/images` - Image assets
  - `App.jsx` - Main application component
  - `App.css` - Global styles
  - `main.jsx` - Entry point

## Adding Real Images

The project currently uses placeholder backgrounds and images. To replace them with actual images:

1. Add your image files to `/public/images/` for backgrounds and `/src/images/` for content images
2. Key images to replace:
   - Hero background: `/public/images/hero-bg-placeholder.jpg`
   - Newsletter background: `/public/images/newsletter-placeholder.jpg`
   - Artists hero: `/public/images/artists-placeholder.jpg`
   - Latest hero: `/public/images/latest-placeholder.jpg`
   - About hero: `/public/images/about-placeholder.jpg`
   - User profile pictures: `/src/images/user-icon.png`
   - Artist thumbnails: `/src/images/artist-1.jpg`, etc.
   - Release covers: `/src/images/track-1.jpg`, etc.

## Building for Production

To build the application for production:

```
npm run build
```

This will generate a `/dist` directory with optimized production files.

## License

This project is licensed under the MIT License.
