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
| S1-R1 | README: description, fields, sample data, how to run | [README.md](README.md) | Read README |
| S1-R2 | AI usage section | [README.md#ai-usage](README.md#ai-usage) | Read AI usage section |
| S1-R3 | AI log for Stage 1 | [ai-log/etapa-01.md](ai-log/etapa-01.md) | Read AI log |
| S1-R4 | Header, form and 3 LEGO set cards | [index.html](index.html) | Open page |
| S1-R5 | Unavailable set has a different style | [style.css](style.css) | Check Porsche card |
| S1-R6 | Two columns on desktop, one under 700px | [style.css](style.css) | Resize browser below 700px |
| S1-R7 | Visible keyboard focus and readable dark theme | [style.css](style.css) | Use Tab and enable dark mode |
| S1-R8 | Stage 1 commit pushed | [d6017e6](https://github.com/square-cheerios/proiect_tw_lego/commit/d6017e6) | Check commit history |

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

|
