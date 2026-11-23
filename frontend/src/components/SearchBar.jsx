
import styles from "./SearchBar.module.css";

export default function SearchBar({
    searchQuery,
    onSearchChange,
}) {
    return (
        <div className={styles.searchContainer}>
            <label
                className={styles.searchLabel}
                htmlFor="lego-search"
            >
                Search LEGO sets
            </label>

            <div className={styles.searchInputWrapper}>
                <span
                    className={styles.searchIcon}
                    aria-hidden="true"
                >
                    ⌕
                </span>

                <input
                    id="lego-search"
                    type="search"
                    className={styles.searchInput}
                    placeholder="Search by name, category or set number..."
                    value={searchQuery}
                    onChange={(event) =>
                        onSearchChange(event.target.value)
                    }
                    data-testid="search"
                />
            </div>
        </div>
    );
}
