import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

const Modal = ({ showModal, toggleModal, recipe }) => {
  const [ingredients, setIngredients] = useState([]);
  const modalClassName = showModal ? "modal display-block" : "modal display-none";

  useEffect(() => {
    if (recipe) {
      const { missedIngredients, usedIngredients } = recipe;
      setIngredients([...missedIngredients, ...usedIngredients]);
    }
  }, [recipe]);

  return (
    <div className={modalClassName}>
      <section className="modal-body">
        <RecipeCard recipe={recipe} showMore={false}></RecipeCard>
        {ingredients && ingredients.length && (
          <div>
            <h4>Ingredients:</h4>
            <ul>
            {ingredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.name}</li>;
            })}
          </ul>
          </div>
        )}

        <span
          className="material-icons modal-close"
          onClick={() => {
            toggleModal(!showModal);
          }}
        >
          close
        </span>
      </section>
    </div>
  );
};

export default Modal;
