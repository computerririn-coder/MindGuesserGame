



import { Home, User, Info } from "lucide-react"; // icon library

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Mind Guesser</div>

      <ul className="nav-menu">
        <li><Home className="nav-icon" /><a href="#">Home</a></li>
        <li><Info className="nav-icon" /><a href="#">About</a></li>
        <li><User className="nav-icon" /><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
