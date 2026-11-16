
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import LegoList from "./components/LegoList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import AddLegoForm from "./components/AddLegoForm.jsx";
import LegoDetails from "./pages/LegoDetails.jsx";

import {
    fetchLegoSets,
    createLegoSet,
    updateLegoSet,
    deleteLegoSet
} from "./api.js";

// =====================================================
// BRICKSTORE - STAGE 7
// Main application with persistent CRUD operations
// =====================================================

function getInitialTheme() {
    const initialTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches
        ? "dark"
        : "light";

    document.documentElement.dataset.theme = initialTheme;

    return initialTheme;
}

export default function App() {

    // =================================================
    // REACT STATE
    // =================================================

    const [legoSets, setLegoSets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState(null);
    const [actionError, setActionError] = useState(null);

    const [theme, setTheme] = useState(getInitialTheme);
    const [searchQuery, setSearchQuery] = useState("");
    const [showAddForm, setShowAddForm] = useState(false);

    // =================================================
    // LOAD INVENTORY FROM API
    // =================================================

    useEffect(() => {
        let ignore = false;

        async function loadLegoSets() {
            try {
                const data = await fetchLegoSets();

                if (!ignore) {
                    setLegoSets(data);
                    setLoadError(null);
                }
            } catch (err) {
                if (!ignore) {
                    setLoadError(err.message);
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        }

        loadLegoSets();

        return () => {
            ignore = true;
        };
    }, []);

    // =================================================
    // INVENTORY STATISTICS AND SEARCH
    // =================================================

    const availableCount = legoSets.filter(
        (set) => set.available
    ).length;

    const filteredSets = legoSets.filter((set) => {
        const query = searchQuery.toLowerCase().trim();

        return (
            set.name.toLowerCase().includes(query) ||
            set.category.toLowerCase().includes(query) ||
            String(set.setNumber).includes(query)
        );
    });

    // =================================================
    // CRUD OPERATIONS
    // =================================================

    // POST - Add a new LEGO set
    async function handleAdd(newSet) {
        // The server generates the ID.
        // Update React state only after POST succeeds.
        const createdSet = await createLegoSet(newSet);

        setLegoSets((prev) => [...prev, createdSet]);

        setActionError(null);
        setSearchQuery("");
        setShowAddForm(false);
    }

    // PATCH - Update availability
    async function handleToggle(id) {
        const legoSet = legoSets.find(
            (set) => String(set.id) === String(id)
        );

        if (!legoSet) {
            return;
        }

        setActionError(null);

        try {
            const updatedSet = await updateLegoSet(id, {
                available: !legoSet.available
            });

            // Use the object returned by the server
            setLegoSets((prev) =>
                prev.map((set) =>
                    String(set.id) === String(id)
                        ? updatedSet
                        : set
                )
            );
        } catch (err) {
            setActionError(
                `Could not update availability: ${err.message}`
            );
        }
    }

    // DELETE - Remove a LEGO set
    async function handleDelete(id) {
        setActionError(null);

        try {
            await deleteLegoSet(id);

            // Remove only after server confirmation
            setLegoSets((prev) =>
                prev.filter(
                    (set) => String(set.id) !== String(id)
                )
            );
        } catch (err) {
            setActionError(
                `Could not delete LEGO set: ${err.message}`
            );
        }
    }

    // =================================================
    // THEME SWITCH
    // =================================================

    function handleThemeToggle() {
        const newTheme = theme === "dark" ? "light" : "dark";

        setTheme(newTheme);
        document.documentElement.dataset.theme = newTheme;
    }

    // =================================================
    // APPLICATION INTERFACE
    // =================================================

    return (
        <>
            {/* =========================================
                HEADER
               ========================================= */}

            <header className="app-header">

                {/* Light / Dark Mode */}
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
                    <span
                        className="theme-icon sun"
                        aria-hidden="true"
                    >
                        ☀
                    </span>

                    <span className="switch-track">
                        <span className="switch-thumb"></span>
                    </span>

                    <span
                        className="theme-icon moon"
                        aria-hidden="true"
                    >
                        ☾
                    </span>
                </button>

                {/* Floating LEGO bricks */}
                <div
                    className="floating-bricks"
                    aria-hidden="true"
                >
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
                        {legoSets.length} sets,{" "}
                        {availableCount} available
                    </p>

                </div>
            </header>

            {/* =========================================
                ROUTING
               ========================================= */}

            <Routes>

                {/* =====================================
                    INVENTORY PAGE
                   ===================================== */}

                <Route
                    path="/"
                    element={
                        <main className="container">

                            <section className="panel inventory-panel">

                                {/* Inventory heading */}
                                <div className="inventory-heading">

                                    <h2>LEGO Inventory</h2>

                                    <button
                                        type="button"
                                        className="add-lego-button"
                                        onClick={() =>
                                            setShowAddForm(
                                                (prev) => !prev
                                            )
                                        }
                                        disabled={
                                            loading || Boolean(loadError)
                                        }
                                    >
                                        {showAddForm
                                            ? "✕ Cancel"
                                            : "+ Add LEGO Set"}
                                    </button>

                                </div>

                                {/* Add LEGO form */}
                                {showAddForm && (
                                    <AddLegoForm
                                        onAdd={handleAdd}
                                        existingSets={legoSets}
                                    />
                                )}

                                {/* Search */}
                                <SearchBar
                                    searchQuery={searchQuery}
                                    onSearchChange={setSearchQuery}
                                />

                                <p className="search-results-count">
                                    Showing {filteredSets.length} of{" "}
                                    {legoSets.length} sets
                                </p>

                                {/* Loading state */}
                                {loading && (
                                    <p
                                        className="info"
                                        data-testid="loading"
                                    >
                                        Loading LEGO sets...
                                    </p>
                                )}

                                {/* Initial loading error */}
                                {loadError && (
                                    <p
                                        className="error"
                                        data-testid="error"
                                        role="alert"
                                    >
                                        Could not load LEGO sets:{" "}
                                        {loadError}.
                                        Is the API running? Start it
                                        with <code>npm run api</code>.
                                    </p>
                                )}

                                {/* CRUD operation error */}
                                {actionError && (
                                    <p
                                        className="error"
                                        data-testid="error"
                                        role="alert"
                                    >
                                        {actionError}
                                    </p>
                                )}

                                {/* LEGO inventory */}
                                {!loading && !loadError && (
                                    <LegoList
                                        legoSets={filteredSets}
                                        onToggle={handleToggle}
                                        onDelete={handleDelete}
                                        isSearching={
                                            searchQuery.trim().length > 0
                                        }
                                    />
                                )}

                            </section>

                        </main>
                    }
                />

                {/* =====================================
                    INDIVIDUAL LEGO SET PAGE
                   ===================================== */}

                <Route
                    path="/lego/:setNumber"
                    element={
                        <LegoDetails
                            legoSets={legoSets}
                            loading={loading}
                            error={loadError}
                        />
                    }
                />

            </Routes>

            {/* =========================================
                FOOTER
               ========================================= */}

            <footer className="app-footer">
                Web Technologies Project · BrickStore
            </footer>
        </>
    );
}
