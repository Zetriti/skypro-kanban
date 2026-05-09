import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./CardDetails.styled";
import Calendar from "../components/Calendar/Calendar";
import { useTasks } from "../hooks/useTasks";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const getCategoryStyle = (categoryName, theme) => {
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

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask, deleteTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { theme } = useContext(ThemeContext);

  const task = tasks.find((t) => t._id === id || t.id === parseInt(id));

  useEffect(() => {
    if (task) {
      setEditedTask({ ...task });
    }
  }, [task]);

  if (!task) {
    return null;
  }

  if (!task) return null;
  const { bg: categoryBg, color: categoryColor } = getCategoryStyle(
    task.topic,
    theme,
  );

  const handleEdit = () => setIsEditing(true);

  const handleSave = async () => {
    if (!editedTask.title?.trim()) {
      setError("Название задачи не может быть пустым");
      return;
    }
    setLoading(true);
    setError("");
    try {
      let isoDate = editedTask.date;
      if (editedTask.date && editedTask.date.includes(".")) {
        const [day, month, year] = editedTask.date.split(".");
        isoDate = new Date(`20${year}-${month}-${day}`).toISOString();
      }

      const taskId = task._id || task.id;
      await updateTask(taskId, { ...editedTask, date: isoDate });
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditedTask({ ...task });
    setIsEditing(false);
    setError("");
  };

  const handleDelete = async () => {
    setLoading(true);
    setError("");
    try {
      const taskId = task._id || task.id;
      await deleteTask(taskId);
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = (status) => {
    if (!isEditing) return;
    setEditedTask({ ...editedTask, status });
  };

  const handleDescriptionChange = (e) => {
    if (!isEditing) return;
    setEditedTask({ ...editedTask, description: e.target.value });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      navigate("/");
    }
  };

  return (
    <S.PopBrowse>
      <S.PopBrowseContainer onClick={handleOverlayClick}>
        <S.PopBrowseBlock theme={theme}>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl theme={theme}>
                {editedTask?.title || task.title}
              </S.PopBrowseTtl>
              <S.ThemeTop $bg={categoryBg} $color={categoryColor}>
                <p>{task.topic}</p>
              </S.ThemeTop>
            </S.PopBrowseTopBlock>

            <S.StatusSection>
              <S.StatusP theme={theme}>Статус</S.StatusP>
              <S.StatusThemes>
                {!isEditing ? (
                  <S.StatusTheme theme={theme} $active $isEditable={false}>
                    <p>{task.status}</p>
                  </S.StatusTheme>
                ) : (
                  statuses.map((status) => (
                    <S.StatusTheme
                      theme={theme}
                      key={status}
                      $active={status === (editedTask?.status || task.status)}
                      $isEditable={true}
                      onClick={() => handleStatusChange(status)}
                    >
                      <p theme={theme}>{status}</p>
                    </S.StatusTheme>
                  ))
                )}
              </S.StatusThemes>
            </S.StatusSection>

            <S.PopBrowseWrap>
              <S.FormBrowse>
                <S.FormBrowseBlock>
                  <S.Subttl theme={theme} htmlFor="description">
                    Описание задачи
                  </S.Subttl>
                  <S.FormBrowseArea
                    theme={theme}
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
              <S.CategoriesTheme $bg={categoryBg} $color={categoryColor}>
                <p>{task.topic}</p>
              </S.CategoriesTheme>
            </S.ThemeDownCategories>

            {error && (
              <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
            )}

            {!isEditing ? (
              <S.PopBrowseBtnBrowse>
                <S.BtnGroup>
                  <S.BtnBor
                    theme={theme}
                    onClick={handleEdit}
                    disabled={loading}
                  >
                    Редактировать задачу
                  </S.BtnBor>
                  <S.BtnBor
                    theme={theme}
                    onClick={handleDelete}
                    disabled={loading}
                  >
                    Удалить задачу
                  </S.BtnBor>
                </S.BtnGroup>
                <S.BtnBg
                  theme={theme}
                  onClick={() => navigate("/")}
                  disabled={loading}
                >
                  Закрыть
                </S.BtnBg>
              </S.PopBrowseBtnBrowse>
            ) : (
              <S.PopBrowseBtnEdit>
                <S.BtnGroup>
                  <S.BtnBg onClick={handleSave} disabled={loading}>
                    {loading ? "Сохранение..." : "Сохранить"}
                  </S.BtnBg>
                  <S.BtnBor onClick={handleCancel} disabled={loading}>
                    Отменить
                  </S.BtnBor>
                  <S.BtnBor onClick={handleDelete} disabled={loading}>
                    Удалить задачу
                  </S.BtnBor>
                </S.BtnGroup>
                <S.BtnBg onClick={() => navigate("/")} disabled={loading}>
                  Закрыть
                </S.BtnBg>
              </S.PopBrowseBtnEdit>
            )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};

export default CardDetails;
