const CONDITION_LABELS = {
    new: "New",
    used: "Used",
    sealed: "Sealed"
};

export default function LegoCard({ set, onToggle, onDelete }) {
    return (
        <li className={set.available ? "item-card" : "item-card done"}>

           <div className="lego-image-container">
    <img
        src={set.image}
        alt={`LEGO ${set.name}`}
        className="lego-image"
        onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.nextElementSibling.style.display = "flex";
        }}
    />

    <div
        className="lego-image-placeholder"
        style={{ display: "none" }}
    >
        <span>LEGO</span>
        <small>#{set.setNumber}</small>
    </div>
</div>

            {/* Set information */}
            <div className="item-info">
                <span className="lego-category">{set.category}</span>

                <h3>{set.name}</h3>

                <p className="set-number">Set #{set.setNumber}</p>

                <div className="lego-details">
                    <span>{set.pieces.toLocaleString("en-US")} pieces</span>

                    <span>
                        {set.price !== null
                            ? `$${set.price.toFixed(2)}`
                            : "Price unavailable"}
                    </span>
                </div>

                <span className={`badge badge-${set.condition}`}>
                    {CONDITION_LABELS[set.condition]}
                </span>
            </div>

            {/* Inventory actions */}
            <div className="item-actions">
                <label className="availability-control">
                    <input
                        type="checkbox"
                        checked={set.available}
                        onChange={() => onToggle(set.id)}
                    />
                    <span>
                        {set.available ? "Available" : "Unavailable"}
                    </span>
                </label>

                <button
                    type="button"
                    className="btn-danger"
                    onClick={() => onDelete(set.id)}
                    aria-label={`Delete ${set.name}`}
                >
                    Delete
                </button>
            </div>

        </li>
    );
}