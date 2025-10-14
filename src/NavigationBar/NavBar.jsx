



import { Home, User, Info } from "lucide-react"; // icon library
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>Mind Guesser</div>

      <ul className={styles.navMenu}>

        <li className={styles.tooltip}>
          <Home className={styles.navIcon} />
          <a href="#" onClick={() => window.location.reload()}>Home</a>
          <span className={styles.tooltipText}>Go to Home(idk what to put here so it just refreshed the page)</span>
        </li>

        <li className={styles.tooltip}>
          <Info className={styles.navIcon} />
          <a href="#">About The Code</a>
          <span className={styles.tooltipText}>
             This project shows
             my current skills and how I apply what I know to demonstrate 
             my abilities to employers.
          </span>
        </li>

        <li className={styles.tooltip}>
          <User className={styles.navIcon} />
          <a href="#">Login</a>
          <span className={styles.tooltipText}>
             i just felt like adding this
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
