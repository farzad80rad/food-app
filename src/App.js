import React from "react";
import logo from "./logo.svg";
import AppHeader from "./components/AppHeader";
import AppRestaurantInfo from "./components/AppRestaurantInfo";
import { useSelector, useDispatch } from "react-redux";
import { selectFoodData, getData } from "./features/foods/FoodSlice";
import { useEffect } from "react";
import RestauraPage from "./components/RestaurantPage";
import DetailsPage from "./components/DetailsPage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// fooddata from store

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fooddata = useSelector(selectFoodData);
  console.log("tssss");
  console.log(fooddata);
  return (
    <Router>
      <div className="App">
        <main className="container">
          <Switch>
            <Route path="/restaurants">
              <RestauraPage />
            </Route>
            <Route path="/item/:id">
              <DetailsPage />
            </Route>
            <Route path="/">
              <AppHeader />
              <AppRestaurantInfo datasource={fooddata} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
