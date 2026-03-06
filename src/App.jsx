// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { TasksProvider } from "./context/TasksContext"; // путь должен быть корректным
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Board from "./pages/Board";
import CardDetails from "./pages/CardDetails";
import AddTask from "./pages/AddTask";
import Exit from "./pages/Exit";
import NotFound from "./pages/NotFound";
import { GlobalStyles } from "./GlobalStyles.styled";
import "./other.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => setIsAuth(true);
  const handleLogout = () => setIsAuth(false);

  return (
    <TasksProvider>
      <GlobalStyles />
      <div className="wrapper">
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={<Register onLogin={handleLogin} />}
          />
          <Route
            path="/"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Board />
              </ProtectedRoute>
            }
          />
          <Route
            path="/card/:id"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <CardDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <AddTask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/exit"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Exit onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </TasksProvider>
  );
}

export default App;
