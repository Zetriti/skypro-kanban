import axios from "axios";

const AUTH_BASE_URL = "https://wedev-api.sky.pro/api";

export const signIn = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `${AUTH_BASE_URL}/user/login`,
      { login: email, password },
      { headers: { "Content-Type": "" } },
    );
    return response.data;
  } catch (error) {
    const message = error.response?.data?.error || "Ошибка входа";
    throw new Error(message);
  }
};

export const signUp = async ({ name, email, password }) => {
  try {
    const response = await axios.post(
      `${AUTH_BASE_URL}/user`,
      { login: email, name, password },
      { headers: { "Content-Type": "" } },
    );
    return response.data;
  } catch (error) {
    const message = error.response?.data?.error || "Ошибка регистрации";
    throw new Error(message);
  }
};
