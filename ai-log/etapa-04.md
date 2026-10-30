# Stage 4 — AI Log

## Tools Used

- ChatGPT (OpenAI)

## Conversation

- https://chatgpt.com/share/6ad5e182-ad84-83ed-852a-99d976dd31ff

## Key Requests

### 1. Creating Reusable React Components

**Request:** Help implement Stage 4 for the BrickStore project using React components.

**AI response:** Suggested creating `LegoCard.jsx` and `LegoList.jsx`, using props to pass LEGO inventory data between components.

**Adaptation:** Replaced the JSON output from Stage 3 with reusable components while preserving the original LEGO inventory data.

### 2. Rendering LEGO Sets Dynamically

**Request:** Implement a list of LEGO sets using React and the existing inventory array.

**AI response:** Provided a `map()` implementation with `key={set.id}` and conditional rendering for an empty inventory.

**Adaptation:** Used the existing BrickStore data model and CSS classes to render each LEGO set.

### 3. Debugging Component Imports

**Request:** Resolve the error `Failed to resolve import "./components/LegoList.jsx"`.

**AI response:** Explained the expected folder structure and how to verify component filenames and import paths.

**Adaptation:** Corrected the project structure or import path so the application could render successfully.

### 4. Testing and Build Verification

**Request:** Help test the React components and resolve an npm build error.

**AI response:** Explained how to test the empty inventory, availability changes and React console warnings. Identified that `npm run build` must run from the `frontend/` directory.

**Adaptation:** Executed the build from the correct directory and confirmed that it completed successfully.

## What I Learned

- How React components can be reused.
- How props transfer data between components.
- How `map()` generates elements from an array.
- Why React requires unique keys.
- How conditional rendering works.
- How to debug import paths.
- How to test and build a React application.

## Testing

- Initial LEGO inventory rendered successfully.
- React console checked for errors.
- Production build completed successfully.