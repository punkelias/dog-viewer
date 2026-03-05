# Dog Viewer

A React application for browsing dog breed images from the [Dog CEO API](https://dog.ceo/dog-api/). View random dog photos, click thumbnails to see them in the main view, and save your favorites.

## Tech Stack

- **React 19** – UI library
- **TypeScript** – Type safety
- **Vite 7** – Build tool and dev server
- **Bootstrap Icons** – Icon set (e.g. heart for favorites)
- **Dog CEO API** – Source of dog images

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

## Running Locally

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dog-viewer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── api/          # API fetch utilities
├── components/   # React components (Card, MainCard)
├── types/        # TypeScript type definitions
├── utils/        # Helper functions (breed parsing, etc.)
├── App.tsx       # Main app component
└── main.tsx      # Entry point
```
