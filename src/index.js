import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Components
import Recipes from "./components/Recipes";

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
      console.log('input found')
      let updatedIngr = [...ingredients];
      updatedIngr.push(userInput);
      setIngredients(updatedIngr);
      console.log(ingredients)
    };
  };

  useEffect(() => {}, [ingredients])

  return (
    <div id="App">
      <input
        placeholder="ex. chicken, flour, apples..."
        onChange={(e) => updateUserInput(e.target.value)}
      ></input>
      { userInput }
      <button onClick={() => addIngredients() }>&#43;</button>
      <ul>
        {ingredients.map((ingr, index) => {
            return <li key={index}>{ingr}</li>;
          })}
      </ul>
    </div>
  );
}
