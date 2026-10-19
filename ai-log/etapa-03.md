# Stage 3 — AI Log

## Tools Used

- ChatGPT (OpenAI)

## Conversation

- (https://chatgpt.com/share/6accc94e-a0c0-83eb-973b-3c33a78ef649)

## Key Requests

### 1. Checking Node.js and npm

**Request:** Help verify whether Node.js and npm are installed before starting Stage 3.

**AI response:** Provided terminal commands for checking Node.js and npm versions and explained the minimum requirements.

**Adaptation:** Verified that Node.js v24.21.0 and npm v11.19.0 were already installed, so no additional installation was necessary.

### 2. Creating the React and Vite Project

**Request:** Guide the migration of the existing BrickStore project to React using Vite.

**AI response:** Provided commands for creating the `frontend/` project, installing dependencies, configuring React and preserving the original files.

**Adaptation:** Moved the previous HTML, CSS and JavaScript files to `mockup/` and created the new React project in `frontend/`.

### 3. Migrating the Interface and Data

**Request:** Rewrite the BrickStore interface using JSX while preserving the original design.

**AI response:** Generated `App.jsx` with the LEGO inventory data, a calculated availability counter, a CSS-only theme switch and a JSON data display.

**Adaptation:** Reused the original CSS, including the floating LEGO bricks and pastel styling. The inventory cards were intentionally replaced with JSON output to meet Stage 3 requirements.

### 4. Debugging the Vite Application

**Request:** Resolve an import error after removing the Vite demonstration assets.

**AI response:** Identified outdated imports referencing deleted image files in `App.jsx`.

**Adaptation:** Replaced the demonstration component with the BrickStore component and verified that the application rendered successfully.

## What I Learned

- How Node.js and npm are used in a React development environment.
- How Vite initializes and runs a React application.
- How JSX differs from HTML.
- How `main.jsx` mounts the main React component.
- How to display values calculated from JavaScript data.
- Why development assets and generated build files should not be committed.
- How to diagnose missing imports and development-server errors.

## Testing

- Node.js and npm version checks: successful.
- React development server: started successfully.
- BrickStore interface: rendered successfully.
- LEGO inventory counter: displayed 3 sets, 2 available.
- Inventory data: displayed as formatted JSON.
- Production build: [complete after running `npm run build`].