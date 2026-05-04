import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as S from "./Register.styled";
import { signUp } from "../services/auth";

const Register = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const nameEmpty = !name.trim();
    const emailEmpty = !email.trim();
    const passwordEmpty = !password.trim();
    const emailInvalid = !emailEmpty && !validateEmail(email);

    const newErrors = {
      name: nameEmpty,
      email: emailEmpty || emailInvalid,
      password: passwordEmpty,
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.password;
  };

  const getValidationMessage = () => {
    if (!submitted) return ""; // не показываем до первой попытки

    const nameEmpty = !name.trim();
    const emailEmpty = !email.trim();
    const passwordEmpty = !password.trim();
    const emailInvalid = !emailEmpty && !validateEmail(email);

    if (nameEmpty || emailEmpty || passwordEmpty) {
      return "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.";
    }
    if (emailInvalid) {
      return "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.";
    }
    return "";
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setErrors((prev) => ({ ...prev, name: false }));
    setApiError("");
    setSubmitted(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: false }));
    setApiError("");
    setSubmitted(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors((prev) => ({ ...prev, password: false }));
    setApiError("");
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true); // пользователь нажал кнопку
    setApiError("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      const data = await signUp({ name, email, password });
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
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Регистрация</h2>
        <S.Input
          type="text"
          placeholder="Имя"
          value={name}
          onChange={handleNameChange}
          $error={submitted && errors.name}
        />
        <S.Input
          type="email"
          placeholder="Эл. почта"
          value={email}
          onChange={handleEmailChange}
          $error={submitted && errors.email}
        />
        <S.Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
          $error={submitted && errors.password}
        />

        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

        <S.Button type="submit" disabled={loading}>
          {loading ? "Регистрация..." : "Зарегистрироваться"}
        </S.Button>

        <S.P style={{ textAlign: "center", marginTop: 15 }}>
          Уже есть аккаунт?{" "}
          <S.StyledLink onClick={() => navigate("/login")}>
            Войдите здесь
          </S.StyledLink>
        </S.P>
      </S.Form>
    </S.Container>
  );
};

export default Register;
