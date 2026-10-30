export default function SearchBar({ searchQuery, onSearchChange }) {
    return (
        <div className="search-container">
            <label htmlFor="lego-search" className="search-label">
                Search LEGO Sets
            </label>

            <div className="search-input-wrapper">
                <span className="search-icon" aria-hidden="true">
                    ⌕
                </span>

                <input
                    type="search"
                    id="lego-search"
                    className="search-input"
                    placeholder="Search by name, category or set number..."
                    value={searchQuery}
                    onChange={(event) =>
                        onSearchChange(event.target.value)
                    }
                />
            </div>
        </div>
    );
}