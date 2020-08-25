import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import Recipes from "./components/Recipes";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [userInput, updateUserInput] = useState("");

  const addIngredients = () => {
    if (userInput) {
      console.log("input found");
      let updatedIngr = [...ingredients];
      updatedIngr.push(userInput);
      setIngredients(updatedIngr);
    }
  };

  const removeIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  useEffect(() => {
    updateUserInput("");
  }, [ingredients]);

  return (
    <div id="App">
      <Header />
      <section id="search">
        <div id="search-bar">
          <input
            placeholder="ex. chicken, flour, apples..."
            value={userInput}
            onChange={(e) => updateUserInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") addIngredients();
            }}
          ></input>
          <button onClick={() => addIngredients()}>&#43;</button>
        </div>
        <p className="note">Minimum of 2 ingredients, 1 at a time</p>
        <ul id="search-ingredients">
          {ingredients.length > 0 &&
            ingredients.map((ingr, index) => {
              return (
                <li key={index}>
                  {ingr}
                  <span onClick={(e) => removeIngredient(index)}>&times;</span>
                </li>
              );
            })}
        </ul>
      </section>
      <Recipes ingredients={ingredients} setIngredients={setIngredients} />
    </div>
  );
}
