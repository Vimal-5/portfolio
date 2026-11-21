# Vimal V. — Software Developer Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and Framer Motion. The visual direction combines a space-inspired theme with a clean software-engineering portfolio.

## Highlights

- Responsive navigation and section layouts
- Space-inspired background and motion effects
- Skills grouped by category
- Project, achievement, certification, and education sections
- Accessible labels, keyboard focus styles, and reduced-motion support
- Contact form that opens a pre-filled email draft in the visitor's email app

## Tech stack

- React 19 + TypeScript
- Vite
- Framer Motion
- Lucide React
- Custom CSS design tokens

## Run locally

```bash
git clone https://github.com/Vimal-5/portfolio.git
cd portfolio
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Personalise before deployment

1. **Projects:** Update `src/data/projects.ts` with verified repository and live-demo URLs. Until real URLs are added, the portfolio hides those action links rather than showing dead placeholders.
2. **Certificates:** Update `src/data/certifications.ts` with each real certificate verification URL. Certificate buttons appear only for valid HTTPS links.
3. **Skills:** Review `src/data/skills.ts` and keep the self-assessed percentages realistic and explainable in an interview.
4. **Resume:** Add the final PDF as `public/resume.pdf` before adding a download link to the interface.
5. **Contact:** The form currently validates input and opens a pre-filled `mailto:` draft. For direct delivery without relying on the visitor's email app, connect a trusted form backend or email service.
6. **Profiles:** Confirm that the GitHub and LinkedIn URLs point to the intended public profiles.

## Deployment

The app can be deployed to Vercel, Netlify, or another static hosting provider that supports Vite. Set the build command to `npm run build` and the output directory to `dist`.

---

Designed and built by Vimal V.
