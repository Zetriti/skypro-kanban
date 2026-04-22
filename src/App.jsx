import React, { useState } from "react";
import { TasksProvider } from "./context/TasksProvider";
import AppRoutes from "./AppRoutes";
import { GlobalStyles } from "./GlobalStyles.styled";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const isAuth = !!token;

  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <TasksProvider token={token}>
      <GlobalStyles />
      <div className="wrapper">
        <AppRoutes
          isAuth={isAuth}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
      </div>
    </TasksProvider>
  );
}

export default App;
