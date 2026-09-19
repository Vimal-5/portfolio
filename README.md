# 🚀 Vimal V. — Software Developer Portfolio

A production-quality, interactive personal portfolio website with a **Space × Software Engineering** theme. Built with React, TypeScript, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/status-live-00d4ff?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-4d7cff?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646cff?style=for-the-badge&logo=vite)

## ✨ Features

- **Space/Cosmic Theme** — Dark navy background with twinkling stars, orbital animations, and cosmic gradients
- **Animated Skill Rings** — Circular SVG progress indicators that animate from 0% to target when scrolled into view
- **Interactive Filtering** — Skills can be filtered by category
- **Glassmorphism Cards** — Frosted glass UI cards with glow hover effects
- **Smooth Scroll Animations** — Every section reveals with entrance animations
- **Responsive Design** — Optimized for desktop (1440px), tablet (768px), and mobile (375px)
- **Mobile Hamburger Menu** — Full-screen animated overlay navigation
- **Contact Form** — Client-side validated form, ready for backend integration
- **Scroll Progress Bar** — Top-of-page indicator showing scroll position
- **Back to Top Button** — Floating action button appears after scrolling
- **Accessibility** — Semantic HTML, keyboard navigation, reduced-motion support, ARIA labels
- **Performance** — Canvas-based star background, optimized animations, lazy sections

## 🛠 Technologies

| Category | Tech |
|----------|------|
| Framework | React 19 |
| Language | TypeScript 5 |
| Build Tool | Vite 8 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Styling | Vanilla CSS (custom design system) |

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          # Add your CV here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── SkillRing.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certifications.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── BackToTop.tsx
│   │   └── StarBackground.tsx
│   ├── data/
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── achievements.ts
│   │   └── certifications.ts
│   ├── hooks/
│   │   ├── useScrollProgress.ts
│   │   └── useMouseParallax.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Vimal-5/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🔧 Customization

### Update Personal Information

- **URLs**: Search for `#` (placeholder URLs) in `src/data/*.ts` and `src/components/Hero.tsx`, `Contact.tsx`, `Footer.tsx`
- **Email**: Replace `[PLACEHOLDER]` with your actual email
- **Resume**: Add your `resume.pdf` to the `public/` folder
- **Projects**: Edit `src/data/projects.ts` to add/modify projects
- **Skills**: Edit `src/data/skills.ts` to update skill categories and percentages

### Connect Contact Form

The contact form validates inputs client-side. To send real emails, integrate a service in `src/components/Contact.tsx` at the `// TODO: Connect to email service / backend` comment. Recommended services:

- [EmailJS](https://www.emailjs.com/)
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://docs.netlify.com/forms/setup/)

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag and drop the `dist/` folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push the `dist/` folder to a `gh-pages` branch
```

## 🔮 Future Improvements

- [ ] Blog/articles section
- [ ] Dark/light theme toggle
- [ ] Project detail modal with screenshots
- [ ] Testimonials section
- [ ] Three.js 3D planet background option
- [ ] i18n internationalization
- [ ] Analytics integration
- [ ] PWA support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Designed & Built by Vimal V.** 🚀
