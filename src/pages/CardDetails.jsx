import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./CardDetails.styled";
import Header from "../components/Header/Header";
import Calendar from "../components/Calendar/Calendar";
import { useTasks } from "../hooks/useTasks";

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
        <S.Container>
          <h2>Задача не найдена</h2>
          <S.PrimaryButton onClick={() => navigate("/")}>
            На главную
          </S.PrimaryButton>
        </S.Container>
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

  const getCategoryColor = (text) => {
    if (text === "Web Design") return "orange";
    if (text === "Research") return "green";
    if (text === "Copywriting") return "purple";
    return "gray";
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.TopBlock>
          <S.Title>{editedTask?.title || task.title}</S.Title>
          <S.ThemeTag $color={getCategoryColor(task.text)}>
            <p>{task.text}</p>
          </S.ThemeTag>
        </S.TopBlock>

        <S.StatusSection>
          <S.StatusTitle>Статус</S.StatusTitle>
          <S.StatusThemes>
            {statuses.map((status) => (
              <S.StatusTheme
                key={status}
                $active={status === (editedTask?.status || task.status)}
                $isEditable={isEditing}
                onClick={() => handleStatusChange(status)}
              >
                <p>{status}</p>
              </S.StatusTheme>
            ))}
          </S.StatusThemes>
        </S.StatusSection>

        <S.Wrap>
          <S.Form>
            <S.FormBlock>
              <S.Label htmlFor="description">Описание задачи</S.Label>
              <S.TextArea
                id="description"
                value={editedTask?.description || task.description || ""}
                onChange={handleDescriptionChange}
                readOnly={!isEditing}
                $isEditable={isEditing}
                placeholder="Введите описание задачи..."
              />
            </S.FormBlock>
          </S.Form>
          <Calendar isBrowse={!isEditing} />
        </S.Wrap>

        <S.CategorySection className="theme-down">
          <S.CategoryTitle>Категория</S.CategoryTitle>
          <S.CategoryThemes>
            <S.CategoryTheme
              $color={getCategoryColor(task.text)}
              $active={true}
            >
              <p>{task.text}</p>
            </S.CategoryTheme>
          </S.CategoryThemes>
        </S.CategorySection>

        {!isEditing ? (
          <S.ButtonGroup>
            <S.LeftButtons>
              <S.SecondaryButton onClick={handleEdit}>
                Редактировать задачу
              </S.SecondaryButton>
              <S.DangerButton onClick={handleDelete}>
                Удалить задачу
              </S.DangerButton>
            </S.LeftButtons>
            <S.CloseButton onClick={() => navigate("/")}>Закрыть</S.CloseButton>
          </S.ButtonGroup>
        ) : (
          <S.ButtonGroup>
            <S.LeftButtons>
              <S.PrimaryButton onClick={handleSave}>Сохранить</S.PrimaryButton>
              <S.SecondaryButton onClick={handleCancel}>
                Отменить
              </S.SecondaryButton>
              <S.DangerButton onClick={handleDelete}>
                Удалить задачу
              </S.DangerButton>
            </S.LeftButtons>
            <S.CloseButton onClick={() => navigate("/")}>Закрыть</S.CloseButton>
          </S.ButtonGroup>
        )}
      </S.Container>
    </>
  );
};

export default CardDetails;
