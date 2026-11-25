# AI Log — Stage 9: Own Backend with Express

## Objective

Replace the existing json-server mock API with a custom Node.js and Express backend while preserving the functionality and appearance of the BrickStore frontend.

## AI assistance

AI assistance was used for:

- Understanding the Stage 9 laboratory requirements.
- Creating the backend project structure.
- Adapting the laboratory's REST API example to the BrickStore project.
- Implementing the five CRUD endpoints.
- Implementing server-side validation and field whitelisting.
- Configuring Express middleware, CORS and centralized error handling.
- Preparing PowerShell-compatible curl testing commands.
- Updating the frontend API module.
- Removing the json-server dependency.
- Resolving existing ESLint issues.
- Preparing project documentation.

## Implementation decisions

The existing LEGO inventory was transferred into `backend/src/data/initialLegoSets.json` to preserve product information, images, descriptions and building instructions.

The backend loads the initial inventory into memory and manages subsequent operations through Express routes.

The existing `/legoSets` endpoint and port 3001 were preserved to maintain compatibility with the React frontend.

Server-side validation was adapted to the LEGO data model, including mandatory fields, positive piece counts, non-negative prices, accepted product conditions, boolean availability and duplicate set numbers.

The backend uses separate `app.js` and `server.js` files.

## Problems encountered and solutions

### PowerShell URL variables

During PATCH testing, an uninitialized or incorrectly referenced ID variable resulted in a 404 response.

The issue was resolved by using the ID returned by the POST request and correctly initializing the PowerShell variable.

### Frontend API error handling

The common request function was updated to read the error message returned by Express and handle HTTP 204 responses without attempting to parse an empty JSON body.

### ESLint: unused CSS Module import

NotFoundPage.jsx imported a CSS Module without using its exported styles.

The component was updated to use CSS Module classes.

### ESLint: missing React Hook dependency

LegoDetails.jsx contained a useEffect dependency warning related to the image navigation function.

An initial useCallback solution produced a manual memoization lint error.

The final solution removed the unnecessary memoization and reorganized keyboard navigation inside the effect while preserving gallery functionality.

## Verification

The backend was started successfully and tested using curl.

The student verified:

- GET requests for the inventory and individual products.
- POST requests with valid and invalid data.
- PATCH requests.
- DELETE requests.
- HTTP status codes.
- Invalid and missing resource IDs.
- CORS response headers.
- Frontend connectivity.
- Removal of json-server.
- Successful ESLint execution.
- Successful production build.

## Final result

BrickStore now uses a custom Express REST API instead of json-server.

The existing React components, routing and inventory interface were preserved. Data remains in memory until permanent database persistence is implemented in Stage 10.