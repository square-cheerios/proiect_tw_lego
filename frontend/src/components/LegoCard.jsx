const CONDITION_LABELS = {
    new: "New",
    used: "Used",
    sealed: "Sealed"
};

export default function LegoCard({ set, onToggle, onDelete }) {
    return (
        <li className={set.available ? "item-card" : "item-card done"}>

            <label className="item-main">
                <input
                    type="checkbox"
                    checked={set.available}
                    onChange={() => onToggle(set.id)}
                    aria-label={`Mark ${set.name} as ${set.available ? "unavailable" : "available"}`}
                />

                <div className="item-info">
                    <h3>{set.name}</h3>

                    <p className="set-number">
                        Set {set.setNumber}
                    </p>

                    <span className={`badge badge-${set.condition}`}>
                        {CONDITION_LABELS[set.condition]}
                    </span>
                </div>
            </label>

            <div className="item-actions">
                <span
                    className={
                        set.available
                            ? "status status-available"
                            : "status status-unavailable"
                    }
                >
                    {set.available ? "Available" : "Unavailable"}
                </span>

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