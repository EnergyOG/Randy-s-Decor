# Randy Decor

A modern, responsive website for **Randy Decor** — an event decoration and styling business. Showcase services, portfolio, and booking in a clean, professional front-end built with React and Tailwind CSS.

---

## Features

- **Home** — Full-screen hero with image slideshow and clear call-to-action
- **About** — Company story, values, and team/service highlights
- **Gallery** — Pexels-style photo grid with category filters: Wedding, Marriage, Birthday, Funeral, Private Parties, Naming Ceremonies, Corporate Events
- **Shop** — Product or package offerings
- **Book Us** — Contact/booking flow for event inquiries

Responsive layout, smooth transitions, and a consistent yellow/gold accent theme tailored for an events brand.

---

## Tech Stack

| Area        | Tech |
|------------|------|
| Framework  | [React](https://react.dev/) 19 |
| Build      | [Vite](https://vite.dev/) 7 |
| Styling    | [Tailwind CSS](https://tailwindcss.com/) 4 |
| Routing    | [React Router](https://reactrouter.com/) 7 |
| Icons      | [Lucide React](https://lucide.dev/) |
| 3D (optional) | [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm or yarn

### Install & run

```bash
# Install dependencies
npm install

# Start dev server (with HMR)
npm run dev
```

Then open the URL shown in the terminal (e.g. `http://localhost:5173`).

### Other scripts

| Command         | Description              |
|----------------|--------------------------|
| `npm run build` | Production build (output in `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint`  | Run ESLint               |

---

## Project Structure

```
randy-decor/
├── src/
│   ├── App.jsx           # Routes and app shell
│   ├── main.jsx          # Entry point
│   ├── layouts/          # Root layout (e.g. nav + footer)
│   ├── pages/            # Home, About, Gallery, Shop, BookUs
│   ├── component/        # Reusable UI (e.g. NavBar)
│   └── assets/           # Images and static files
├── public/
├── package.json
└── README.md
```

---

## License

Private — Randy Decor client project.
