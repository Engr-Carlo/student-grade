# Student Grade System - Next.js Landing Page

A modern, responsive landing page for the Student Grade System built with Next.js and CSS Modules.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Component-based architecture
- CSS Modules for scoped styling
- Optimized for performance

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Building for Production

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
.
├── components/          # React components
│   ├── Navbar.js
│   ├── Hero.js
│   ├── Features.js
│   ├── HowItWorks.js
│   ├── Benefits.js
│   ├── CTA.js
│   └── Footer.js
├── pages/              # Next.js pages
│   ├── _document.js
│   └── index.js
├── styles/             # CSS Modules
│   ├── globals.css
│   ├── Navbar.module.css
│   ├── Hero.module.css
│   ├── Features.module.css
│   ├── HowItWorks.module.css
│   ├── Benefits.module.css
│   ├── CTA.module.css
│   └── Footer.module.css
├── package.json
├── next.config.js
└── jsconfig.json
```

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Select your repository
5. Click "Deploy"

Vercel will automatically build and deploy your Next.js application.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) - Scoped styling

## License

MIT
