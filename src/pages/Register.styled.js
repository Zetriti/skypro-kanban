import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme === "light" ? "#eaeef6" : "#151419"};
  @media screen and (max-width: 1200px) {
    background-color: ${({ theme }) =>
      theme === "light" ? "#FFFFFF" : "#20202C"};
  }
`;

export const Form = styled.form`
  background-color: ${({ theme }) =>
    theme === "light" ? "#FFFFFF" : "#20202C"};
  padding: 40px 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.6px;
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#FFFFFF")};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 7px;
  border: 0.7px solid ${({ $error }) => ($error ? "#ff4d4f" : "#6694A6BE")};
  border-radius: 8px;
  background-color: ${({ theme }) =>
    theme === "light" ? "#FFFFFF" : "transparent"};
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#FFFFFF")};
`;

export const Button = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  width: 100%;
  padding: 10px;
  background-color: #565eef;
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 13px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    background-color: #565eef;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const P = styled.p`
  text-align: center;
  color: #94a6be66;
  height: 42px;
`;

export const StyledLink = styled.a`
  color: #94a6be66;
  text-decoration: underline;
  cursor: pointer;

  &:visited {
    color: #94a6be66;
  }

  &:hover {
    color: #565eef;
  }

  &:active {
    color: #94a6be66;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
  text-align: center;
`;
