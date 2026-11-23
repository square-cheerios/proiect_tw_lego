
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./LegoCard.module.css";

const CONDITION_LABELS = {
    new: "New",
    used: "Used",
    sealed: "Sealed",
};

export default function LegoCard({ set, onToggle, onDelete }) {
    const [failedImage, setFailedImage] = useState(null);

    const hasImage =
        Boolean(set.image) && failedImage !== set.image;

    const productUrl = `/legoSets/${set.id}`;

    const conditionClass = {
        new: styles.badgeNew,
        used: styles.badgeUsed,
        sealed: styles.badgeSealed,
    }[set.condition];

    return (
        <li
            className={`${styles.itemCard} ${
                !set.available ? styles.done : ""
            }`}
            data-testid="item"
            data-id={set.id}
        >
            {/* Product image */}
            <Link
                to={productUrl}
                className={styles.imageLink}
                aria-label={`View ${set.name}`}
            >
                <div className={styles.imageContainer}>
                    {hasImage ? (
                        <img
                            className={styles.image}
                            src={set.image}
                            alt={set.name}
                            onError={() =>
                                setFailedImage(set.image)
                            }
                        />
                    ) : (
                        <div className={styles.imagePlaceholder}>
                            <span
                                className={styles.placeholderIcon}
                                aria-hidden="true"
                            >
                                ◈
                            </span>
                            <span>No image available</span>
                        </div>
                    )}
                </div>
            </Link>

            {/* Product information */}
            <div className={styles.itemInfo}>
                <span className={styles.category}>
                    {set.category}
                </span>

                <h3>
                    <Link
                        to={productUrl}
                        className={styles.titleLink}
                        data-testid="item-link"
                    >
                        {set.name}
                    </Link>
                </h3>

                <p className={styles.setNumber}>
                    Set #{set.setNumber}
                </p>

                <div className={styles.details}>
                    <span>
                        {Number(set.pieces).toLocaleString("en-US")} pieces
                    </span>

                    <span>
                        {set.price != null
                            ? `$${Number(set.price).toFixed(2)}`
                            : "Price unavailable"}
                    </span>
                </div>

                <span
                    className={`${styles.badge} ${
                        conditionClass || ""
                    }`}
                >
                    {CONDITION_LABELS[set.condition] || set.condition}
                </span>
            </div>

            {/* Inventory actions */}
            <div className={styles.itemActions}>
                <label className={styles.availabilityControl}>
                    <input
                        type="checkbox"
                        checked={Boolean(set.available)}
                        onChange={() => onToggle(set.id)}
                        data-testid="item-toggle"
                    />
                    <span>
                        {set.available
                            ? "Available"
                            : "Unavailable"}
                    </span>
                </label>

                <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={() => onDelete(set.id)}
                    aria-label={`Delete ${set.name}`}
                    data-testid="item-delete"
                >
                    Delete
                </button>
            </div>
        </li>
    );
}
