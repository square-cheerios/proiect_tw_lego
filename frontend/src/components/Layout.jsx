import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function getInitialTheme() {
  const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  document.documentElement.dataset.theme = theme;
  return theme;
}

export default function Layout() {
  const [theme, setTheme] = useState(getInitialTheme);

  function handleThemeToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  function navClass({ isActive }) {
    return [styles["nav-link"], isActive && styles["nav-link-active"]]
      .filter(Boolean)
      .join(" ");
  }

  return (
    <>
      <header className={styles["app-header"]}>
        <button
          type="button"
          className={styles["theme-switch"]}
          onClick={handleThemeToggle}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={theme === "dark"}
          title="Switch theme"
        >
          <span className={`${styles["theme-icon"]} ${styles.sun}`} aria-hidden="true">☀</span>
          <span className={styles["switch-track"]}>
            <span className={styles["switch-thumb"]} />
          </span>
          <span className={`${styles["theme-icon"]} ${styles.moon}`} aria-hidden="true">☾</span>
        </button>

        <div className={styles["floating-bricks"]} aria-hidden="true">
          {Array.from({ length: 6 }, (_, index) => (
            <span
              key={index}
              className={`${styles.brick} ${styles[`brick-${index + 1}`]}`}
            />
          ))}
        </div>

        <div className={styles["header-content"]}>
          <h1>BrickStore</h1>
          <p className={styles["header-description"]}>
            Manage your LEGO store inventory
          </p>
          <nav className={styles["app-navigation"]} data-testid="nav" aria-label="Main navigation">
            <NavLink to="/" end className={navClass}>Inventory</NavLink>
            <NavLink to="/despre" className={navClass}>About</NavLink>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className={styles["app-footer"]}>
        Web Technologies Project · BrickStore
      </footer>
    </>
  );
}
