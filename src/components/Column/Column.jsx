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
            key={card.id}
            id={card.id}
            theme={card.theme}
            text={card.text}
            title={card.title}
            date={card.date}
          />
        ))}
      </CardsContainer>
    </ColumnWrapper>
  );
};

export default Column;
