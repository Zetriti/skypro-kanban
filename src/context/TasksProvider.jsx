import React, { useState } from "react";
import { TasksContext } from "./TasksContext";
import { cardList as initialCards } from "../data";

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
    const newId = Math.max(...tasks.map((t) => t.id), 0) + 1;
    setTasks([...tasks, { ...newTask, id: newId }]);
  };

  return (
    <TasksContext.Provider value={{ tasks, updateTask, deleteTask, addTask }}>
      {children}
    </TasksContext.Provider>
  );
};
