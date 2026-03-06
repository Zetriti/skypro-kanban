import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
`;

const YesButton = styled(Button)`
  background-color: #565eef;
  color: white;
  &:hover {
    background-color: #33399b;
  }
`;

const NoButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #565eef;
  color: #565eef;
  &:hover {
    background-color: #565eef;
    color: white;
  }
`;

const Exit = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleYes = () => {
    onLogout();
    navigate("/login");
  };

  const handleNo = () => {
    navigate(-1); // назад
  };

  return (
    <Overlay>
      <Modal>
        <Title>Выйти из аккаунта?</Title>
        <ButtonGroup>
          <YesButton onClick={handleYes}>Да, выйти</YesButton>
          <NoButton onClick={handleNo}>Нет, остаться</NoButton>
        </ButtonGroup>
      </Modal>
    </Overlay>
  );
};

export default Exit;
