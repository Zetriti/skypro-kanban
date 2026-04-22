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

      {/* Outlet для отображения модальных окон */}
      <Outlet />
    </>
  );
};

export default Board;
