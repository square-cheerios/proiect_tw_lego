
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CONDITION_LABELS = {
    new: "New",
    used: "Used",
    sealed: "Sealed"
};

export default function LegoDetails({ legoSets, loading, error }) {
    const { setNumber } = useParams();

    const legoSet = legoSets.find(
        (set) => String(set.setNumber) === setNumber
    );

    if (loading) {
        return (
            <main className="container">
                <p className="info">Loading LEGO set...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="container">
                <section className="panel">
                    <p className="error">
                        Could not load LEGO set: {error}
                    </p>
                    <Link to="/">← Back to Inventory</Link>
                </section>
            </main>
        );
    }

    if (!legoSet) {
        return (
            <main className="container">
                <section className="panel">
                    <h2>LEGO Set Not Found</h2>
                    <p>This set is not in your current inventory.</p>
                    <Link to="/">← Back to Inventory</Link>
                </section>
            </main>
        );
    }

    return (
        <LegoProduct
            key={legoSet.setNumber}
            legoSet={legoSet}
        />
    );
}

function LegoProduct({ legoSet }) {
    const images = [
        ...new Set(
            [legoSet.image, ...(legoSet.images || [])].filter(Boolean)
        )
    ];

    const [activeImage, setActiveImage] = useState(0);
    const [failedImages, setFailedImages] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const availableImages = images.filter(
        (image) => !failedImages.includes(image)
    );

    const safeIndex = Math.min(
        activeImage,
        Math.max(availableImages.length - 1, 0)
    );

    const currentImage = availableImages[safeIndex];

    function markImageFailed(image) {
        setFailedImages((prev) =>
            prev.includes(image) ? prev : [...prev, image]
        );
    }

    function changeImage(direction) {
        if (availableImages.length === 0) return;

        setActiveImage((prev) =>
            (Math.min(prev, availableImages.length - 1) +
                direction +
                availableImages.length) % availableImages.length
        );
    }

    useEffect(() => {
        if (!lightboxOpen) return;

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setLightboxOpen(false);
            }

            if (event.key === "ArrowRight") {
                changeImage(1);
            }

            if (event.key === "ArrowLeft") {
                changeImage(-1);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [lightboxOpen, availableImages.length]);

    return (
        <main className="container">
            <section className="panel lego-details-page">

                <Link to="/" className="back-to-inventory">
                    ← Back to Inventory
                </Link>

                <div className="lego-product-layout">

                    {/* PRODUCT GALLERY */}
                    <div className="lego-gallery">

                        <button
                            type="button"
                            className="lego-gallery-main"
                            onClick={() =>
                                currentImage && setLightboxOpen(true)
                            }
                            disabled={!currentImage}
                            aria-label="Enlarge product image"
                        >
                            {currentImage ? (
                                <img
                                    src={currentImage}
                                    alt={legoSet.name}
                                    onError={() =>
                                        markImageFailed(currentImage)
                                    }
                                />
                            ) : (
                                <div className="lego-image-placeholder">
                                    <span className="placeholder-icon">
                                        ◈
                                    </span>
                                    <span>No image available</span>
                                </div>
                            )}

                            {currentImage && (
                                <span className="gallery-zoom-hint">
                                    ⤢ Click to enlarge
                                </span>
                            )}
                        </button>

                        {/* Scrollable thumbnail strip */}
                        {availableImages.length > 1 && (
                            <div className="lego-gallery-thumbnails">
                                {availableImages.map((image, index) => (
                                    <button
                                        type="button"
                                        key={image}
                                        className={
                                            safeIndex === index
                                                ? "gallery-thumbnail active"
                                                : "gallery-thumbnail"
                                        }
                                        onClick={() =>
                                            setActiveImage(index)
                                        }
                                        aria-label={`View image ${index + 1}`}
                                    >
                                        <img
                                            src={image}
                                            alt=""
                                            onError={() =>
                                                markImageFailed(image)
                                            }
                                        />
                                    </button>
                                ))}
                            </div>
                        )}

                        <p className="gallery-caption">
                            {availableImages.length > 0
                                ? `${safeIndex + 1} / ${availableImages.length} photos`
                                : "No photos available"}
                        </p>
                    </div>

                    {/* PRODUCT INFORMATION */}
                    <div className="lego-product-info">

                        <span className="lego-category">
                            {legoSet.category}
                        </span>

                        <h2>{legoSet.name}</h2>

                        <p className="set-number">
                            LEGO Set #{legoSet.setNumber}
                        </p>

                        <div className="product-price">
                            {legoSet.price != null
                                ? `$${Number(legoSet.price).toFixed(2)}`
                                : "Price unavailable"}
                        </div>

                        <span className={
                            legoSet.available
                                ? "product-stock in-stock"
                                : "product-stock out-of-stock"
                        }>
                            {legoSet.available
                                ? "● In stock"
                                : "● Unavailable"}
                        </span>

                        <div className="product-specifications">
                            <div>
                                <span>Pieces</span>
                                <strong>
                                    {legoSet.pieces.toLocaleString("en-US")}
                                </strong>
                            </div>

                            <div>
                                <span>Condition</span>
                                <strong>
                                    {CONDITION_LABELS[legoSet.condition]
                                        || legoSet.condition}
                                </strong>
                            </div>

                            <div>
                                <span>Category</span>
                                <strong>{legoSet.category}</strong>
                            </div>

                            <div>
                                <span>Set number</span>
                                <strong>{legoSet.setNumber}</strong>
                            </div>
                        </div>

                        <div className="product-description">
                            <h3>About this LEGO Set</h3>
                            <p>
                                {legoSet.description ||
                                    "No description available."}
                            </p>
                        </div>

                        {legoSet.instructionsUrl && (
                            <a
                                href={legoSet.instructionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="instructions-button"
                            >
                                View Building Instructions ↗
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* FULLSCREEN LIGHTBOX */}
            {lightboxOpen && currentImage && (
                <div
                    className="lego-lightbox"
                    role="presentation"
                    onClick={() => setLightboxOpen(false)}
                >
                    <div
                        className="lightbox-content"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${legoSet.name} photo gallery`}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="lightbox-close"
                            onClick={() => setLightboxOpen(false)}
                            aria-label="Close image"
                        >
                            ×
                        </button>

                        {availableImages.length > 1 && (
                            <button
                                type="button"
                                className="lightbox-arrow prev"
                                onClick={() => changeImage(-1)}
                                aria-label="Previous image"
                            >
                                ‹
                            </button>
                        )}

                        <img
                            className="lightbox-image"
                            src={currentImage}
                            alt={legoSet.name}
                            onError={() =>
                                markImageFailed(currentImage)
                            }
                        />

                        {availableImages.length > 1 && (
                            <button
                                type="button"
                                className="lightbox-arrow next"
                                onClick={() => changeImage(1)}
                                aria-label="Next image"
                            >
                                ›
                            </button>
                        )}

                        <span className="lightbox-counter">
                            {safeIndex + 1} / {availableImages.length}
                        </span>
                    </div>
                </div>
            )}
        </main>
    );
}
