import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div>
        <h1>Reduce food waste by connecting donors with communities</h1>
        <p>
          Browse available donations, register surplus food, and support local NGOs with a clean, easy platform.
        </p>

        <div className="hero-actions">
          <Link className="btn btn-primary" to="/add-food">
            Donate Food
          </Link>
          <Link className="btn btn-secondary" to="/foods">
            Browse Donations
          </Link>
        </div>
      </div>

      <div className="surface">
        <h3>How it works</h3>
        <div className="card-grid">
          <div className="card">
            <h3>Share meals</h3>
            <p>Post food details, quantity, location and expiry so NGOs can claim it fast.</p>
          </div>
          <div className="card">
            <h3>Find donations</h3>
            <p>View available food offers and request what your organization can collect.</p>
          </div>
          <div className="card">
            <h3>Make impact</h3>
            <p>Help reduce waste and deliver good food to those who need it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
