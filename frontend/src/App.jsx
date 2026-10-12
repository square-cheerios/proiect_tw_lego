// =====================================================
// BRICKSTORE - STAGE 3
// =====================================================

// Initial LEGO inventory data from Stage 2

const legoSets = [
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

export default function App() {

    // Calculate the number of available LEGO sets
    const availableCount = legoSets.filter(
        (set) => set.available
    ).length;

    return (
        <>
            {/* Light / Dark mode toggle */}
            <input
                type="checkbox"
                id="theme-toggle"
                className="theme-checkbox"
                aria-label="Switch between light and dark mode"
            />

            {/* Header */}
            <header className="app-header">

                {/* Theme switch */}
                <label
                    htmlFor="theme-toggle"
                    className="theme-switch"
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
                </label>

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
                    <pre className="json-data">
                        {JSON.stringify(legoSets, null, 2)}
                    </pre>

                </section>

            </main>

            {/* Footer */}
            <footer className="app-footer">
                Web Technologies Project · BrickStore
            </footer>
        </>
    );
}