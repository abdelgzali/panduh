import React, { useState, useEffect } from 'react';

import Modal from './Modal';

function RecipeCard({recipe}) {
  const [modalToggled, toggleModal] = useState(false);
  return (
    <div className="recipe-card">
      {recipe.title}
      <img src={recipe.image} alt="recipe-image"></img>
      <button onClick={() => {toggleModal(!modalToggled)}}>show more</button>
      <Modal showModal={modalToggled} toggleModal={toggleModal} content={recipe}></Modal>
    </div>
  )
}

export default RecipeCard;