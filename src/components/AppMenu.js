import { Link, BrowserRouter as Router } from "react-router-dom";

// cartCount from store

const AppMenu = () => {
  let cartCount = 0;

  let cartdiv = "";
  if (cartCount > 0) {
    cartdiv = <div className="smallnum"> cartCount </div>;
  }
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/restaurants">Restaurants</a>
          </li>
        </ul>
        {cartdiv}
        <Link to="/cart">Cart</Link>
      </nav>
    </Router>
  );
};

export default AppMenu;
