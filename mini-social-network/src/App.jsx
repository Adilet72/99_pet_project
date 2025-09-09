import React, { useState, useEffect } from "react";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(null);

  // Проверяем, есть ли залогиненный пользователь в localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Если пользователь не авторизован, показываем либо Login, либо Register
  if (!user) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const hasAccount = users.length > 0;

    return hasAccount ? (
      <Login setUser={setUser} />
    ) : (
      <Register setUser={setUser} />
    );
  }

  // Если пользователь авторизован, показываем Feed
  return <Feed user={user} />;
}

export default App;
