
import LegoCard from "./LegoCard.jsx";
import styles from "./LegoList.module.css";

export default function LegoList({
    legoSets,
    onToggle,
    onDelete,
    isSearching = false,
}) {
    if (legoSets.length === 0) {
        return (
            <p className={styles.empty} data-testid="empty">
                {isSearching
                    ? "No LEGO sets match your search."
                    : "No LEGO sets in the inventory."}
            </p>
        );
    }

    return (
        <ul className={styles.itemList}>
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
