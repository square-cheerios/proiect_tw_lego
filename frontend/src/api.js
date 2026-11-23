
/* =====================================================
   BRICKSTORE - STAGE 7
   API configuration and CRUD operations
   ===================================================== */

// API configuration
export const API_URL =
    import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Common function for all HTTP requests
async function request(path, options = {}) {
    const res = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        }
    });

    // Handle unsuccessful HTTP responses
    if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
    }

    // Handle responses without a body
    if (res.status === 204) {
        return null;
    }

    return res.json();
}

// =====================================================
// GET - Fetch all LEGO sets
// =====================================================

export function fetchLegoSets() {
    return request("/legoSets");
}

// =====================================================
// POST - Create a new LEGO set
// =====================================================

export function createLegoSet(legoSet) {
    return request("/legoSets", {
        method: "POST",
        body: JSON.stringify(legoSet)
    });
}

// =====================================================
// PATCH - Update an existing LEGO set
// =====================================================

export function updateLegoSet(id, changes) {
    return request(`/legoSets/${id}`, {
        method: "PATCH",
        body: JSON.stringify(changes)
    });
}

// =====================================================
// DELETE - Remove a LEGO set
// =====================================================

export function deleteLegoSet(id) {
    return request(`/legoSets/${id}`, {
        method: "DELETE"
    });
}

export function fetchLegoSet(id) {
  return request(`/legoSets/${encodeURIComponent(id)}`);
}
