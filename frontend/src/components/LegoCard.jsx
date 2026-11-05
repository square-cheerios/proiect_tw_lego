
import { useState } from "react";
import { Link } from "react-router-dom";

const CONDITION_LABELS = {
    new: "New",
    used: "Used",
    sealed: "Sealed"
};

export default function LegoCard({ set, onToggle, onDelete }) {
    const [failedImage, setFailedImage] = useState(null);

    const hasImage =
        Boolean(set.image) && failedImage !== set.image;

    const productUrl = `/lego/${set.setNumber}`;

    return (
        <li className={set.available ? "item-card" : "item-card done"}>

            {/* Clickable product image */}
            <Link
                to={productUrl}
                className="lego-card-image-link"
                aria-label={`View details for ${set.name}`}
            >
                <div className="lego-image-container">
                    {hasImage ? (
                        <img
                            className="lego-image"
                            src={set.image}
                            alt={set.name}
                            onError={() => setFailedImage(set.image)}
                        />
                    ) : (
                        <div className="lego-image-placeholder">
                            <span
                                className="placeholder-icon"
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
            <div className="item-info">

                <span className="lego-category">
                    {set.category}
                </span>

                <h3>
                    <Link
                        to={productUrl}
                        className="lego-card-title-link"
                    >
                        {set.name}
                    </Link>
                </h3>

                <p className="set-number">
                    Set #{set.setNumber}
                </p>

                <div className="lego-details">
                    <span>
                        {set.pieces.toLocaleString("en-US")} pieces
                    </span>

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
                        {set.available
                            ? "Available"
                            : "Unavailable"}
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
