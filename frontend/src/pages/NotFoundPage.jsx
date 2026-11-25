
import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
    return (
        <main className="container">
            <section
                className={`panel ${styles.notFoundPage}`}
                data-testid="not-found"
            >
                <p className={styles.notFoundCode}>404</p>

                <h2>Oops! Page not found.</h2>

                <p>
                    The page you are looking for does not exist
                    or may have been moved.
                </p>

                <Link to="/" className={styles.pageBackLink}>
                    ← Back to Inventory
                </Link>
            </section>
        </main>
    );
}
