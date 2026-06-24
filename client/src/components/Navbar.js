import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Food Waste Management</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/foods">Foods</Link>
        <Link to="/add-food">Add Food</Link>
      </div>
    </nav>
  );
}

export default Navbar;