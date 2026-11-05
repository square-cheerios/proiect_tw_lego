// API configuration
export const API_URL =
    import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Fetch LEGO sets from the API
export async function fetchLegoSets() {
    const res = await fetch(`${API_URL}/legoSets`);

    if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
    }

    return res.json();
}