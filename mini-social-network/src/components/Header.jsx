import React from "react";

function Header({ user, setView, handleLogout }) {
    return (
        <header className="bg-white p-4 flex justify-between items-center shadow">
            <h1 className="text-xl font-bold">Mini Social Network</h1>
            <div className="flex items-center space-x-4">
                <button
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                    onClick={() => setView("feed")}
                >
                    Лента
                </button>
                <button
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    onClick={() => setView("profile")}
                >
                    Профиль
                </button>
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={handleLogout}
                >
                    Выйти
                </button>
                <img
                    src={`https://i.pravatar.cc/40?u=${user.id}`}
                    alt="avatar"
                    className="rounded-full"
                />
            </div>
        </header>
    );
}

export default Header;
