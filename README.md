# 🚀 Engineering Portfolio

A sleek, modern, and data-driven portfolio website built for **myself**.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [Lucide React](https://lucide.dev/) for icons
- **Deployment:** [Vercel](https://vercel.com/)

## 📂 Project Structure

The project follows a modular structure for easy maintenance and updates:

- **`app/`**: The core of the application.
  - **`components/`**: Reusable UI elements like `PCBBackground`, `ExperienceCard`, and `SocialIcon`.
  - **`data/`**: contains `portfolio.ts`, the single source of truth for all content (projects, experience, etc.).
  - **`sections/`**: Individual sections of the single-page layout (Hero, Projects, Education, etc.).
- **`public/`**: Static assets including the CV/Resume and SVG icons.

## ✨ Key Features

- **🎨 Technical Aesthetic:** Features a custom SVG-based PCB background that reacts to the theme.
- **📱 Fully Responsive:** Optimized for all screen sizes from mobile to ultra-wide monitors.
- **📄 Data-Driven:** Easily update content by modifying a single TypeScript file.
- **⚡ Performance:** Leveraging Next.js 15 for lightning-fast load times and SEO optimization.
- **🛠️ Portfolio Categories:** Showcases projects, certifications, experience and education.

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Updating Content

To update the information on the site, simply edit the `app/data/portfolio.ts` file. This file exports all the data structures used throughout the application.

---
Developed by [Warren SJ](https://github.com/Warren-SJ) 🛠️
