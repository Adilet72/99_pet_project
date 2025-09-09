import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onSelect, onDelete }) => {
    if (recipes.length === 0) return <p>Рецепты не найдены</p>;

    return (
        <div className="recipe-list">
            {recipes.map((r) => (
                <RecipeCard key={r.id} recipe={r} onSelect={onSelect} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default RecipeList;
