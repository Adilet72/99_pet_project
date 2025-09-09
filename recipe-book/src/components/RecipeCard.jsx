import React from "react";

const RecipeCard = ({ recipe, onSelect, onDelete }) => {
    return (
        <div className="recipe-card" onClick={() => onSelect(recipe)}>
            {recipe.image && <img src={recipe.image} alt={recipe.title} />}
            <h3>{recipe.title}</h3>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(recipe.id);
                }}
            >
                Удалить
            </button>
        </div>
    );
};

export default RecipeCard;
