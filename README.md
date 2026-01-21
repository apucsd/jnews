# JNews - Modern News Portal

A premium, responsive news portal built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project features a sophisticated layout with dynamic sliders and a clean, modern aesthetic inspired by high-end news platforms.

## 🚀 Live Demo

Check out the live deployment: [https://jnews-mu.vercel.app/](https://jnews-mu.vercel.app/)

## ✨ Key Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
- **Dynamic Sliders**: Integrated `react-slick` for high-performance content carousels, including a responsive Mini Slider (3 items on LG, 1 on Mobile).
- **Clean Component Architecture**: Modularized codebase with reusable UI components like `ArticleSlider`, `OpinionCard`, and `NewsSection`.
- **Modern Styling**: Styled with Tailwind CSS for a premium feel, featuring custom micro-animations and smooth transitions.
- **TypeScript**: Robust type safety across the entire application.

## 🛠️ Tech Stack

- **Core**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations/UI**: [React Icons](https://react-icons.github.io/react-icons/), [React Slick](https://react-slick.neostack.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn, pnpm, or npm

### Installation

1. Clone the repository:

    ```bash
    git clone <your-repository-url>
    cd jnews
    ```

2. Install dependencies:

    ```bash
    yarn install
    # or
    npm install
    ```

3. Run the development server:
    ```bash
    yarn dev
    # or
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```text
app/
├── components/          # Reusable UI components
│   ├── ArticleSlider.tsx
│   ├── MiniSlider.tsx
│   ├── MainSection.tsx
│   ├── NewsSection.tsx
│   └── ...
├── globals.css          # Global styles & Tailwind imports
├── layout.tsx           # Main layout configuration
└── page.tsx             # Homepage entry point
```

## 📜 Deployment

This project is configured for seamless deployment on Vercel.
