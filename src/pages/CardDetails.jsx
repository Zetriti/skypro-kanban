import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./CardDetails.styled";
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
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setEditedTask({ ...task });
    }
  }, [task]);

  if (!task) {
    return null;
  }

  const handleEdit = () => setIsEditing(true);
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

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      navigate("/");
    }
  };

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer onClick={handleOverlayClick}>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>{editedTask?.title || task.title}</S.PopBrowseTtl>
              <S.ThemeTop $color={getCategoryColor(task.text)}>
                <p>{task.text}</p>
              </S.ThemeTop>
            </S.PopBrowseTopBlock>

            <S.StatusSection>
              <S.StatusP>Статус</S.StatusP>
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

            <S.PopBrowseWrap>
              <S.FormBrowse>
                <S.FormBrowseBlock>
                  <S.Subttl htmlFor="description">Описание задачи</S.Subttl>
                  <S.FormBrowseArea
                    id="description"
                    value={editedTask?.description || task.description || ""}
                    onChange={handleDescriptionChange}
                    readOnly={!isEditing}
                    $isEditable={isEditing}
                    placeholder="Введите описание задачи..."
                  />
                </S.FormBrowseBlock>
              </S.FormBrowse>
              <Calendar
                selectedDate={editedTask?.date || task.date}
                onDateChange={
                  isEditing
                    ? (newDate) =>
                        setEditedTask({ ...editedTask, date: newDate })
                    : undefined
                }
              />
            </S.PopBrowseWrap>

            <S.ThemeDownCategories>
              <S.CategoriesP>Категория</S.CategoriesP>
              <S.CategoriesTheme $color={getCategoryColor(task.text)}>
                <p>{task.text}</p>
              </S.CategoriesTheme>
            </S.ThemeDownCategories>

            {!isEditing ? (
              <S.PopBrowseBtnBrowse>
                <S.BtnGroup>
                  <S.BtnBor onClick={handleEdit}>Редактировать задачу</S.BtnBor>
                  <S.BtnBor onClick={handleDelete}>Удалить задачу</S.BtnBor>
                </S.BtnGroup>
                <S.BtnBg onClick={() => navigate("/")}>Закрыть</S.BtnBg>
              </S.PopBrowseBtnBrowse>
            ) : (
              <S.PopBrowseBtnEdit>
                <S.BtnGroup>
                  <S.BtnBg onClick={handleSave}>Сохранить</S.BtnBg>
                  <S.BtnBor onClick={handleCancel}>Отменить</S.BtnBor>
                  <S.BtnBor onClick={handleDelete}>Удалить задачу</S.BtnBor>
                </S.BtnGroup>
                <S.BtnBg onClick={() => navigate("/")}>Закрыть</S.BtnBg>
              </S.PopBrowseBtnEdit>
            )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};

export default CardDetails;
