import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Exit.style";

const Exit = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleYes = () => {
    onLogout();
    navigate("/login");
  };

  const handleNo = () => {
    navigate("/");
  };

  return (
    <S.Overlay onClick={handleNo}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Title>Выйти из аккаунта?</S.Title>
        <S.ButtonGroup>
          <S.YesButton onClick={handleYes}>Да, выйти</S.YesButton>
          <S.NoButton onClick={handleNo}>Нет, остаться</S.NoButton>
        </S.ButtonGroup>
      </S.Modal>
    </S.Overlay>
  );
};

export default Exit;
