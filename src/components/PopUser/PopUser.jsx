import React from "react";
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
        <a href="#popExit">Выйти</a>
      </LogoutButton>
    </PopUserContainer>
  );
};

export default PopUser;
