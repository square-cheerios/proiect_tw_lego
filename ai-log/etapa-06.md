# Stage 6 — AI Log

## Tools Used

- ChatGPT (OpenAI) — implementation guidance, code explanations, troubleshooting, and testing assistance.

## Conversation

- [Add the shared ChatGPT conversation link here]

## Key Requests

### 1. Setting Up the Mock REST API

**Request:** Help me implement Stage 6 of the BrickStore project using a mock REST API, following the laboratory requirements.

**AI response:** Suggested installing `json-server@0.17.4`, creating a `db.json` file, and configuring an npm script to run the API on port 3001.

**Adaptation:** Configured the mock API specifically for BrickStore, using the `legoSets` resource and the endpoint `http://localhost:3001/legoSets`.

### 2. Reusing the Existing LEGO Inventory

**Request:** I already have a `legoSets.js` file containing 12 LEGO sets. Can we use the existing data instead of creating the inventory again?

**AI response:** Explained the difference between JavaScript data and JSON, and provided a Node.js command to convert the existing `INITIAL_LEGO_SETS` array into a valid `db.json` file.

**Adaptation:** Generated `db.json` directly from the existing inventory, preserving all 12 LEGO sets, including their identifiers, names, descriptions, prices, availability, image paths, and instruction links. Verified that the resulting file contained 12 objects.

### 3. Starting and Verifying the API Server

**Request:** The API works. Should I leave the server running while continuing development?

**AI response:** Explained that the mock API and the React development server must run simultaneously in separate terminals.

**Adaptation:** Used `npm run api` for the API on port 3001 and `npm run dev` for the React application. Verified that the `/legoSets` endpoint returned the inventory data.

### 4. Fetching Inventory Data with React

**Request:** Help me continue the implementation and connect the React application to the API.

**AI response:** Proposed creating a dedicated `src/api.js` module using `fetch()`, `async/await`, and HTTP response validation. Explained how to use `useEffect()` and React state to load the inventory asynchronously.

**Adaptation:** Removed the direct import of `INITIAL_LEGO_SETS` from `App.jsx`, initialized the inventory as an empty array, and loaded the data from the API. Added loading and error states while preserving the existing BrickStore components and functionality.

### 5. Understanding Data Persistence

**Request:** The inventory appears correctly, but a deleted LEGO set reappears after refreshing the page. Is that expected?

**AI response:** Explained that Stage 6 only retrieves data from the API. Deleting a set or changing its availability modifies the local React state without updating `db.json`.

**Adaptation:** Kept the existing delete and availability toggle handlers as local state operations, without introducing persistent API modifications before the appropriate project stage.

### 6. Testing Loading and Error States

**Request:** Help me verify that the application handles delayed responses and API connection failures correctly.

**AI response:** Suggested stopping the API to test the error state, restarting it with a four-second delay to test the loading state, and inspecting HTTP requests through the browser's Network tab.

**Adaptation:** Tested the application under normal, delayed, and unavailable API conditions. Confirmed that the inventory loads correctly, the loading message appears during a delayed response, and an appropriate error message is displayed when the server is unavailable.

## What I Learned

- How a mock REST API can be created using `json-server` and a JSON database file.
- How API endpoints are generated from resources defined in `db.json`.
- The difference between importing local JavaScript data and retrieving data asynchronously through HTTP.
- How to use `fetch()`, `async`, and `await` to retrieve data from an API.
- Why checking `response.ok` is necessary when handling HTTP errors.
- How `useEffect()` can be used to load data when a React component mounts.
- How to manage loading, success, and error states with React's `useState`.
- Why asynchronous effects may require cleanup to prevent outdated requests from updating component state.
- How environment variables can be used to configure an API URL.
- The difference between temporary React state modifications and persistent changes to server-side data.
- How to inspect HTTP requests using browser developer tools.

## Testing

- Verified that `db.json` contains all 12 LEGO sets.
- Confirmed that `npm run api` starts the mock REST API successfully.
- Verified that `GET http://localhost:3001/legoSets` returns the inventory.
- Confirmed that React displays the 12 LEGO sets retrieved from the API.
- Tested searching, availability toggling, and deleting LEGO sets.
- Confirmed that refreshing the page restores the original inventory.
- Tested the loading state using a simulated four-second API delay.
- Tested error handling by stopping the API server and refreshing the application.
- Verified a successful HTTP `200 OK` response in the browser's Network tab.
- Confirmed that the existing light/dark mode remains functional.

## Conclusion

AI assistance was used to understand and implement asynchronous data loading in React, configure a mock REST API, and design appropriate testing scenarios.

The generated suggestions were adapted to the existing BrickStore project rather than replacing its architecture or interface. The final implementation preserves the application's previous functionality while introducing API-based inventory retrieval.

All implementation steps were tested locally, and the observed behavior was checked against the Stage 6 requirements.