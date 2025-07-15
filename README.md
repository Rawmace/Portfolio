# Modern Portfolio Website 🎨

A sleek and interactive portfolio website built with Next.js and TypeScript, featuring modern design elements, smooth animations, and a responsive design that works beautifully across all devices.

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.1.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

</div>

## ✨ Key Features

- 🎯 **Modern UI/UX**: Clean and responsive design with smooth animations powered by Framer Motion
- 🗺️ **Interactive Map**: Dynamic location visualization using Mapbox GL
- 🌓 **Theme Toggle**: Seamless dark/light mode transitions with system preference support
- ✨ **Particle Effects**: Beautiful interactive background animations using TSParticles
- 📱 **Responsive Design**: Optimized for all devices (mobile, tablet, and desktop)
- 🔒 **Type-Safe**: Built with TypeScript for enhanced reliability and developer experience
- 🎨 **Custom Animations**: Smooth text and component animations
- 📦 **Project Showcase**: Interactive grid layout with hover effects

## 🚀 Tech Stack

### Core

- **Framework**: [Next.js 15.1](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - For type-safe code
- **Styling**: [TailwindCSS](https://tailwindcss.com/), [SASS](https://sass-lang.com/) - For modern, responsive styling

### UI & Animations

- **Component Library**: [Radix UI](https://www.radix-ui.com/) - Headless UI components
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - For smooth animations
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Particles**: [TSParticles](https://particles.js.org/) - For background effects

### Integrations

- **Maps**: [Mapbox GL](https://www.mapbox.com/) - For interactive mapping

## 🛠️ Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn
- A Mapbox account for the map integration

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio_v2.git
   cd portfolio_v2
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   ```bash
   # Create a .env.local file and add:
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm run dev`   | Starts the development server         |
| `npm run build` | Builds the app for production         |
| `npm run start` | Runs the built app in production mode |
| `npm run lint`  | Runs ESLint for code linting          |

## 🎨 Project Structure

```
src/
├── app/          # Next.js app router configuration
├── components/   # Reusable React components
├── context/     # React context providers
├── data/        # Static data and content
├── hooks/       # Custom React hooks
├── styles/      # Global styles and CSS modules
└── types/       # TypeScript type definitions
```

## 📱 Responsive Design

The portfolio is fully responsive with tailored experiences for:

- 🖥️ Desktop (1024px and above)
- 📱 Tablet (768px to 1023px)
- 📱 Mobile (below 768px)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
