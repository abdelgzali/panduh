import React, { useState, useEffect } from "react";

function Recipes(props) {
  const [recipes, setRecipes] = useState([]);
  const [ingredientsString, setIngredientsString] = useState("");

  const getRecipeJson = async () => {
    const apiKey = "f80b0799b2304f429cc6a73e5ebe6bc9";
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredientsString}&number=10`;
    try {
      console.log(url);
      const req = await fetch(url);
      const res = await req.json();
      console.log(res);
      setRecipes(res);
    } catch (err) {
      console.log(err);
    }
  };

  const stringifyIngredients = () => {
    console.log(props.ingredients);
    if (props.ingredients.length) {
      let str = props.ingredients[0];
      let additionalIngredients = [...props.ingredients];
      additionalIngredients.splice(0, 1);
      for (let ingredient of additionalIngredients) {
        str += ",+" + ingredient;
      }
      setIngredientsString(str);
    } else {
      console.log("no ingredients to stringify");
    }
  };

  // useEffect(() => {
  //   stringifyIngredients();
  // }, [props.ingredients]);

  useEffect(() => {
    if (props.ingredients.length > 1) getRecipeJson();
  }, [ingredientsString]);

  return (
    <div id="recipes">
      <button className="btn-secondary" onClick={(e) => stringifyIngredients()}>
        Find Recipes
      </button>
      <ul>
        {recipes.length > 0 &&
          recipes.map((recipe, index) => {
            return (
              <li key={index} className="recipe-card">
                {recipe.title}
                <img src={recipe.image} alt="recipe-image"></img>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Recipes;
