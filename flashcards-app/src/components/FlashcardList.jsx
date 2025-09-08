import React from "react";

const FlashcardList = ({ flashcards }) => {
    if (flashcards.length === 0) return <p>Нет карточек для отображения</p>;

    return (
        <div>
            <h2>Все карточки</h2>
            {flashcards.map((card) => (
                <div key={card.id} className="flashcard">
                    <p><strong>Вопрос:</strong> {card.question}</p>
                    <p><strong>Ответ:</strong> {card.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default FlashcardList;
