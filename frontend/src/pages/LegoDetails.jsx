import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchLegoSet } from "../api.js";
import styles from "./LegoDetails.module.css";

const CONDITION_LABELS = {
    new: "New",
    used: "Used",
    sealed: "Sealed"
};

export default function LegoDetails() {
    const { id } = useParams();
    const [legoSet, setLegoSet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        // Each URL ID requests its own product from the API.
        async function loadProduct() {
            try {
                const data = await fetchLegoSet(id);
                if (!ignore) {
                    setLegoSet(data);
                    setError(null);
                }
            } catch (err) {
                if (!ignore) {
                    setLegoSet(null);
                    setError(err.message);
                }
            } finally {
                if (!ignore) setLoading(false);
            }
        }

        loadProduct();
        return () => { ignore = true; };
    }, [id]);

    if (loading) {
        return (
            <main className="container">
                <p className="info" data-testid="loading">Loading LEGO set...</p>
            </main>
        );
    }

    if (error || !legoSet || String(legoSet.id) !== String(id)) {
        return (
            <main className="container">
                <section className="panel">
                    <h2>LEGO Set Not Found</h2>
                    <p className="error" data-testid="error" role="alert">
                        Could not load LEGO set: {error || "Product not found"}
                    </p>
                    <Link to="/">← Back to Inventory</Link>
                </section>
            </main>
        );
    }

    return <LegoProduct key={id} legoSet={legoSet} />;
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

    const imageCount = availableImages.length;

function changeImage(direction) {
    if (imageCount === 0) return;

    setActiveImage((prev) =>
        (Math.min(prev, imageCount - 1) +
            direction +
            imageCount) % imageCount
    );
}

useEffect(() => {
    if (!lightboxOpen) return;

    function handleKeyDown(event) {
        if (event.key === "Escape") {
            setLightboxOpen(false);
            return;
        }

        if (imageCount === 0) return;

        if (event.key === "ArrowRight") {
            setActiveImage((prev) =>
                (Math.min(prev, imageCount - 1) +
                    1 + imageCount) % imageCount
            );
        }

        if (event.key === "ArrowLeft") {
            setActiveImage((prev) =>
                (Math.min(prev, imageCount - 1) -
                    1 + imageCount) % imageCount
            );
        }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
}, [lightboxOpen, imageCount]);

    return (
        <main className="container">
            <section className={`panel ${styles.legoDetailsPage}`} data-testid="detail">

                <Link to="/" className={styles.backToInventory}>
                    ← Back to Inventory
                </Link>

                <div className={styles.legoProductLayout}>

                    {/* PRODUCT GALLERY */}
                    <div className={styles.legoGallery}>

                        <button
                            type="button"
                            className={styles.legoGalleryMain}
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
                                <div className={styles.legoImagePlaceholder}>
                                    <span className={styles.placeholderIcon}>
                                        ◈
                                    </span>
                                    <span>No image available</span>
                                </div>
                            )}

                            {currentImage && (
                                <span className={styles.galleryZoomHint}>
                                    ⤢ Click to enlarge
                                </span>
                            )}
                        </button>

                        {/* Scrollable thumbnail strip */}
                        {availableImages.length > 1 && (
                            <div className={styles.legoGalleryThumbnails}>
                                {availableImages.map((image, index) => (
                                    <button
                                        type="button"
                                        key={image}
                                        className={
                                            safeIndex === index
                                                ? `${styles.galleryThumbnail} ${styles.active}`
                                                : styles.galleryThumbnail
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

                        <p className={styles.galleryCaption}>
                            {availableImages.length > 0
                                ? `${safeIndex + 1} / ${availableImages.length} photos`
                                : "No photos available"}
                        </p>
                    </div>

                    {/* PRODUCT INFORMATION */}
                    <div className={styles.legoProductInfo}>

                        <span className={styles.legoCategory}>
                            {legoSet.category}
                        </span>

                        <h2 data-testid="detail-title">{legoSet.name}</h2>

                        <p className={styles.setNumber}>
                            LEGO Set #{legoSet.setNumber}
                        </p>

                        <div className={styles.productPrice}>
                            {legoSet.price != null
                                ? `$${Number(legoSet.price).toFixed(2)}`
                                : "Price unavailable"}
                        </div>

                        <span className={
                            legoSet.available
                                ? `${styles.productStock} ${styles.inStock}`
                                : `${styles.productStock} ${styles.outOfStock}`
                        }>
                            {legoSet.available
                                ? "● In stock"
                                : "● Unavailable"}
                        </span>

                        <div className={styles.productSpecifications}>
                            <div>
                                <span>Pieces</span>
                                <strong>
                                    {Number(legoSet.pieces).toLocaleString("en-US")}
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

                        <div className={styles.productDescription}>
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
                                className={styles.instructionsButton}
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
                    className={styles.legoLightbox}
                    role="presentation"
                    onClick={() => setLightboxOpen(false)}
                >
                    <div
                        className={styles.lightboxContent}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${legoSet.name} photo gallery`}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className={styles.lightboxClose}
                            onClick={() => setLightboxOpen(false)}
                            aria-label="Close image"
                        >
                            ×
                        </button>

                        {availableImages.length > 1 && (
                            <button
                                type="button"
                                className={`${styles.lightboxArrow} ${styles.prev}`}
                                onClick={() => changeImage(-1)}
                                aria-label="Previous image"
                            >
                                ‹
                            </button>
                        )}

                        <img
                            className={styles.lightboxImage}
                            src={currentImage}
                            alt={legoSet.name}
                            onError={() =>
                                markImageFailed(currentImage)
                            }
                        />

                        {availableImages.length > 1 && (
                            <button
                                type="button"
                                className={`${styles.lightboxArrow} ${styles.next}`}
                                onClick={() => changeImage(1)}
                                aria-label="Next image"
                            >
                                ›
                            </button>
                        )}

                        <span className={styles.lightboxCounter}>
                            {safeIndex + 1} / {availableImages.length}
                        </span>
                    </div>
                </div>
            )}
        </main>
    );
}
