import React from "react";
import { Link } from "react-router-dom";
import {
  PopUserContainer,
  PopUserName,
  PopUserMail,
  ThemeRow,
  LogoutButton,
} from "./PopUser.styled";

const PopUser = ({ isOpen, onClose }) => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const userName = user.name || "Ivan Ivanov";
  const userEmail = user.login || "ivan.ivanov@gmail.com";
  return (
    <PopUserContainer $isOpen={isOpen}>
      <PopUserName>{userName}</PopUserName>
      <PopUserMail>{userEmail}</PopUserMail>
      <ThemeRow>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </ThemeRow>
      <LogoutButton type="button" onClick={onClose}>
        <Link to="/exit">Выйти</Link>
      </LogoutButton>
    </PopUserContainer>
  );
};

export default PopUser;
