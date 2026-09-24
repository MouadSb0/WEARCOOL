# WEARCOOL

> A modern, responsive e-commerce landing page for a contemporary fashion brand — built with Next.js and React.

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)

---

## Overview

**WEARCOOL** is a production-ready landing page that showcases a modern clothing store experience. It combines editorial fashion layouts with interactive shopping features to deliver a fast, accessible, and visually striking user interface.

The project is built on the Next.js App Router and leverages React for interactivity, Tailwind CSS for styling, and Material Symbols for iconography.

## Key Features

| Feature | Description |
| --- | --- |
| **Editorial Sections** | Magazine-style layouts highlighting seasonal trends and campaigns. |
| **Collection Navigation** | Structured browsing across product categories. |
| **Product Highlights** | Curated display of featured items. |
| **Wishlist Interactions** | Add or remove products from a personal wishlist. |
| **Shopping Bag Notifications** | Instant feedback when items are added to the bag. |
| **Responsive Design** | Optimized for mobile, tablet, and desktop breakpoints. |

## Technology Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| UI Library | [React](https://react.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) (via CDN) |
| Typography | [Google Fonts](https://fonts.google.com/) — Epilogue, Manrope |
| Icons | [Material Symbols](https://fonts.google.com/icons) |

## Getting Started

### Prerequisites

- **Node.js** `>= 18.x`
- **npm** `>= 9.x` (or `yarn` / `pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/wearcool.git
cd wearcool

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at **[http://localhost:3000](http://localhost:3000)**.

## Available Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Launch the development server with hot reload. |
| `npm run build` | Generate an optimized production build. |
| `npm run start` | Serve the production build locally. |
| `npm run lint` | Run the linter across the codebase. |

## Project Structure

```
wearcool/
├── app/                  # Next.js App Router
│   ├── components/       # Reusable UI components
│   ├── layout.js         # Root layout
│   └── page.js           # Landing page entry point
├── public/
│   └── imgs/             # Static image assets
├── index.html            # Reference markup & Tailwind configuration
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
└── README.md             # Project documentation
```

> **Note:** `index.html` is retained as the canonical reference for the original Tailwind configuration and static markup.

## Deployment

The recommended deployment target is **Vercel**, the platform built by the creators of Next.js. No additional configuration is required.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/wearcool)

For alternative hosting providers, run `npm run build` and serve the generated `.next` output using any Node.js-compatible environment.

## Contributing

Contributions are encouraged and appreciated. To propose a change:

1. Fork the repository.
2. Create a topic branch: `git checkout -b feature/your-feature`.
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/): `git commit -m "feat: add your feature"`.
4. Push the branch: `git push origin feature/your-feature`.
5. Open a Pull Request for review.

Please ensure your code passes linting before submitting a PR.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for full details.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Google Fonts](https://fonts.google.com/)
- [Material Symbols](https://fonts.google.com/icons)

---

<sub>Maintained with care by the WEARCOOL team.</sub>
```
