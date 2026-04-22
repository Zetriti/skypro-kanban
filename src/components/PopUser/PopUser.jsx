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
  return (
    <PopUserContainer $isOpen={isOpen}>
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
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
