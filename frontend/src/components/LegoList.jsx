
import LegoCard from "./LegoCard.jsx";

export default function LegoList({ legoSets }) {
    if (legoSets.length === 0) {
        return (
            <p className="empty">
                No LEGO sets in the inventory.
            </p>
        );
    }

    return (
        <ul className="item-list">
            {legoSets.map((set) => (
                <LegoCard key={set.id} set={set} />
            ))}
        </ul>
    );
}
