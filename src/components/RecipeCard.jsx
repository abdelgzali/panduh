import React, { useState, useEffect } from 'react'

function RecipeCard({recipe}) {
  return (
    <div className="recipe-card">
      {recipe.title}
      <img src={recipe.image} alt="recipe-image"></img>
    </div>
  )
}

export default RecipeCard;