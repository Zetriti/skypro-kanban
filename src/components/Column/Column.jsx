import React, { useContext } from "react";
import Card from "../Card/Card";

import { ColumnWrapper, ColumnTitle, CardsContainer } from "./Column.styled";
import { ThemeContext } from "../../context/ThemeContext";

const Column = ({ title, cards }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        {cards.map((card) => (
          <Card
            theme={theme}
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
