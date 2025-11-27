# GoodAI - Modern SaaS Landing Page

A beautiful, modern, and fully responsive landing page for an AI-powered SaaS platform. Built with React, TypeScript, and Tailwind CSS, featuring a sleek design with dark/light mode support.

![Modern SaaS Landing Page](https://img.shields.io/badge/React-19.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38bdf8) ![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with gradient accents and smooth animations
- 🌓 **Dark/Light Mode** - Seamless theme switching with persistent user preferences
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **Type-Safe** - Full TypeScript support for better developer experience
- 🧩 **Component-Based** - Modular, reusable React components
- 🎨 **Tailwind CSS v4** - Latest Tailwind CSS with modern utility classes

## 🚀 Sections

- **Hero Section** - Eye-catching hero with email signup form
- **Brands Showcase** - Display trusted partner logos
- **Services** - Feature grid showcasing AI services
- **About Us** - Mission and vision with engaging visuals
- **Pricing Plans** - Multiple pricing tiers with feature comparison
- **Call to Action** - Compelling CTA section to drive conversions
- **Numbers/Stats** - Key metrics and achievements
- **Navigation** - Smooth scrolling navigation with mobile menu
- **Footer** - Clean footer with navigation links

## 🛠️ Tech Stack

- **React 19.2.0** - Latest React with modern features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 7.2.4** - Next-generation frontend tooling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Zustand 5.0.8** - Lightweight state management for theme persistence
- **ESLint** - Code quality and consistency

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modern-saas-landing-page.git
cd modern-saas-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
modern-saas-landing-page/
├── public/
│   └── assets/          # Images, logos, and static assets
├── src/
│   ├── components/
│   │   ├── cards/       # Reusable card components
│   │   ├── elements/    # Navbar, Footer
│   │   ├── sections/    # Page sections (Hero, Pricing, etc.)
│   │   └── shared/      # Shared UI components
│   ├── store/           # Zustand state management
│   ├── utils/           # Utility functions and data
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and theme variables
├── index.html           # HTML template
└── package.json         # Dependencies and scripts
```

## 🎨 Customization

### Theme Colors

The color scheme can be customized in `src/index.css`. The project uses CSS custom properties for easy theming:

```css
@theme {
  --color-bg: 255 255 255;
  --color-box: 255 255 255;
  --heading-1: 23 37 84;
  /* ... */
}
```

### Content

- **Services**: Edit `src/utils/services-data.tsx`
- **Pricing Plans**: Edit `src/utils/pricing-plan.ts`
- **Navigation Items**: Edit `src/utils/navItems.ts`

## 🌓 Dark Mode

The application includes a fully functional dark/light mode toggle:
- Theme preference is persisted in localStorage
- Automatically detects system preference on first visit
- Smooth transitions between themes
- Accessible via the theme toggle button in the navbar

## 📱 Responsive Design

The landing page is fully responsive with breakpoints for:
- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/modern-saas-landing-page)

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build settings if needed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Images from [Pexels](https://www.pexels.com/)

## 📧 Contact

For questions or suggestions, please open an issue or contact the maintainers.

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
