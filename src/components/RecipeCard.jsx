import React, { useState, useEffect } from 'react';

function RecipeCard({recipe, setActiveRecipe}) {
  
  return (
    <div className="recipe-card">
      {recipe.title}
      <img src={recipe.image} alt="recipe-image"></img>
      <button onClick={() => {setActiveRecipe(recipe)}}>show more</button>
    </div>
  )
}

export default RecipeCard;