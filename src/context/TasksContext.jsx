/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";
import { cardList as initialCards } from "../data";

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialCards);

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const addTask = (newTask) => {
    // Генерируем новый id (для примера)
    const newId = Math.max(...tasks.map((t) => t.id), 0) + 1;
    setTasks([...tasks, { ...newTask, id: newId }]);
  };

  return (
    <TasksContext.Provider value={{ tasks, updateTask, deleteTask, addTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};
