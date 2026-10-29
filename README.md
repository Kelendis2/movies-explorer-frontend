# Movies Explorer

A React application for discovering movies and building a personal collection of favorites. Search for movies by title, filter short films, and save the ones you want to watch.

## Project Links

- [Frontend](https://savemovies.kelendis.nomoredomainsicu.ru/)
- [Backend API](https://api.movies.kelendis.nomoreparties.co/)
- [Figma Design](https://www.figma.com/file/ZvBZ4z3cLJZeaeDg5RceJF/dark-5?type=design&node-id=891%3A3857&mode=design&t=NWxfsMNRU00jCQpC-1)
- [Pull Requests](https://github.com/Kelendis2/movies-explorer-frontend/pulls)

## Features

- User registration and login with JWT authentication.
- Protected routes for authenticated users.
- Movie search by Russian and English titles.
- Short film filter for movies up to 40 minutes long.
- Personal collection of saved movies.
- Adding and removing movies from favorites.
- Profile editing, including name and email.
- Search query, filter settings, and results saved in local storage.
- Responsive movie grid with a “Show more” button.
- Loading indicators and feedback for account actions.

## Technologies

- **React 18** — component-based user interface.
- **React Router 6** — navigation and protected routes.
- **JavaScript (ES6+)** — application logic.
- **HTML5 and CSS3** — page structure and styling.
- **React Hooks and Context** — state management and user data.
- **Fetch API, Promises, and async/await** — communication with REST APIs.
- **Local Storage** — authentication token and search preferences.
- **Create React App** — development and production builds.
- **ESLint** — code linting.

## Getting Started

### Prerequisites

Install Node.js and npm.

### Installation

Clone the repository:

```bash
git clone https://github.com/Kelendis2/movies-explorer-frontend.git
cd movies-explorer-frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application runs at http://localhost:3000.

## Available Scripts

| Command | Description |
| ------- | ----------- |
| `npm start` | Starts the development server. |
| `npm run build` | Creates a production build in the `build` directory. |
| `npm test` | Starts the test runner in watch mode. |

## Project Structure

```text
src/
├── components/   # UI components and application pages
├── contexts/     # Shared user context
├── images/       # Images and icons
├── utils/        # API clients and constants
├── vendor/       # Fonts and CSS reset
├── index.css     # Global styles
└── index.js      # Application entry point
```

## Design

The interface follows the linked Figma design and includes a landing page, movie search, saved movies, a user profile, registration and login forms, and a 404 page.
