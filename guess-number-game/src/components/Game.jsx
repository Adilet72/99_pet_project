import React, { useState } from "react";

const Game = () => {
    const [number, setNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");
    const [attempts, setAttempts] = useState(0);

    const handleGuess = () => {
        const userGuess = parseInt(guess);
        setAttempts(attempts + 1);

        if (isNaN(userGuess)) {
            setMessage("⚠️ Введи число!");
            return;
        }

        if (userGuess === number) {
            setMessage(`🎉 Ты угадал! Попыток: ${attempts + 1}`);
        } else if (userGuess < number) {
            setMessage("⬆ Загаданное число больше!");
        } else {
            setMessage("⬇ Загаданное число меньше!");
        }
    };

    const resetGame = () => {
        setNumber(Math.floor(Math.random() * 100) + 1);
        setGuess("");
        setMessage("");
        setAttempts(0);
    };

    return (
        <div>
            <p className="mb-4 text-gray-700">Я загадал число от 1 до 100. Угадай!</p>

            <div className="flex items-center justify-center gap-2 mb-4">
                <input
                    type="number"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Введи число"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <button
                    onClick={handleGuess}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                    Проверить
                </button>
            </div>

            <button
                onClick={resetGame}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition mb-4"
            >
                🔄 Сброс
            </button>

            <p className="font-semibold text-lg text-gray-800">{message}</p>
        </div>
    );
};

export default Game;
