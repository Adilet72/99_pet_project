import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import "./styles/style.scss";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("recipes");
    if (saved) setRecipes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => setRecipes([recipe, ...recipes]);
  const deleteRecipe = (id) => setRecipes(recipes.filter((r) => r.id !== id));
  const selectRecipe = (recipe) => setSelectedRecipe(recipe);

  return (
    <div>
      <Header />
      <AddRecipeForm addRecipe={addRecipe} />
      {selectedRecipe ? (
        <div>
          <button onClick={() => setSelectedRecipe(null)}>Назад</button>
          <h2>{selectedRecipe.title}</h2>
          {selectedRecipe.image && <img src={selectedRecipe.image} alt={selectedRecipe.title} />}
          <h3>Ингредиенты:</h3>
          <ul>{selectedRecipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
          <h3>Шаги:</h3>
          <ol>{selectedRecipe.steps.map((s, idx) => <li key={idx}>{s}</li>)}</ol>
        </div>
      ) : (
        <RecipeList recipes={recipes} onSelect={selectRecipe} onDelete={deleteRecipe} />
      )}
    </div>
  );
}

export default App;
