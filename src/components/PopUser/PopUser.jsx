import React from "react";
import { Link } from "react-router-dom";
import {
  PopUserContainer,
  PopUserName,
  PopUserMail,
  ThemeRow,
  LogoutButton,
} from "./PopUser.styled";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const PopUser = ({ isOpen, onClose }) => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userName = user.name || "Ivan Ivanov";
  const userEmail = user.login || "ivan.ivanov@gmail.com";

  const { theme, setTheme } = useContext(ThemeContext);
  const onToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <PopUserContainer theme={theme} $isOpen={isOpen}>
      <PopUserName theme={theme}>{userName}</PopUserName>
      <PopUserMail>{userEmail}</PopUserMail>
      <ThemeRow theme={theme} onClick={onToggleTheme}>
        <p theme={theme}>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </ThemeRow>
      <LogoutButton theme={theme} type="button" onClick={onClose}>
        <Link theme={theme} to="/exit">
          Выйти
        </Link>
      </LogoutButton>
    </PopUserContainer>
  );
};

export default PopUser;
