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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Board />
          </ProtectedRoute>
        }
      >
        <Route path="add" element={<AddTask />} />
        <Route path="card/:id" element={<CardDetails />} />
        <Route path="exit" element={<Exit />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
