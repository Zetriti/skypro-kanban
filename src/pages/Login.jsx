import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signIn } from "../services/auth";
import * as S from "./Login.styled";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: false, password: false });
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {
      email: !email.trim() || !validateEmail(email),
      password: !password.trim(),
    };
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const getValidationMessage = () => {
    if (errors.email || errors.password) {
      return "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    if (!validateForm()) return;

    setLoading(true);
    try {
      const data = await signIn({ email, password });
      const token = data.user?.token;
      if (token) {
        localStorage.setItem("user", JSON.stringify(data.user));
        onLogin(token);
        navigate("/");
      } else {
        setApiError("Неверный ответ сервера");
      }
    } catch (err) {
      setApiError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const errorMessage = apiError || getValidationMessage();

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Вход</h2>
        <S.Input
          type="email"
          placeholder="Эл. почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          $error={errors.email}
        />
        <S.Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          $error={errors.password}
        />
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.Button type="submit" disabled={loading}>
          {loading ? "Вход..." : "Войти"}
        </S.Button>

        <S.P>
          Нужно зарегистрироваться?{" "}
          <S.StyledLink onClick={() => navigate("/register")}>
            Регистрируйтесь здесь
          </S.StyledLink>
        </S.P>
      </S.Form>
    </S.Container>
  );
};

export default Login;
