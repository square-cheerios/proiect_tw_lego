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
| ChatGPT | Planning the Stage 1 structure, adapting the existing LEGO database project to the course requirements, and assisting with the HTML/CSS mockup and documentation |

Details for each stage are available in the `ai-log/` folder.

## Status

- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript
- [ ] Stage 3: React application
- [ ] Stage 4: data-driven components
- [ ] Later stages: interaction, API, server, database, authentication and Docker

## Stage 1 checklist

| ID | Requirement | Where | How to check |
|---|---|---|---|
| S1-R1 | README: description, fields, sample data, how to run | README.md | Read README |
| S1-R2 | AI usage section | README.md | Read AI usage section |
| S1-R3 | AI log for Stage 1 | ai-log/etapa-01.md | Read AI log |
| S1-R4 | Header, form and 3 LEGO set cards | `index.html` | Open page |
| S1-R5 | Unavailable set has a different style | `style.css` | Check Porsche card |
| S1-R6 | Two columns on desktop, one under 700px | `style.css` | Resize browser below 700px |
| S1-R7 | Visible keyboard focus and readable dark theme | `style.css` | Use Tab and enable dark mode |
| S1-R8 | Stage 1 commit pushed | GitHub commit | Check commit history |
