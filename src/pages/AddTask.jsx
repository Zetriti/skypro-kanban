import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Add.styled";
import Calendar from "../components/Calendar/Calendar";
import { useTasks } from "../hooks/useTasks";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Web Design");
  const [selectedDate, setSelectedDate] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { addTask } = useTasks();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const validateForm = () => {
    if (!title.trim()) {
      setError("Введите название задачи");
      return false;
    }
    if (!selectedDate) {
      setError("Выберите дату");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError("");
    try {
      const [day, month, year] = selectedDate.split(".");
      const isoDate = `20${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T00:00:00.000Z`;

      await addTask({
        title,
        description,
        topic: category,
        status: "Без статуса",
        date: isoDate,
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const { theme } = useContext(ThemeContext);

  const getCategoryStyle = (categoryName) => {
    switch (categoryName) {
      case "Web Design":
        return {
          bg: theme === "light" ? "#FFE4C2" : "#ff6d00",
          color: theme === "light" ? "#ff6d00" : "#FFE4C2",
        };
      case "Research":
        return {
          bg: theme === "light" ? "#B4FDD1" : "#06b16e",
          color: theme === "light" ? "#06b16e" : "#B4FDD1",
        };
      case "Copywriting":
        return {
          bg: theme === "light" ? "#E9D4FF" : "#9a48f1",
          color: theme === "light" ? "#9a48f1" : "#E9D4FF",
        };
      default:
        return { bg: "#94a6be", color: "#ffffff" };
    }
  };

  const categories = [
    { name: "Web Design", ...getCategoryStyle("Web Design") },
    { name: "Research", ...getCategoryStyle("Research") },
    { name: "Copywriting", ...getCategoryStyle("Copywriting") },
  ];

  return (
    <S.Overlay onClick={() => navigate("/")}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.Container theme={theme}>
          <S.Title theme={theme}>Создание задачи</S.Title>
          <S.Wrap>
            <S.Form onSubmit={handleSubmit}>
              <S.FormBlock>
                <S.Label theme={theme} htmlFor="formTitle">
                  Название задачи
                </S.Label>
                <S.Input
                  theme={theme}
                  type="text"
                  id="formTitle"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Введите название задачи..."
                  autoFocus
                />
              </S.FormBlock>
              <S.FormBlock>
                <S.Label theme={theme} htmlFor="textArea">
                  Описание задачи
                </S.Label>
                <S.TextArea
                  theme={theme}
                  id="textArea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Введите описание задачи..."
                />
              </S.FormBlock>
            </S.Form>
            <Calendar
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
            />
          </S.Wrap>
          <S.Categories>
            <S.CategoriesTitle theme={theme}>Категория</S.CategoriesTitle>
            <S.Themes>
              {categories.map((cat) => (
                <S.Theme
                  key={cat.name}
                  $bg={cat.bg}
                  $color={cat.color}
                  $active={category === cat.name}
                  onClick={() => setCategory(cat.name)}
                >
                  <p>{cat.name}</p>
                </S.Theme>
              ))}
            </S.Themes>
          </S.Categories>
          {error && (
            <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
          )}
          <S.ButtonWrapper>
            <S.CreateButton onClick={handleSubmit} disabled={loading}>
              {loading ? "Создание..." : "Создать задачу"}
            </S.CreateButton>
          </S.ButtonWrapper>
        </S.Container>
      </S.ModalContent>
    </S.Overlay>
  );
};

export default AddTask;
