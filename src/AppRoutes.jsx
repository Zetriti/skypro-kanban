import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Board from "./pages/Board";
import CardDetails from "./pages/CardDetails";
import AddTask from "./pages/AddTask";
import Exit from "./pages/Exit";
import NotFound from "./pages/NotFound";

const AppRoutes = ({ isAuth, onLogin, onLogout }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={onLogin} />} />
      <Route path="/register" element={<Register onLogin={onLogin} />} />

      {/* Защищённые маршруты, использующие Board как Layout */}
      <Route
        path="/"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Board />
          </ProtectedRoute>
        }
      >
        {/* Модальные окна как дочерние маршруты */}
        <Route path="add" element={<AddTask />} />
        <Route path="card/:id" element={<CardDetails />} />
      </Route>

      <Route
        path="/exit"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Exit onLogout={onLogout} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
