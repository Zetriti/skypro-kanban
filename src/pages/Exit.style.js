import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 370px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  min-width: 100px;
`;

export const YesButton = styled(Button)`
  background-color: #565eef;
  color: white;
  &:hover {
    background-color: #565eef;
  }
`;

export const NoButton = styled(Button)`
  background-color: transparent;
  border: 0.7px solid #565eef;
  color: #565eef;
  &:hover {
    background-color: #565eef;
    color: white;
  }
`;
