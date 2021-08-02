import { Link } from "react-router-dom";

// select from store
// $emit('change', $event.target.value) /////////////////////
const AppSelect = (props) => {
  const { select, selectoptions } = props;
  if (selectoptions.length == 0) selectoptions = ["tacos", "pizza", "dim sum"];

  return (
    <div>
      <label for={select}>Choose a {select}:</label>

      <select onChange="" name={select} id={select}>
        <option value> --Please choose-- </option>
        {selectoptions.map((option) => {
          <option key={option} value={option}>
            {option}
          </option>;
        })}
      </select>
    </div>
  );
};

export default AppSelect;
