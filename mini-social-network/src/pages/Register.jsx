import React, { useState } from "react";

function Register({ setUser }) {
    const [name, setName] = useState("");

    const handleRegister = () => {
        if (!name) return alert("Введите имя");

        const newUser = { id: Date.now(), name };
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        setUser(newUser);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow w-80">
                <h1 className="text-xl font-bold mb-4">Регистрация</h1>
                <input
                    className="border p-2 w-full mb-4"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-full" onClick={handleRegister}>
                    Зарегистрироваться
                </button>
            </div>
        </div>
    );
}

export default Register;
