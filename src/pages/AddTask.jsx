import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Add.styled";
import Calendar from "../components/Calendar/Calendar";
import { useTasks } from "../hooks/useTasks";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Web Design");
  const [selectedDate, setSelectedDate] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { addTask } = useTasks();
  const navigate = useNavigate();

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

  const categories = [
    { name: "Web Design", color: "orange" },
    { name: "Research", color: "green" },
    { name: "Copywriting", color: "purple" },
  ];

  return (
    <S.Overlay onClick={() => navigate("/")}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.Container>
          <S.Title>Создание задачи</S.Title>
          <S.Wrap>
            <S.Form onSubmit={handleSubmit}>
              <S.FormBlock>
                <S.Label htmlFor="formTitle">Название задачи</S.Label>
                <S.Input
                  type="text"
                  id="formTitle"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Введите название задачи..."
                  autoFocus
                />
              </S.FormBlock>
              <S.FormBlock>
                <S.Label htmlFor="textArea">Описание задачи</S.Label>
                <S.TextArea
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
            <S.CategoriesTitle>Категория</S.CategoriesTitle>
            <S.Themes>
              {categories.map((cat) => (
                <S.Theme
                  key={cat.name}
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
