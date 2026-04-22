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
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      text: category,
      date: selectedDate,
      status: "Без статуса",
    };
    addTask(newTask);
    navigate("/");
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
                  required
                />
              </S.FormBlock>
              <S.FormBlock>
                <S.Label htmlFor="textArea">Описание задачи</S.Label>
                <S.TextArea
                  id="textArea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Введите описание задачи..."
                  required
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
          <S.ButtonWrapper>
            <S.CreateButton type="submit">Создать задачу</S.CreateButton>
          </S.ButtonWrapper>
        </S.Container>
      </S.ModalContent>
    </S.Overlay>
  );
};

export default AddTask;
