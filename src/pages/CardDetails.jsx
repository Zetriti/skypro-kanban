// src/pages/CardDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Calendar from "../components/Calendar/Calendar";
import { useTasks } from "../context/TasksContext";

// Стили (адаптированы под макет)
const Container = styled.div`
  padding: 20px;
  max-width: 630px;
  margin: 40px auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const Title = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const ThemeTag = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
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
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

const StatusSection = styled.div`
  margin-bottom: 11px;
`;

const StatusTitle = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: ${({ $isEditable }) => ($isEditable ? "pointer" : "default")};
  background-color: ${({ $active, $isEditable }) =>
    $active ? ($isEditable ? "#9a48f1" : "#94a6be") : "transparent"};
  color: ${({ $active }) => ($active ? "#ffffff" : "#94a6be")};
  &:hover {
    background-color: ${({ $isEditable }) => $isEditable && "#9a48f1"};
    color: ${({ $isEditable }) => $isEditable && "#ffffff"};
  }
  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
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

const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ $isEditable }) => ($isEditable ? "#ffffff" : "#eaeef6")};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: vertical;
  color: #000;
  &[readonly] {
    background: #eaeef6;
  }
`;

const CategorySection = styled.div`
  margin-bottom: 20px;
  &.theme-down {
    display: none;
    @media (max-width: 495px) {
      display: block;
    }
  }
`;

const CategoryTitle = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const CategoryThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
`;

const CategoryTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
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
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
`;

const LeftButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #565eef;
  color: #ffffff;
  &:hover {
    background-color: #33399b;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 0.7px solid #565eef;
  color: #565eef;
  &:hover {
    background-color: #565eef;
    color: #ffffff;
  }
`;

const DangerButton = styled(Button)`
  background-color: transparent;
  border: 0.7px solid #565eef;
  color: #565eef;
  &:hover {
    background-color: #565eef;
    color: #ffffff;
  }
`;

const CloseButton = styled(PrimaryButton)`
  @media (max-width: 495px) {
    width: 100%;
  }
`;

// Список возможных статусов
const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask, deleteTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  const task = tasks.find((t) => t.id === parseInt(id));

  useEffect(() => {
    if (task) {
      setEditedTask({ ...task });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task]);

  if (!task) {
    return (
      <>
        <Header />
        <Container>
          <h2>Задача не найдена</h2>
          <PrimaryButton onClick={() => navigate("/")}>
            На главную
          </PrimaryButton>
        </Container>
      </>
    );
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTask(editedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTask({ ...task });
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTask(task.id);
    navigate("/");
  };

  const handleStatusChange = (status) => {
    if (!isEditing) return;
    setEditedTask({ ...editedTask, status });
  };

  const handleDescriptionChange = (e) => {
    if (!isEditing) return;
    setEditedTask({ ...editedTask, description: e.target.value });
  };

  // Для календаря пока используем статичный, но можно добавить выбор даты
  // В оригинальном макете дата тоже редактируется, для простоты пока оставим как есть

  // Определяем цвет категории на основе текста
  const getCategoryColor = (text) => {
    if (text === "Web Design") return "orange";
    if (text === "Research") return "green";
    if (text === "Copywriting") return "purple";
    return "gray";
  };

  return (
    <>
      <Header />
      <Container>
        <TopBlock>
          <Title>{editedTask?.title || task.title}</Title>
          <ThemeTag $color={getCategoryColor(task.text)}>
            <p>{task.text}</p>
          </ThemeTag>
        </TopBlock>

        <StatusSection>
          <StatusTitle>Статус</StatusTitle>
          <StatusThemes>
            {statuses.map((status) => (
              <StatusTheme
                key={status}
                $active={status === (editedTask?.status || task.status)}
                $isEditable={isEditing}
                onClick={() => handleStatusChange(status)}
              >
                <p>{status}</p>
              </StatusTheme>
            ))}
          </StatusThemes>
        </StatusSection>

        <Wrap>
          <Form>
            <FormBlock>
              <Label htmlFor="description">Описание задачи</Label>
              <TextArea
                id="description"
                value={editedTask?.description || task.description || ""}
                onChange={handleDescriptionChange}
                readOnly={!isEditing}
                $isEditable={isEditing}
                placeholder="Введите описание задачи..."
              />
            </FormBlock>
          </Form>
          <Calendar isBrowse={!isEditing} /> {/* Календарь пока статичный */}
        </Wrap>

        {/* Категория для мобильной версии (дублируется) */}
        <CategorySection className="theme-down">
          <CategoryTitle>Категория</CategoryTitle>
          <CategoryThemes>
            <CategoryTheme $color={getCategoryColor(task.text)} $active={true}>
              <p>{task.text}</p>
            </CategoryTheme>
          </CategoryThemes>
        </CategorySection>

        {!isEditing ? (
          <ButtonGroup>
            <LeftButtons>
              <SecondaryButton onClick={handleEdit}>
                Редактировать задачу
              </SecondaryButton>
              <DangerButton onClick={handleDelete}>Удалить задачу</DangerButton>
            </LeftButtons>
            <CloseButton onClick={() => navigate("/")}>Закрыть</CloseButton>
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <LeftButtons>
              <PrimaryButton onClick={handleSave}>Сохранить</PrimaryButton>
              <SecondaryButton onClick={handleCancel}>Отменить</SecondaryButton>
              <DangerButton onClick={handleDelete}>Удалить задачу</DangerButton>
            </LeftButtons>
            <CloseButton onClick={() => navigate("/")}>Закрыть</CloseButton>
          </ButtonGroup>
        )}
      </Container>
    </>
  );
};

export default CardDetails;
