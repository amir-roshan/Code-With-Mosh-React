import ProductList from "./components/ProductList";
import { useState } from "react";

const App = () => {
  const [category, setCategory] = useState("");
  return (
    <>
      <select
        // we use onChange to update the state when the user selects a category
        // the event object is used to get the value of the selected option
        onChange={(event) => setCategory(event.target.value)}
        className="form-control"
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </>
  );
};

export default App;
