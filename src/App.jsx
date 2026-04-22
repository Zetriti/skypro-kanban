import React, { useState } from "react";
import { TasksProvider } from "./context/TasksProvider";
import AppRoutes from "./AppRoutes";
import { GlobalStyles } from "./GlobalStyles.styled";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  const handleLogin = () => setIsAuth(true);
  const handleLogout = () => setIsAuth(false);

  return (
    <TasksProvider>
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
