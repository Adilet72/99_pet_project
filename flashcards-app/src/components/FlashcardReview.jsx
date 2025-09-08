import React, { useState, useEffect } from "react";

const FlashcardReview = ({ flashcards }) => {
    const [index, setIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [shuffledCards, setShuffledCards] = useState([]);

    useEffect(() => {
        if (flashcards.length > 0) {
            setShuffledCards([...flashcards].sort(() => Math.random() - 0.5));
            setIndex(0);
        }
    }, [flashcards]);

    if (shuffledCards.length === 0) return <p>Нет карточек для повторения</p>;

    const currentCard = shuffledCards[index];

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowResult(true);
    };

    const handleNext = () => {
        setUserAnswer("");
        setShowResult(false);
        setIndex((prev) => (prev + 1) % shuffledCards.length);
    };

    return (
        <div>
            <h2>Повторение</h2>
            <p>Вопрос: {currentCard.question}</p>

            {!showResult ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Ваш ответ"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                    />
                    <button type="submit">Проверить</button>
                </form>
            ) : (
                <div>
                    {userAnswer.trim().toLowerCase() === currentCard.answer.toLowerCase() ? (
                        <p>✅ Правильно!</p>
                    ) : (
                        <p>❌ Неправильно. Правильный ответ: {currentCard.answer}</p>
                    )}
                    <button onClick={handleNext}>Следующий вопрос</button>
                </div>
            )}
        </div>
    );
};

export default FlashcardReview;
