import React, { useState, useEffect } from "react";
import FlashcardForm from "./components/FlashcardForm";
import FlashcardReview from "./components/FlashcardReview";
import FlashcardList from "./components/FlashcardList";
import "./styles.css";

const App = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("flashcards")) || [];
    setFlashcards(saved);
  }, []);

  const saveFlashcards = (cards) => {
    localStorage.setItem("flashcards", JSON.stringify(cards));
    setFlashcards(cards);
  };

  return (
    <div className="app">
      <h1>Flashcards App</h1>
      <FlashcardForm flashcards={flashcards} saveFlashcards={saveFlashcards} />
      <FlashcardReview flashcards={flashcards} />
      <FlashcardList flashcards={flashcards} />
    </div>
  );
};

export default App;
