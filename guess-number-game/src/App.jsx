import React from "react";
import Game from "./components/Game.jsx";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[400px] text-center">
        <h1 className="text-3xl font-bold mb-6 text-purple-700">🎯 Guess the Number</h1>
        <Game />
      </div>
    </div>
  );
}

export default App;
