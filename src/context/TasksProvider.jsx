import React, { useState, useEffect } from "react";
import { TasksContext } from "./TasksContext";
import {
  getTasks,
  addTask as apiAddTask,
  updateTask as apiUpdateTask,
  deleteTask as apiDeleteTask,
} from "../services/tasks";
import { formatDateToDisplay } from "../services/api";

export const TasksProvider = ({ children, token }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const data = await getTasks();
      const formatted = data.tasks.map((task) => ({
        ...task,
        date: formatDateToDisplay(task.date),
      }));
      setTasks(formatted);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (newTask) => {
    try {
      const data = await apiAddTask(newTask);
      const formatted = data.tasks.map((task) => ({
        ...task,
        date: formatDateToDisplay(task.date),
      }));
      setTasks(formatted);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      const data = await apiUpdateTask(id, taskData);
      const formatted = data.tasks.map((task) => ({
        ...task,
        date: formatDateToDisplay(task.date),
      }));
      setTasks(formatted);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteTask = async (id) => {
    try {
      const data = await apiDeleteTask(id);
      const formatted = data.tasks.map((task) => ({
        ...task,
        date: formatDateToDisplay(task.date),
      }));
      setTasks(formatted);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    if (token) {
      loadTasks();
    } else {
      setTasks([]);
      setLoading(false);
    }
  }, [token]);

  return (
    <TasksContext.Provider
      value={{ tasks, loading, error, addTask, updateTask, deleteTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};
