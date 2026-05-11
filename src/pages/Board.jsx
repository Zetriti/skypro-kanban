// src/pages/Board.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Column from "../components/Column/Column";
import { MainWrapper, MainBlock, MainContent } from "./Board.styled";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import DnD from "../components/DnD";

const Board = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <MainWrapper theme={theme}>
        <div className="container">
          <MainBlock>
            <DnD />
          </MainBlock>
        </div>
      </MainWrapper>
      <Outlet />
    </>
  );
};

export default Board;
