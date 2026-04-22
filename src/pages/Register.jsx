import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eaeef6;
`;

const Form = styled.form`
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #d4dbe5;
  border-radius: 8px;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #565eef;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #33399b;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 15px;
  color: #565eef;
  text-decoration: none;
`;

const Register = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь регистрация
    if (name && email && password) {
      // После успешной регистрации можно сразу авторизовать
      onLogin();
      navigate("/");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Регистрация</Title>
        <Input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Зарегистрироваться</Button>
        <StyledLink to="/login">Уже есть аккаунт? Войти</StyledLink>
      </Form>
    </Container>
  );
};

export default Register;
