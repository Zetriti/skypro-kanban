// src/components/SkeletonBoard.jsx
import React from "react";
import styled from "styled-components";
import { columnTitles } from "../data";
import SkeletonCard from "./SkeletonCard";
import "react-loading-skeleton/dist/skeleton.css";

const Board = styled.div`
  width: 100%;
  display: flex;
  gap: 19px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Column = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Title = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
  @media screen and (max-width: 1200px) {
    margin: 0;
    margin-bottom: 20px;
  }
`;

const TitleText = styled.p`
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

const CardsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  @media screen and (max-width: 1200px) {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: visible;
    min-height: 140px;
    align-items: flex-start;
  }
`;

const CardWrapper = styled.div`
  margin-bottom: 10px;

  @media screen and (max-width: 1200px) {
    margin-right: 10px;
    margin-bottom: 0;
    flex-shrink: 0;
  }
`;

const SkeletonBoard = ({ lastTasks }) => {
  const tasksArray = lastTasks || [];
  const skeletonCounts = columnTitles.reduce((acc, title) => {
    acc[title] = tasksArray.filter((t) => t.status === title).length;
    return acc;
  }, {});

  return (
    <Board>
      {columnTitles.map((title) => (
        <Column key={title}>
          <Title>
            <TitleText>{title}</TitleText>
          </Title>
          <CardsRow>
            {skeletonCounts[title] > 0 &&
              Array.from({ length: skeletonCounts[title] }).map((_, idx) => (
                <CardWrapper key={idx}>
                  <SkeletonCard />
                </CardWrapper>
              ))}
          </CardsRow>
        </Column>
      ))}
    </Board>
  );
};

export default SkeletonBoard;
