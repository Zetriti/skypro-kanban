import React, { useContext } from "react";
import { TasksProvider } from "./context/TasksProvider";
import AppRoutes from "./AppRoutes";
import { GlobalStyles } from "./GlobalStyles.styled";
import { ThemeContextProvider } from "./context/ThemeProvider";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { token } = useContext(AuthContext);
  return (
    <TasksProvider token={token}>
      <GlobalStyles />
      <div className="wrapper">
        <AppRoutes />
      </div>
    </TasksProvider>
  );
}

export default App;
