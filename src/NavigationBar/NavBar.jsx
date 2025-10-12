



import { Home, User, Info } from "lucide-react"; // icon library
import styles from './NavBar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>Mind Guesser</div>

      <ul className={styles.navMenu}>
        <li><Home className={styles.navIcon} /><a href="#">Home</a></li>
        <li><Info className={styles.navIcon} /><a href="#">About</a></li>
        <li><User className={styles.navIcon} /><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
