import api from "./api";

export const getTasks = async () => {
  const response = await api.get("/kanban");
  return response.data;
};

export const addTask = async (taskData) => {
  const response = await api.post("/kanban", taskData, {
    headers: { "Content-Type": "" },
  });
  return response.data;
};

export const updateTask = async (id, taskData) => {
  const response = await api.put(`/kanban/${id}`, taskData, {
    headers: { "Content-Type": "" },
  });
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await api.delete(`/kanban/${id}`);
  return response.data;
};
