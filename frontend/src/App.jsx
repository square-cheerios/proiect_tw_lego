import { useState } from "react";
// =====================================================
// BRICKSTORE - STAGE 3
// =====================================================

// Initial LEGO inventory data from Stage 2
import LegoList from "./components/LegoList.jsx";

const INITIAL_LEGO_SETS = [
    {
        id: 1,
        name: "Millennium Falcon",
        available: true,
        condition: "sealed",
        category: "Star Wars",
        setNumber: "75192",
        price: 849.99,
        pieces: 7541
    },
    {
        id: 2,
        name: "Porsche 911 RSR",
        available: false,
        condition: "used",
        category: "Technic",
        setNumber: "42096",
        price: 149.99,
        pieces: 1580
    },
    {
        id: 3,
        name: "Great Pyramid of Giza",
        available: true,
        condition: "new",
        category: "Architecture",
        setNumber: "21058",
        price: 139.99,
        pieces: 1476
    }
];

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
    // Calculate the number of available LEGO sets
    const availableCount = legoSets.filter(
        (set) => set.available
    ).length;
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

                    {/* Stage 3: raw data display */}
                    <LegoList
                    legoSets={legoSets}
                    onToggle={handleToggle}
                    onDelete={handleDelete}
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
