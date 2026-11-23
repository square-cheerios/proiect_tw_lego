
import { Link } from "react-router-dom";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <main className="container">
      <section className="panel about-page">
        <h2>About BrickStore</h2>

        <p className={styles.aboutPage}>
          BrickStore is a web application developed
          as part of the Web Technologies course.
          It provides a simple and interactive way
          to manage a LEGO store inventory.
        </p>

        <h3>What can you do?</h3>

        <ul>
          <li>Browse a collection of LEGO sets.</li>
          <li>Search by name, category, or set number.</li>
          <li>View detailed information and product images.</li>
          <li>Add new LEGO sets with form validation.</li>
          <li>Update product availability.</li>
          <li>Remove LEGO sets from the inventory.</li>
          <li>Switch between light and dark themes.</li>
        </ul>

        <h3>Technologies</h3>

        <p>
          React, Vite, React Router, JavaScript,
          CSS, and JSON Server.
        </p>

        <p>
          Inventory data is loaded and updated through
          a REST API, allowing changes to persist
          after refreshing the page.
        </p>

        <Link to="/" className="page-back-link">
          ← Back to Inventory
        </Link>
      </section>
    </main>
  );
}
