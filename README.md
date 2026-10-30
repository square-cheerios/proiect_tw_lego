# BrickStore

BrickStore is a web application for managing the inventory of a LEGO store.
It allows users to organize LEGO sets and keep track of their availability,
condition and category.

## Data model

The main entity managed by the application is a LEGO set.

| Field | Type | Notes |
|---|---|---|
| name | text | required, max 100 characters |
| available | boolean | indicates whether the set is currently available |
| condition | fixed values | New, Used, Sealed |
| category | relation | Star Wars, Technic, Architecture |
| user | relation | owner of the inventory item (used from Stage 11) |
| setNumber | text | official LEGO set number |
| price | number | price of the LEGO set |
| pieces | number | number of pieces in the set |

## Sample data

The following sample data will be used throughout the project:

1. Millennium Falcon 75192 — available — Sealed — Star Wars
2. Porsche 911 RSR 42096 — unavailable — Used — Technic
3. Great Pyramid of Giza 21058 — available — New — Architecture

## How to run

Open `index.html` in a browser.

No build step or server is required for Stage 1.

## AI usage

| Tool | Used for |
|---|---|
| ChatGPT | Assistance with project structure, HTML/CSS mockup, JavaScript data logic, validation, testing and documentation for Stages 1 and 2 |

[Details for each stage are available in the `ai-log/` folder](ai-log/).

## Status

- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript
- [ ] Stage 3: React application
- [ ] Stage 4: data-driven components
- [ ] Later stages: interaction, API, server, database, authentication and Docker

