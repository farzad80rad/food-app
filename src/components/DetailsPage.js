import { useState, useEffect } from "react";
import { selectFoodData, getData } from "../features/foods/FoodSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../assets/DetailsPage.scss";

const DetailsPage = () => {
  let { id } = useParams();
  const [itemOptions, setItemOptions] = useState("");
  const [itemAddons, setItemAddons] = useState([]);
  const [count, setCount] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentItem, setCurrentItem] = useState({
    item: "",
    price: 0,
    img: "",
    options: [],
    addOns: [],
  });

  function addAddonsIfPossible(item) {
    let newArray = itemAddons;

    if (newArray.includes(item)) {
      const index = itemAddons.indexOf(item);
      if (index > -1) {
        newArray.splice(index, 1);
      }
    } else {
      newArray.push(item);
    }
    setItemAddons(newArray);
  }

  const fooddata = useSelector(selectFoodData);

  function currentItemCal() {
    // more efficient than forEach because we can break
    let result = { price: 0 };

    console.log("enterdCUrrtn");
    console.log(fooddata);
    for (let i = 0; i < fooddata.length; i++) {
      console.log(fooddata[i]);
      for (let j = 0; j < fooddata[i].menu.length; j++) {
        if (fooddata[i].menu[j].id === parseInt(id)) {
          console.log(fooddata[i].menu[j]);
          result = fooddata[i].menu[j];
          break;
        }
      }
    }
    console.log("tssssssssssssss");
    console.log(result);
    console.log(id);
    setCurrentItem(result);
  }

  function combinedPrice() {
    let total = count * currentItem.price;
    setTotalPrice(total.toFixed(2));
  }

  useEffect(() => {
    combinedPrice();
  }, [count]);

  useEffect(() => {
    currentItemCal();
  }, [fooddata]);

  return (
    <main className="details-container">
      <section
        className="image"
        style={{
          backgroundImage: `url(/${currentItem.img})`,
          backgroundSize: "cover",
        }}
      ></section>

      <section className="details">
        <h1>{currentItem.item}</h1>

        <h3>Price: {currentItem.price.toFixed(2)}</h3>

        <div className="quantity">
          <input
            type="number"
            min="1"
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="primary">Add to Cart - {totalPrice}</button>
        </div>

        {currentItem.options ? (
          <fieldset>
            <legend>
              <h3>Options</h3>
            </legend>
            {currentItem.options.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  name="option"
                  id={option}
                  value={option}
                  onChange={(e) => setItemOptions(e.target.value)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </fieldset>
        ) : (
          <br />
        )}

        {currentItem.addOns ? (
          <fieldset>
            <legend>
              <h3>Add Ons</h3>
            </legend>
            {currentItem.addOns.map((addon) => (
              <div key={addon}>
                <input
                  type="checkbox"
                  name="addon"
                  id={addon}
                  value={addon}
                  onChange={(e) => addAddonsIfPossible(e.target.value)}
                />
                <label htmlFor={addon}>{addon}</label>
              </div>
            ))}
          </fieldset>
        ) : (
          <br />
        )}
      </section>

      <section className="options">
        <h3>Description</h3>
        <p>{currentItem.description}</p>
      </section>
    </main>
  );
};

export default DetailsPage;
