import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  @media screen and (max-width: 660px) {
    top: 70px;
    align-items: flex-start;
  }
`;

export const ModalContent = styled.div`
  max-width: 630px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;

  @media screen and (max-width: 660px) {
    max-width: 100%;
    width: 100%;
    max-height: calc(100vh - 70px);
    height: calc(100vh - 70px);
    border-radius: 0;
    margin: 0;
  }
`;

export const Container = styled.div`
  padding: 20px;
  max-width: 630px;
  margin: 40px auto;
  background-color: ${({ theme }) =>
    theme === "light" ? "#FFFFFF" : "#20202C"};
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 660px) {
    border-radius: 0;
    margin: 0;
    border-top: 0.7px solid rgba(148, 166, 190, 0.4);
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#FFFFFF")};
`;

export const Form = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${({ theme }) => (theme === "light" ? "#000" : "#FFFFFF")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 10px 0 20px;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#FFFFFF")};
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  min-height: 200px;
  resize: vertical;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#FFFFFF")};

  @media screen and (max-width: 495px) {
    min-height: 37px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const Categories = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const CategoriesTitle = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#FFFFFF")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Themes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
`;

export const Theme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
  background-color: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  cursor: pointer;
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 495px) {
    justify-content: stretch;
    button {
      width: 100%;
    }
  }
`;

export const CreateButton = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 10px;
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #565eef;
  }
  @media (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;
