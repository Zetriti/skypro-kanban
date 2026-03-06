// src/pages/Board.jsx
import React from "react";
import Header from "../components/Header/Header";
import Column from "../components/Column/Column";
import { useTasks } from "../context/TasksContext";
import { columnTitles } from "../data";
import {
  MainWrapper,
  MainBlock,
  MainContent,
} from "../components/Main/Main.styled";

const Board = () => {
  const { tasks } = useTasks();

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
              {groupedCards.map((column, index) => (
                <Column key={index} title={column.title} cards={column.cards} />
              ))}
            </MainContent>
          </MainBlock>
        </div>
      </MainWrapper>
    </>
  );
};

export default Board;
