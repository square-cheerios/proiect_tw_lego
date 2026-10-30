import LegoCard from "./LegoCard.jsx";

export default function LegoList({
    legoSets,
    onToggle,
    onDelete,
    isSearching = false
}) {
    if (legoSets.length === 0) {
        return (
            <p className="empty">
                {isSearching
                    ? "No LEGO sets match your search."
                    : "No LEGO sets in the inventory."}
            </p>
        );
    }

    return (
        <ul className="item-list">
            {legoSets.map((set) => (
                <LegoCard
                    key={set.id}
                    set={set}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}