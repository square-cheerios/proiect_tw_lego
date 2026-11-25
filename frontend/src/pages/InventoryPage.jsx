
import { useEffect, useState } from "react";

import LegoList from "../components/LegoList.jsx";
import SearchBar from "../components/SearchBar.jsx";
import AddLegoForm from "../components/AddLegoForm.jsx";

import styles from "./InventoryPage.module.css";

import {
  fetchLegoSets,
  createLegoSet,
  updateLegoSet,
  deleteLegoSet,
} from "../api.js";

export default function InventoryPage() {
  const [legoSets, setLegoSets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [actionError, setActionError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Stage 7 fix: the form is visible by default
  const [showAddForm, setShowAddForm] = useState(true);

  // =========================================
  // LOAD INVENTORY FROM API
  // =========================================

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

  // =========================================
  // INVENTORY STATISTICS AND SEARCH
  // =========================================

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

  // =========================================
  // CRUD OPERATIONS
  // =========================================

  // POST - Add a LEGO set
  async function handleAdd(newSet) {
    const createdSet = await createLegoSet(newSet);

    setLegoSets((prev) => [...prev, createdSet]);

    setActionError(null);
    setSearchQuery("");

    // Keep the form visible after successful saving.
    // AddLegoForm resets its fields after await onAdd().
  }

  // PATCH - Update availability
  async function handleToggle(id) {
    const legoSet = legoSets.find(
      (set) => String(set.id) === String(id)
    );

    if (!legoSet) return;

    setActionError(null);

    try {
      const updatedSet = await updateLegoSet(id, {
        available: !legoSet.available,
      });

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

  // =========================================
  // APPLICATION INTERFACE
  // =========================================

  return (
    <main className="container">
      <section className="panel inventory-panel">

        {/* Inventory heading */}
        <div className={styles.inventoryHeading}>
          <h2>LEGO Inventory</h2>

          <button
            type="button"
            className={styles.addLegoButton}
            onClick={() =>
              setShowAddForm((prev) => !prev)
            }
            disabled={loading || Boolean(loadError)}
          >
            {showAddForm
              ? "✕ Cancel"
              : "+ Add LEGO Set"}
          </button>
        </div>

        {/* Inventory statistics */}
        <p className={styles.appCount}>
          {legoSets.length} sets,{" "}
          {availableCount} available
        </p>

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

        <p className={styles.searchResultsCount}>
          Showing {filteredSets.length} of{" "}
          {legoSets.length} sets
        </p>

        {/* Loading state */}
        {loading && (
          <p
            className={styles.info}
            data-testid="loading"
          >
            Loading LEGO sets...
          </p>
        )}

        {/* Initial loading error */}
        {loadError && (
          <p
            className={styles.error}
            data-testid="error"
            role="alert"
          >
            Could not load LEGO sets: {loadError}.
            Is the API running? Start it with{" "}
            <code>npm run api</code>.
          </p>
        )}

        {/* CRUD operation error */}
        {actionError && (
          <p
            className={styles.error}
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
  );
}
