import { Link, BrowserRouter as Router } from "react-router-dom";
import "../assets/main.scss";
// cartCount from store

const AppRestaurantInfo = (props) => {
  const { datasource } = props;

  function priceFormatting(item) {
    return "$" + item.toFixed(2);
  }

  return (
    <Router>
      <section className="restaurantinfo">
        {datasource.map((store) => (
          <div key={store.id}>
            <h2>{store.name}</h2>
            <p>Delivery Time {store.deliveryTime}</p>
            <p>Rating {store.rating}</p>
            {store.freeDelivery ? (
              <p v-if="store.freeDelivery" className="label">
                <span>Free Delivery</span>
              </p>
            ) : (
              <br />
            )}
            <div className="row">
              {store.menu.map((menuitem) => (
                <div
                  key={menuitem.id}
                  style={{
                    backgroundImage: `url(/${menuitem.img})`,
                    backgroundSize: "cover",
                  }}
                  className="items"
                >
                  <div className="iteminfo">
                    <div>
                      <h4>{menuitem.item}</h4>
                      <p>{priceFormatting(menuitem.price)}</p>
                    </div>
                    <a href={"item/" + menuitem.id}>
                      <button className="ghost"> View Item </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </Router>
  );
};

export default AppRestaurantInfo;