## Stage 1 checklist

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/README.md) | Read README |
| S1-R2 | AI usage section | [README.md#ai-usage](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/README.md#ai-usage) | Read AI usage section |
| S1-R3 | AI log for Stage 1 | [ai-log/etapa-01.md](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/ai-log/etapa-01.md) | Read AI log |
| S1-R4 | Header, form and 3 LEGO set cards | [index.html](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/index.html) | Open page |
| S1-R5 | Unavailable set has a different style | [style.css](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/style.css) | Check Porsche card |
| S1-R6 | Two columns on desktop, one under 700px | [style.css](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/style.css) | Resize browser below 700px |
| S1-R7 | Visible keyboard focus and readable dark theme | [style.css](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/style.css) | Use Tab and enable dark mode |
| S1-R8 | Stage 1 commit pushed | [d6017e6](https://github.com/square-cheerios/proiect_tw_lego/commit/d6017e6d47146ceb3ce7dcbacf5d9a1e7dabff3d) | Check commit history |

## Stage 2: Data Logic

Stage 2 introduces the data logic of the BrickStore application using plain
JavaScript, without DOM manipulation.

The `legoSets.js` file contains the LEGO set data and functions for:

- listing LEGO sets;
- counting available sets;
- searching sets;
- adding new sets with validation;
- toggling availability;
- deleting sets.

All functions follow an immutable approach and return new arrays instead of
modifying the original data.

Results and manual tests are displayed in the browser console (F12).

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

## Stage 2 checklist

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S2-R1 | JS file linked, logs on page load | [index.html - script](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/index.html#L211-L212) | Open the page and check the browser console (F12) |
| S2-R2 | 3+ items with id, name, state and tag | [legoSets.js - initial data](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/legoSets.js#L1-L32) | Check the initial `legoSets` array |
| S2-R3 | List, count, search, add, toggle and delete implemented | [legoSets.js - functions](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/legoSets.js#L41-L155) | Check the functions and console output |
| S2-R4 | Add rejects empty name and invalid condition | [legoSets.js - validation](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/legoSets.js#L95-L107) | Check the validation tests in the console |
| S2-R5 | Original array remains unchanged after add | [legoSets.js - immutability test](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/legoSets.js#L182-L201) | Check `Original still contains: 3 LEGO sets` in the console |
| S2-R6 | README Stage 2 section and AI log | [README.md](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/README.md#stage-2-data-logic), [ai-log/etapa-02.md](https://github.com/square-cheerios/proiect_tw_lego/blob/8cd16c6097a202f0575dfbfa03b3081d7f29b69b/ai-log/etapa-02.md) | Read the documentation files |
| S2-R7 | Stage 2 commit pushed | [Stage 2 commit](https://github.com/square-cheerios/proiect_tw_lego/commit/8cd16c6097a202f0575dfbfa03b3081d7f29b69b) | Check the GitHub commit history |

## Stage 3: Vite and React Project

BrickStore has been migrated from a static HTML/CSS/JavaScript application to a React application using Vite.

The original files from Stages 1 and 2 are preserved in the `mockup/` directory.

The LEGO inventory data is now defined in `frontend/src/App.jsx`. The application dynamically calculates the total number of LEGO sets and the number of available sets.

At this stage, inventory data is displayed as formatted JSON. Individual LEGO set cards will be implemented as reusable React components in Stage 4.

The original pastel design, floating LEGO bricks, glassmorphism effects and CSS-only Light/Dark switch have been preserved.

## How to Run

From the repository root:

```bash
cd frontend
npm install
npm run dev
```

Open the local address displayed in the terminal (usually `http://localhost:5174/`).

To verify the production build:

```bash
npm run build
```

## Project Status

- [x] Stage 1: Static HTML/CSS mockup
- [x] Stage 2: JavaScript data logic
- [x] Stage 3: Vite and React initialization
- [ ] Stage 4: Reusable React components

## AI Usage — Stage 3

ChatGPT was used to assist with setting up the Vite and React project, migrating the existing BrickStore interface to JSX, preserving the original CSS design, and preparing documentation.

The generated code was reviewed and tested locally.

## Stage 3 Checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S3-R1 | `npm run dev` starts without errors | [frontend/package.json](https://github.com/square-cheerios/proiect_tw_lego/blob/94814e0e828e1c15749ccde04c9dcc628d4d9d2a/frontend/package.json) | Run `npm install` and `npm run dev` |
| S3-R2 | App name and counter computed from data | [frontend/src/App.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/94814e0e828e1c15749ccde04c9dcc628d4d9d2a/frontend/src/App.jsx) | Change availability and save |
| S3-R3 | Original LEGO inventory data used | [frontend/src/App.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/94814e0e828e1c15749ccde04c9dcc628d4d9d2a/frontend/src/App.jsx) | Compare the data with README |
| S3-R4 | Stage 1 styles reused | [frontend/src/App.css](https://github.com/square-cheerios/proiect_tw_lego/blob/94814e0e828e1c15749ccde04c9dcc628d4d9d2a/frontend/src/App.css) | Inspect the application |
| S3-R5 | `node_modules` ignored and build passes | [frontend/.gitignore](https://github.com/square-cheerios/proiect_tw_lego/blob/94814e0e828e1c15749ccde04c9dcc628d4d9d2a/frontend/.gitignore) | Run `npm run build` |
| S3-R6 | README Stage 3 section and AI log | [README.md](https://github.com/square-cheerios/proiect_tw_lego/blob/94814e0e828e1c15749ccde04c9dcc628d4d9d2a/README.md#stage-3-checklist), [ai-log/etapa-03.md](https://github.com/square-cheerios/proiect_tw_lego/blob/94814e0e828e1c15749ccde04c9dcc628d4d9d2a/ai-log/etapa-03.md) | Read the documentation |
| S3-R7 | Stage 3 commit pushed | [Stage 3 commit](https://github.com/square-cheerios/proiect_tw_lego/commit/94814e0e828e1c15749ccde04c9dcc628d4d9d2a) | Check GitHub commit history |

## Stage 3: Vite and React Project

BrickStore has been migrated from a static HTML/CSS/JavaScript website to a React application using Vite.

The original files from Stages 1 and 2 are preserved in the `mockup/` directory.

The LEGO inventory data is now stored in `frontend/src/App.jsx`. The application automatically calculates the total number of LEGO sets and the number of available sets.

The inventory is temporarily displayed as formatted JSON. Reusable React components for displaying LEGO set cards will be introduced in Stage 4.

The original pastel design, floating LEGO bricks, glassmorphism effects and Light/Dark mode switch have been preserved.

### How to Run

From the repository root:

```bash
cd frontend
npm install
npm run dev
```

Open the local address displayed by Vite, usually `http://localhost:5173/`.

### Build Verification

```bash
npm run build
```

The production build was successfully tested using Vite v8.3.4.

### Project Status

- [x] Stage 1: Static HTML/CSS mockup
- [x] Stage 2: JavaScript data logic
- [x] Stage 3: Vite and React initialization
- [ ] Stage 4: Reusable React components



## Stage 4: React Components

In Stage 4, the LEGO inventory display was migrated from raw JSON to reusable React components.

Two components were created:

- **LegoCard.jsx** — displays an individual LEGO set, including its name, set number, condition and availability.
- **LegoList.jsx** — receives the inventory array through props and renders a LegoCard component for each set using `map()` and a unique `key`.

The components use conditional rendering to display an empty inventory message when no sets are available in the list.

LEGO cards also change their appearance depending on the availability status. Unavailable sets are displayed with reduced opacity and a strikethrough title.

The existing BrickStore design, including pastel colors, floating LEGO bricks and the Light/Dark mode switch, was preserved.

### Testing

- React components render the three initial LEGO sets.
- The inventory counter displays 3 sets, 2 available.
- The empty inventory case displays the appropriate message.
- Changing the availability of a set updates its visual status.
- No React errors or key warnings in the browser console.
- `npm run build` completes successfully.

### Project Status

- [x] Stage 1: Static HTML/CSS mockup
- [x] Stage 2: JavaScript data logic
- [x] Stage 3: Vite and React initialization
- [x] Stage 4: React components
- [ ] Stage 5: Next development stage


## Stage 4 Checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S4-R1 | LegoCard component receives data through props | [LegoCard.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/caef0e57cd832dadea47a3d5ca1e5b83f70c86f1/frontend/src/components/LegoCard.jsx) | Check the component props and displayed fields |
| S4-R2 | LegoList renders cards using map() and unique keys | [LegoList.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/caef0e57cd832dadea47a3d5ca1e5b83f70c86f1/frontend/src/components/LegoList.jsx) | Check `map()` and `key={set.id}` |
| S4-R3 | App passes inventory data to LegoList | [App.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/caef0e57cd832dadea47a3d5ca1e5b83f70c86f1/frontend/src/App.jsx) | Check the component import and props |
| S4-R4 | Empty inventory is handled | [LegoList.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/caef0e57cd832dadea47a3d5ca1e5b83f70c86f1/frontend/src/components/LegoList.jsx) | Replace the inventory array with `[]` |
| S4-R5 | Card appearance changes based on availability | [LegoCard.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/caef0e57cd832dadea47a3d5ca1e5b83f70c86f1/frontend/src/components/LegoCard.jsx) | Change `available` and inspect the card |
| S4-R6 | README and Stage 4 AI log updated | [README.md](https://github.com/square-cheerios/proiect_tw_lego/blob/caef0e57cd832dadea47a3d5ca1e5b83f70c86f1/README.md#stage-4-checklist), [etapa-04.md](https://github.com/square-cheerios/proiect_tw_lego/blob/caef0e57cd832dadea47a3d5ca1e5b83f70c86f1/ai-log/etapa-04.md) | Read the documentation |
| S4-R7 | Stage 4 commit pushed to GitHub | [Stage 4 commit](https://github.com/square-cheerios/proiect_tw_lego/commit/caef0e57cd832dadea47a3d5ca1e5b83f70c86f1) | Check GitHub commit history |


## Stage 5: React State and Interactive Inventory

In Stage 5, BrickStore was extended from a component-based LEGO inventory display into an interactive application using React state.

The inventory is managed through the `useState()` hook in `App.jsx`. Users can change the availability of individual LEGO sets and remove sets from the inventory.

Two main operations were implemented:

- **Availability toggle** — uses `map()` to update the selected LEGO set without mutating the original array.
- **Delete functionality** — uses `filter()` to remove a selected set from the inventory.

The inventory counter updates automatically whenever the state changes.

The initial inventory was also expanded from three to twelve LEGO sets. Product data was moved into `legoSets.js`, separating the inventory information from the React components.

Each LEGO set now includes additional information such as its category, set number, number of pieces, condition, availability, and price when available.

The original vertical inventory layout was replaced with a responsive card grid displaying three columns on desktop, two on tablets, and one on mobile devices.

Product images are stored locally in the `public/images/` directory, with individual folders organized by LEGO set number. Sets without available images display a placeholder.

A new component was introduced:

- **`SearchBar.jsx`** — provides a controlled search input that filters LEGO sets by name, category, or set number.

The application also displays the number of matching search results and an appropriate message when no sets match the search.

The existing BrickStore design, including pastel colors, floating LEGO bricks, glassmorphism-inspired elements, and the Light/Dark Mode switch, was preserved.

Inventory modifications are currently stored in React state and are reset when the page is refreshed.

### Testing

- Initial inventory renders twelve LEGO sets.
- Inventory counter displays 12 sets, 9 available.
- Availability checkbox updates the selected LEGO set.
- Delete button removes the selected set from the inventory.
- Inventory counters update automatically after state changes.
- Light/Dark Mode switch works correctly.
- Search by name, category, and set number returns matching sets.
- Search results counter updates dynamically.
- Searches without matching sets display an appropriate message.
- Available LEGO product images are displayed correctly.
- Sets without images display placeholders.
- Responsive layout: [record final testing results].
- `npm run lint`: [record result].
- `npm run build`: [record result].

### Project Status

- [x] Stage 1: Static HTML/CSS mockup
- [x] Stage 2: JavaScript data logic
- [x] Stage 3: Vite and React initialization
- [x] Stage 4: React components
- [x] Stage 5: React state and interactive inventory

## Stage 5 Checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S5-R1 | Inventory is managed using React state | [App.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/main/frontend/src/App.jsx) | Check `useState(INITIAL_LEGO_SETS)` |
| S5-R2 | Availability is updated immutably | [App.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/main/frontend/src/App.jsx) | Check `handleToggle()` and the use of `map()` |
| S5-R3 | LEGO sets can be deleted immutably | [App.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/main/frontend/src/App.jsx) | Check `handleDelete()` and the use of `filter()` |
| S5-R4 | Child components receive callback functions through props | [LegoCard.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/main/frontend/src/components/LegoCard.jsx), [LegoList.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/main/frontend/src/components/LegoList.jsx) | Check `onToggle`, `onDelete` and the corresponding event handlers |
| S5-R5 | Inventory counters update dynamically | [App.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/main/frontend/src/App.jsx) | Toggle or delete a set and check the counter |
| S5-R6 | Interactive inventory controls work correctly | [LegoCard.jsx](https://github.com/square-cheerios/proiect_tw_lego/blob/main/frontend/src/components/LegoCard.jsx) | Test the availability checkbox and Delete button |
| S5-R7 | README and Stage 5 AI log updated | [README.md](https://github.com/square-cheerios/proiect_tw_lego/blob/main/README.md), [etapa-05.md](https://github.com/square-cheerios/proiect_tw_lego/blob/main/ai-log/etapa-05.md) | Read the documentation |
| S5-R8 | Stage 5 commit pushed to GitHub | [Commit history](https://github.com/square-cheerios/proiect_tw_lego/commits/main/) | Check the Stage 5 commit in GitHub history |

### Additional Features

The following features were implemented beyond the basic React state requirements:

- Expanded inventory containing twelve LEGO sets.
- Separate inventory data file (`legoSets.js`).
- Responsive three-column LEGO catalog.
- Product photographs and fallback placeholders.
- Real-time search by name, category, and set number.
- Dynamic search results counter.
- Improved empty-search messaging.
- React-controlled Light/Dark Mode.

Individual LEGO set pages and React Router integration are planned for future development.