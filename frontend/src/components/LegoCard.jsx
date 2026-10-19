
const CONDITION_LABELS = {
    new: "New",
    used: "Used",
    sealed: "Sealed"
};

export default function LegoCard({ set }) {
    return (
        <li className={set.available ? "item-card" : "item-card done"}>
            <div className="item-info">
                <h3>{set.name}</h3>

                <p className="set-number">
                    Set {set.setNumber}
                </p>

                <span className={`badge badge-${set.condition}`}>
                    {CONDITION_LABELS[set.condition]}
                </span>
            </div>

            <span
                className={
                    set.available
                        ? "status status-available"
                        : "status status-unavailable"
                }
            >
                {set.available ? "Available" : "Unavailable"}
            </span>
        </li>
    );
}
