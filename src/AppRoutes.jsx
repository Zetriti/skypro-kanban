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
            <Exit onLogout={onLogout} />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
