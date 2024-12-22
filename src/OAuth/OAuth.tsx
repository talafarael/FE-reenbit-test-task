import React, { useState } from "react";
import axios from "axios";

export const OAuth2Login = () => {
  const [user, setUser] = useState(null);

  // Перенаправление пользователя на аутентификацию через Google
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/oauth/auth/google";
  };

  // Проверка авторизации
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/oauth/protected",
        {
          withCredentials: true, // Для передачи cookie
        }
      );
      setUser(response.data);
    } catch (error) {
      console.error("Ошибка при получении пользователя:", error);
      alert("Вы не авторизованы.");
    }
  };

  // Логаут пользователя
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/oauth/logout", {
        withCredentials: true,
      });
      setUser(null);
      alert("Вы успешно вышли из системы.");
    } catch (error) {
      console.error("Ошибка при выходе из системы:", error);
    }
  };

  return (
    <div>
      {!user ? (
        <div>
          <h1>OAuth2 Авторизация</h1>
          <button onClick={handleLogin}>Войти через Google</button>
        </div>
      ) : (
        <div>
          <h1>Добро пожаловать, {user}</h1>
          <button onClick={handleLogout}>Выйти</button>
        </div>
      )}
      <button onClick={fetchUser}>Проверить авторизацию</button>
    </div>
  );
};

export default OAuth2Login;
