import React, { useState } from "react";

const AddRecipeForm = ({ addRecipe }) => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !ingredients || !steps) return;

        addRecipe({
            id: Date.now(),
            title,
            ingredients: ingredients.split(","),
            steps: steps.split("\n"),
            image
        });

        setTitle("");
        setIngredients("");
        setSteps("");
        setImage("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Название"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Ингредиенты (через ,)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />
            <textarea
                placeholder="Шаги (каждый с новой строки)"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
            />
            <input
                type="text"
                placeholder="URL изображения"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Добавить рецепт</button>
        </form>
    );
};

export default AddRecipeForm;
