
# AI Log - Stage 7: Form and Validation

## AI Tool Used
ChatGPT (OpenAI)

## Purpose
AI assistance was used to adapt the existing BrickStore
application to the requirements of Stage 7.

## Tasks Completed with AI Assistance

1. Extended `api.js` with a reusable HTTP request function
   and GET, POST, PATCH, DELETE operations.

2. Updated `AddLegoForm.jsx` to support:
   - Controlled form inputs
   - Client-side validation
   - Asynchronous submission
   - Error handling
   - Prevention of duplicate submissions
   - Preservation of input values after failed requests

3. Updated `App.jsx` to connect inventory actions
   to the JSON Server API.

4. Added automated testing attributes to
   `LegoCard.jsx`, `LegoList.jsx`, and the form.

5. Created `tw.json` for automated verification.

## Manual Testing

The following tests were performed:
- Form validation with missing required fields
- Successful creation of a LEGO set
- Persistence of new sets after page refresh
- Updating availability using PATCH
- Deleting sets using DELETE
- Error handling when the API is unavailable
- Disabled submit button during delayed requests
- Verification of data-testid attributes

## AI Contribution

AI provided code suggestions, explanations, and
implementation guidance.

The generated code was reviewed, integrated, and
tested manually in the BrickStore application.
