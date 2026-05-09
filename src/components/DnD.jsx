import React, { useState, useEffect, useMemo, useRef } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { useTasks } from "../hooks/useTasks";
import { columnTitles } from "../data";
import { MainContent } from "./DnD.styled";
import Column from "./Column/Column";
import SkeletonCard from "./SkeletonCard";
import SkeletonBoard from "./SkeletonBoard";

const DnD = () => {
  const { tasks, loading, error, updateTask } = useTasks();

  const lastTasksRef = useRef(
    JSON.parse(localStorage.getItem("lastTasks") || "[]"),
  );

  const [orderedIds, setOrderedIds] = useState(() =>
    tasks.map((t) => t._id || t.id?.toString()),
  );

  const [dragState, setDragState] = useState({
    isDragging: false,
    overColumnId: null,
    overIndex: null,
    draggingTaskId: null,
    sourceColumnId: null,
  });

  useEffect(() => {
    if (!loading) {
      lastTasksRef.current = tasks;
      localStorage.setItem("lastTasks", JSON.stringify(tasks));
    }
  }, [loading, tasks]);

  useEffect(() => {
    const currentIds = new Set(tasks.map((t) => t._id || t.id?.toString()));
    setOrderedIds((prev) => {
      const filtered = prev.filter((id) => currentIds.has(id));
      const newIds = [...currentIds].filter((id) => !filtered.includes(id));
      return [...filtered, ...newIds];
    });
  }, [tasks]);

  const tasksMap = useMemo(() => {
    const map = {};
    tasks.forEach((t) => (map[t._id || t.id] = t));
    return map;
  }, [tasks]);

  const handleDragEnd = async (result) => {
    const { source, destination, draggableId } = result;

    try {
      if (!destination) return;
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      )
        return;

      const sourceStatus = source.droppableId;
      const destStatus = destination.droppableId;

      setOrderedIds((prev) => {
        const newIds = [...prev];
        const currentIndex = newIds.indexOf(draggableId);
        if (currentIndex === -1) return prev;
        newIds.splice(currentIndex, 1);
        const idsWithStatus = newIds.filter(
          (id) => tasksMap[id] && tasksMap[id].status === destStatus,
        );
        if (destination.index >= idsWithStatus.length) {
          const lastId = idsWithStatus[idsWithStatus.length - 1];
          const insertAfterIndex = lastId
            ? newIds.indexOf(lastId) + 1
            : newIds.length;
          newIds.splice(insertAfterIndex, 0, draggableId);
        } else {
          const targetId = idsWithStatus[destination.index];
          const insertIndex = newIds.indexOf(targetId);
          newIds.splice(insertIndex, 0, draggableId);
        }
        return newIds;
      });

      if (sourceStatus !== destStatus) {
        const movedTask = tasksMap[draggableId];
        if (!movedTask) return;
        let isoDate;
        if (movedTask.date && movedTask.date.includes(".")) {
          const [day, month, year] = movedTask.date.split(".");
          isoDate = `20${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T00:00:00.000Z`;
        } else {
          isoDate = movedTask.date;
        }
        const updatedTask = {
          title: movedTask.title,
          description: movedTask.description || "",
          topic: movedTask.topic,
          status: destStatus,
          date: isoDate,
        };
        try {
          await updateTask(movedTask._id || movedTask.id, updatedTask);
        } catch (err) {
          console.error("Ошибка обновления:", err);
          alert("Не удалось переместить задачу");
          setOrderedIds(tasks.map((t) => t._id || t.id?.toString()));
        }
      }
    } finally {
      setDragState({
        isDragging: false,
        overColumnId: null,
        overIndex: null,
        draggingTaskId: null,
        sourceColumnId: null,
      });
    }
  };

  const handleDragUpdate = (update) => {
    const { destination } = update;
    setDragState((prev) => ({
      ...prev,
      isDragging: true,
      overColumnId: destination ? destination.droppableId : null,
      overIndex: destination ? destination.index : null,
    }));
  };

  if (loading) {
    return <SkeletonBoard lastTasks={lastTasksRef.current} />;
  }

  if (error) return <p style={{ color: "red" }}>Ошибка: {error}</p>;

  const groupedCards = columnTitles.map((title) => {
    const cardsInOrder = orderedIds
      .map((id) => tasksMap[id])
      .filter((task) => task && task.status === title);
    return {
      title,
      cards: cardsInOrder,
      isOver: dragState.isDragging && dragState.overColumnId === title,
      overIndex: dragState.overColumnId === title ? dragState.overIndex : null,
      isAnyDragging: dragState.isDragging,
      draggingTaskId: dragState.draggingTaskId,
      sourceColumnId: dragState.sourceColumnId,
    };
  });

  return (
    <DragDropContext
      onDragEnd={handleDragEnd}
      onDragUpdate={handleDragUpdate}
      onBeforeDragStart={(start) =>
        setDragState({
          isDragging: true,
          overColumnId: null,
          overIndex: null,
          draggingTaskId: start.draggableId,
          sourceColumnId: start.source.droppableId,
        })
      }
      onDragStart={(start) =>
        setDragState((prev) => ({
          ...prev,
          isDragging: true,
          draggingTaskId: start.draggableId,
          sourceColumnId: start.source.droppableId,
        }))
      }
    >
      <MainContent>
        {groupedCards.map((column) => (
          <Column
            key={column.title}
            title={column.title}
            cards={column.cards}
            isOver={column.isOver}
            overIndex={column.overIndex}
            isAnyDragging={column.isAnyDragging}
            draggingTaskId={column.draggingTaskId}
            sourceColumnId={column.sourceColumnId}
          />
        ))}
      </MainContent>
    </DragDropContext>
  );
};

export default DnD;
