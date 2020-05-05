import React, { useState, useEffect } from 'react';

function Recipes(props) {
  const [ recipes, setRecipes ] = useState([]);

  const getRecipeJson = () => {
    const apiKey = "ca789b70cb6a4006abcf9e42308d5039";
    const url =
      "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" +
      apiKey +
      "&ingredients=apples,+flour,+sugar&number=2";
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
      });

  }

  useEffect(() => {
    // getRecipeJson()
  })

  return (
    <div></div>
  );

}
 
export default Recipes;