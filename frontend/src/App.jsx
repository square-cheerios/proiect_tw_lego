import { useState } from "react";
// =====================================================
// BRICKSTORE - STAGE 3
// =====================================================

// Initial LEGO inventory data from Stage 2
import LegoList from "./components/LegoList.jsx";
import { INITIAL_LEGO_SETS } from "./data/legoSets.js";


import SearchBar from "./components/SearchBar.jsx";
// =====================================================
// MAIN REACT COMPONENT
// =====================================================
// Detect the system's preferred color scheme
function getInitialTheme() {
    const initialTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches ? "dark" : "light";

    document.documentElement.dataset.theme = initialTheme;

    return initialTheme;
}

export default function App() {
        const [legoSets, setLegoSets] = useState(INITIAL_LEGO_SETS);
        const [theme, setTheme] = useState(getInitialTheme);
        const [searchQuery, setSearchQuery] = useState("");
    // Calculate the number of available LEGO sets
    const availableCount = legoSets.filter(
        (set) => set.available
    ).length;

    const filteredSets = legoSets.filter((set) => {
    const query = searchQuery.toLowerCase().trim();

    return (
        set.name.toLowerCase().includes(query) ||
        set.category.toLowerCase().includes(query) ||
        set.setNumber.includes(query)
    );
});
    function handleToggle(id) {
    setLegoSets((prev) =>
        prev.map((set) =>
            set.id === id
                ? { ...set, available: !set.available }
                : set
        )
    );
}

function handleDelete(id) {
    setLegoSets((prev) =>
        prev.filter((set) => set.id !== id)
    );
}
    return (
        <>
            

            {/* Header */}
            <header className="app-header">

                {/* Stage 5: React-controlled theme switch */}
                <button
                    type="button"
                    className="theme-switch"
                    onClick={handleThemeToggle}
                    aria-label={
                        theme === "dark"
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                    }
                    aria-pressed={theme === "dark"}
                    title="Switch theme"
                >
                    <span className="theme-icon sun" aria-hidden="true">
                        ☀
                    </span>

                    <span className="switch-track">
                        <span className="switch-thumb"></span>
                    </span>

                    <span className="theme-icon moon" aria-hidden="true">
                        ☾
                    </span>
                </button>

                {/* Floating LEGO bricks */}
                <div className="floating-bricks" aria-hidden="true">
                    <span className="brick brick-1"></span>
                    <span className="brick brick-2"></span>
                    <span className="brick brick-3"></span>
                    <span className="brick brick-4"></span>
                    <span className="brick brick-5"></span>
                    <span className="brick brick-6"></span>
                </div>

                {/* Header content */}
                <div className="header-content">

                    <h1>BrickStore</h1>

                    <p className="header-description">
                        Manage your LEGO store inventory
                    </p>

                    <p className="app-count">
                        {legoSets.length} sets, {availableCount} available
                    </p>

                </div>
            </header>

            {/* Main content */}
            <main className="container">

                <section className="panel inventory-panel">

            <h2>LEGO Inventory</h2>

            <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />
            <p className="search-results-count">
                Showing {filteredSets.length} of {legoSets.length} sets
            </p>
            
            <LegoList
                legoSets={filteredSets}
                onToggle={handleToggle}
                onDelete={handleDelete}
                isSearching={searchQuery.trim().length > 0}
            />

        </section>

            </main>

            {/* Footer */}
            <footer className="app-footer">
                Web Technologies Project · BrickStore
            </footer>
        </>
    );

    function handleThemeToggle() {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
}

}
