import React, { useState, useEffect } from "react";

function RecipeCard({ recipe, setActiveRecipe, showMore }) {
  return (
    <div className="recipe-card">
      {recipe && 
        <div>
          <h3>{recipe.title}</h3> 
          <img src={recipe.image} alt="recipe-image"></img>
        </div>}

      {showMore && (
        <button
          onClick={() => {
            setActiveRecipe(recipe);
          }}
        >
          show more
        </button>
      )}
    </div>
  );
}

export default RecipeCard;
