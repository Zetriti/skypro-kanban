import React from "react";
import Card from "../Card/Card";
import { ColumnWrapper, ColumnTitle, CardsContainer } from "./Column.styled";

const Column = ({ title, cards }) => {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        {cards.map((card) => (
          <Card
            key={card._id || card.id}
            id={card._id || card.id}
            text={card.topic}
            title={card.title}
            date={card.date}
            status={card.status}
          />
        ))}
      </CardsContainer>
    </ColumnWrapper>
  );
};

export default Column;
