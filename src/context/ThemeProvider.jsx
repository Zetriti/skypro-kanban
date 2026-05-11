// src/context/ThemeProvider.jsx
import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

const STORAGE_KEY = "app-theme";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      console.warn("Не удалось сохранить тему в localStorage");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
