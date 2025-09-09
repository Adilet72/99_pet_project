import React, { useState } from "react";

function Login({ setUser }) {
    const [name, setName] = useState("");

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.name === name);
        if (!user) return alert("Пользователь не найден");
        localStorage.setItem("currentUser", JSON.stringify(user));
        setUser(user);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow w-80">
                <h1 className="text-xl font-bold mb-4">Вход</h1>
                <input
                    className="border p-2 w-full mb-4"
                    placeholder="Введите имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="bg-green-500 text-white px-4 py-2 rounded w-full" onClick={handleLogin}>
                    Войти
                </button>
            </div>
        </div>
    );
}

export default Login;
