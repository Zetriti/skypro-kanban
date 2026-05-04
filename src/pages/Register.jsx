import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Register.styled";
import { signUp } from "../services/auth";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { login } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
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
    if (!submitted) return "";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setApiError("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      const data = await signUp({ name, email, password });
      const token = data.user?.token;
      if (token) {
        localStorage.setItem("user", JSON.stringify(data.user));
        login(token);
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
    <S.Container theme={theme}>
      <S.Form theme={theme} onSubmit={handleSubmit}>
        <h2 theme={theme} style={{ textAlign: "center", marginBottom: 20 }}>
          Регистрация
        </h2>
        <S.Input
          theme={theme}
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((prev) => ({ ...prev, name: false }));
            setApiError("");
            setSubmitted(false);
          }}
          $error={submitted && errors.name}
        />
        <S.Input
          theme={theme}
          type="email"
          placeholder="Эл. почта"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prev) => ({ ...prev, email: false }));
            setApiError("");
            setSubmitted(false);
          }}
          $error={submitted && errors.email}
        />
        <S.Input
          theme={theme}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors((prev) => ({ ...prev, password: false }));
            setApiError("");
            setSubmitted(false);
          }}
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
