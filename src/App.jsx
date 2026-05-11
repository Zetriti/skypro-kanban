import React, { useContext } from "react";
import { TasksProvider } from "./context/TasksProvider";
import AppRoutes from "./AppRoutes";
import { GlobalStyles } from "./GlobalStyles.styled";
import { ThemeContextProvider } from "./context/ThemeProvider";
import { AuthContext } from "./context/AuthContext";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const { token } = useContext(AuthContext);
  return (
    <SkeletonTheme baseColor="#e9eef7" highlightColor="#c1cddc">
      <TasksProvider token={token}>
        <GlobalStyles />
        <div className="wrapper">
          <AppRoutes />
        </div>
      </TasksProvider>
    </SkeletonTheme>
  );
}

export default App;
