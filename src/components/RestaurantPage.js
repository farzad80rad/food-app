import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import AppSelect from "./AppSelect";
import { selectFoodData } from "../features/foods/FoodSlice";
import AppRestaurantInfo from "./AppRestaurantInfo";

const RestauraPage = () => {
  const fooddata = useSelector(selectFoodData);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [filterdRes, setFilterdRes] = useState([]);
  const [restaurantOptions, setRestaurantOptions] = useState([
    "tacos",
    "pizza",
    "dim sum",
    "dim dim",
  ]);

  function filteredRestaurants() {
    console.log("in filter");
    console.log(fooddata);
    if (selectedRestaurant) {
      setFilterdRes(
        fooddata.filter((el) => {
          let name = el.name.toLowerCase();
          return name.includes(selectedRestaurant);
        })
      );
    }
    return fooddata;
  }

  useEffect(() => {
    filteredRestaurants();
  }, [selectedRestaurant]);

  return (
    <main class="container restaurant">
      <div class="restaurantheading">
        <h1>Restaurants</h1>

        <div>
          <label for="restaurant">Choose a restaurant:</label>
          <select
            onChange={(e) => setSelectedRestaurant(e.target.value)}
            name="restaurant"
            id="restaurant"
          >
            <option value> --Please choose-- </option>
            {restaurantOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <AppRestaurantInfo datasource={filterdRes} />
    </main>
  );
};

export default RestauraPage;
