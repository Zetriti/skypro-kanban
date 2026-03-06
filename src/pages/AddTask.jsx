import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Calendar from "../components/Calendar/Calendar";
import { useTasks } from "../context/TasksContext";

const Container = styled.div`
  padding: 20px;
  max-width: 630px;
  margin: 40px auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #000;
`;

const Form = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 5px;
`;

const Input = styled.input`
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
`;

const TextArea = styled.textarea`
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
  height: 200px;
  resize: vertical;
`;

const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

const Categories = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;

const CategoriesTitle = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const Themes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
`;

const Theme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
  background-color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ffe4c2";
      case "green":
        return "#b4fdd1";
      case "purple":
        return "#e9d4ff";
      default:
        return "#94a6be";
    }
  }};
  color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ff6d00";
      case "green":
        return "#06b16e";
      case "purple":
        return "#9a48f1";
      default:
        return "#ffffff";
    }
  }};
  cursor: pointer;
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 495px) {
    justify-content: stretch;
    button {
      width: 100%;
    }
  }
`;

const CreateButton = styled.button`
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
    background-color: #33399b;
  }
  @media (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Web Design");
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Создаём новую задачу (без id, id сгенерируется в контексте)
    const newTask = {
      title,
      description,
      text: category,
      date: new Date().toLocaleDateString("ru-RU"), // или можно брать из календаря
      status: "Без статуса", // по умолчанию
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
    <>
      <Header />
      <Container>
        <Title>Создание задачи</Title>
        <Wrap>
          <Form onSubmit={handleSubmit}>
            <FormBlock>
              <Label htmlFor="formTitle">Название задачи</Label>
              <Input
                type="text"
                id="formTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Введите название задачи..."
                autoFocus
                required
              />
            </FormBlock>
            <FormBlock>
              <Label htmlFor="textArea">Описание задачи</Label>
              <TextArea
                id="textArea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Введите описание задачи..."
                required
              />
            </FormBlock>
          </Form>
          <Calendar />
        </Wrap>
        <Categories>
          <CategoriesTitle>Категория</CategoriesTitle>
          <Themes>
            {categories.map((cat) => (
              <Theme
                key={cat.name}
                $color={cat.color}
                $active={category === cat.name}
                onClick={() => setCategory(cat.name)}
              >
                <p>{cat.name}</p>
              </Theme>
            ))}
          </Themes>
        </Categories>
        <ButtonWrapper>
          <CreateButton type="submit" onClick={handleSubmit}>
            Создать задачу
          </CreateButton>
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default AddTask;
