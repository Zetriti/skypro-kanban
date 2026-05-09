import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Exit.style";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Exit = () => {
  const { logout } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleYes = () => {
    logout();
    navigate("/login");
  };

  const handleNo = () => {
    navigate("/");
  };

  return (
    <S.Overlay theme={theme} onClick={handleNo}>
      <S.Modal theme={theme} onClick={(e) => e.stopPropagation()}>
        <S.Title theme={theme}>Выйти из аккаунта?</S.Title>
        <S.ButtonGroup>
          <S.YesButton onClick={handleYes}>Да, выйти</S.YesButton>
          <S.NoButton onClick={handleNo}>Нет, остаться</S.NoButton>
        </S.ButtonGroup>
      </S.Modal>
    </S.Overlay>
  );
};

export default Exit;
