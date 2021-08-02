import { Link, BrowserRouter as Router } from "react-router-dom";
import "../assets/appHeader.css";
// cart from store

const AppHeader = () => {
  return (
    <Router>
      <section className="masthead" role="img" aria-label="Image Description">
        <h1 className="title-hero">Food App</h1>
        <a href="/restaurants">
          <button>Find a restaurant</button>
        </a>
      </section>
    </Router>
  );
};

export default AppHeader;
