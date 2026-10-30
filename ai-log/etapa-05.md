# Stage 5 — AI Log

## Tools Used

- ChatGPT (OpenAI)

## Conversation

- [Add ChatGPT conversation share link]

## Key Requests

### 1. Implementing React State Management

**Request:** Help implement Stage 5 for BrickStore using React state to manage the LEGO inventory.

**AI response:** Suggested using the `useState()` hook to store the inventory and provided functions for updating availability and deleting LEGO sets.

**Adaptation:** Moved inventory management into React state in `App.jsx`, while preserving the existing `LegoCard` and `LegoList` components.

### 2. Updating and Deleting LEGO Sets

**Request:** Implement interactive controls for changing the availability of a LEGO set and removing it from the inventory.

**AI response:** Provided examples using `map()` to update an individual set and `filter()` to remove a set without modifying the original array.

**Adaptation:** Added an availability checkbox and a Delete button to each LEGO card. The inventory and available-set counters update automatically after each operation.

### 3. Debugging the Light/Dark Mode Switch

**Request:** Help identify why the Light/Dark Mode switch stopped working after introducing React state.

**AI response:** Identified that the `handleThemeToggle` function was declared outside the `App` component and therefore could not access its state variables.

**Adaptation:** Moved the function inside `App`, restoring the theme-switching functionality.

### 4. Expanding the LEGO Inventory

**Request:** Expand the BrickStore inventory from three LEGO sets to twelve, including additional product information.

**AI response:** Suggested separating the inventory data into `legoSets.js` and extending each object with fields such as category, number of pieces, price, description, and image paths.

**Adaptation:** Created a catalog containing twelve LEGO sets from multiple categories, while keeping the data separate from the React components.

### 5. Creating a Responsive LEGO Catalog

**Request:** Replace the vertical inventory list with a responsive three-column card layout while preserving the existing BrickStore design.

**AI response:** Provided CSS Grid styling and responsive breakpoints for desktop, tablet, and mobile layouts.

**Adaptation:** Updated `LegoCard.jsx` and `App.css` to display product information in a card-based catalog, preserving the pastel colors and glassmorphism-inspired styling.

### 6. Adding LEGO Product Images

**Request:** Help display locally stored LEGO product photographs and handle sets without available images.

**AI response:** Explained how Vite serves files from the `public/` directory and suggested using image paths based on LEGO set numbers, with placeholders for missing images.

**Adaptation:** Organized product images into individual folders and updated the card component to support image loading and fallback placeholders.

### 7. Implementing a Search Bar

**Request:** Add a search bar that filters LEGO sets by name, category, or set number.

**AI response:** Suggested creating a reusable `SearchBar.jsx` component with a controlled input and using `filter()` to display matching sets.

**Adaptation:** Integrated the search component into `App.jsx`, allowing users to search the inventory in real time without modifying the original data.

### 8. Improving Search Results

**Request:** Display the number of matching LEGO sets and distinguish between an empty inventory and a search with no results.

**AI response:** Suggested adding a dynamic results counter and passing an `isSearching` prop to `LegoList.jsx`.

**Adaptation:** Added the message `No LEGO sets match your search.` and a counter displaying the number of visible sets.

## What I Learned

- How `useState()` manages data in React components.
- How state updates trigger automatic interface rendering.
- How to update arrays immutably using `map()` and `filter()`.
- How to pass callback functions from parent components to child components.
- How controlled inputs work in React.
- How to implement real-time search functionality.
- How to use CSS Grid for responsive layouts.
- How to organize application data separately from UI components.
- How to serve local images from Vite's `public/` directory.
- How to debug React state and event-handler issues.

## Testing

- LEGO inventory renders twelve sets.
- Initial inventory counter displays 12 sets, 9 available.
- Availability checkbox updates the selected set.
- Delete button removes the selected set from the inventory.
- Inventory counters update after changes.
- Light/Dark Mode switch works correctly.
- Search by name, category, and set number works.
- Search results counter updates automatically.
- Searches without matches display the appropriate message.
- Available product images are displayed in the catalog.
- Sets without images display placeholders.
- Responsive layout: [record final mobile/tablet testing results].
- `npm run build`: built in 414ms.