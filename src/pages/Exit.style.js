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
  background-color: ${({ theme }) =>
    theme === "light" ? "#FFFFFF" : "#20202C"};
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
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#FFFFFF")};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  width: 153px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
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
  border: 0.7px solid
    ${({ theme }) => (theme === "light" ? "#565eef" : "#FFFFFF")};
  color: ${({ theme }) => (theme === "light" ? "#565eef" : "#FFFFFF")};
  &:hover {
    background-color: #565eef;
    color: white;
    border: 0.7px solid #565eef;
  }
`;
