# Stage 2: AI log

## Tools

- ChatGPT

## Conversations

- <SHARE LINK TO THIS CONVERSATION> — Stage 2 JavaScript data logic,
  validation, console tests and documentation

## Key requests

### 1. Adapting Stage 2 to the BrickStore project

- Asked: How the requirements of Stage 2 could be implemented for the
  existing LEGO inventory project.
- Got: A JavaScript data model based on an array of LEGO set objects,
  together with functions adapted to the BrickStore theme.
- Changed or rejected: The generic TaskFlow examples were replaced with
  LEGO-specific names, fields and sample data while keeping the required
  functionality.

### 2. Implementing immutable data operations

- Asked: Help implementing the required JavaScript functions.
- Got: Functions for listing, counting, searching, adding, toggling and
  deleting LEGO sets using map, filter and reduce.
- Changed or rejected: The functions were kept separate from the HTML
  interface because Stage 2 does not require DOM manipulation.

### 3. Validation and testing

- Asked: Make sure the implementation satisfies the Stage 2 requirements.
- Got: Validation for empty names and invalid conditions, together with
  console tests for the main operations and immutability.
- Changed or rejected: Additional validation was included for LEGO-specific
  fields such as price and number of pieces.

## What I learned / what did not work

I learned how JavaScript arrays of objects can represent application data and
how methods such as map, filter and reduce can be used without modifying the
original array. I also learned why immutable operations are important for the
later React stages. Console tests helped verify the application logic
independently from the user interface.