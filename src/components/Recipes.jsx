import React, { useState, useEffect } from "react";

function Recipes(props) {
  const [recipes, setRecipes] = useState([]);
  const [ingredientsString, setIngredientsString] = useState("");

  const getRecipeJson = async () => {
    const apiKey = "f80b0799b2304f429cc6a73e5ebe6bc9";
    const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredientsString}&number=5`;
    try {
      console.log(url)
      const req = await fetch(url);
      const res = await req.json();
      console.log(res);
      setRecipes(res);
    } catch(err) {
      console.log(err);
    }
  };

  const stringifyIngredients = () => {
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

  useEffect(() => {
    stringifyIngredients();
  }, [props.ingredients]);

  useEffect(() => {
    getRecipeJson();
  }, [ingredientsString]);

  return (
    <div id="recipes">
      <ul>
        { recipes && recipes.map((recipe, index) => {
          return (
            <li key={index}>
              {recipe.title}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Recipes;
