// src/pages/Board.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Column from "../components/Column/Column";
import { useTasks } from "../hooks/useTasks";
import { columnTitles } from "../data";
import {
  MainWrapper,
  MainBlock,
  MainContent,
} from "../components/Main/Main.styled";

const Board = () => {
  const { tasks, loading, error } = useTasks();

  if (loading) {
    return (
      <>
        <Header />
        <MainWrapper>
          <div className="container">
            <MainBlock>
              <p>Загрузка задач...</p>
            </MainBlock>
          </div>
        </MainWrapper>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <MainWrapper>
          <div className="container">
            <MainBlock>
              <p style={{ color: "red" }}>Ошибка: {error}</p>
            </MainBlock>
          </div>
        </MainWrapper>
      </>
    );
  }

  const groupedCards = columnTitles.map((title) => ({
    title,
    cards: tasks.filter((card) => card.status === title),
  }));

  return (
    <>
      <Header />
      <MainWrapper>
        <div className="container">
          <MainBlock>
            <MainContent>
              {groupedCards.map((column) => (
                <Column
                  key={column.title}
                  title={column.title}
                  cards={column.cards}
                />
              ))}
            </MainContent>
          </MainBlock>
        </div>
      </MainWrapper>
      <Outlet />
    </>
  );
};

export default Board;
