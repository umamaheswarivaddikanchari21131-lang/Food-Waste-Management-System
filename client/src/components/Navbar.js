import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h2>Food Waste Management</h2>
        <p>Connecting donors, NGOs, and volunteers to reduce food waste.</p>
      </div>

      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/foods">Available Foods</Link>
        <Link to="/add-food">Donate Food</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Navbar;