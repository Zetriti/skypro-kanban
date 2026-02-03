import Column from "../Column/Column";
import { cardList, columnTitles } from "../../data.js";
import { MainWrapper, MainBlock, MainContent } from "./Main.styled";

const Main = () => {
  const groupedCards = columnTitles.map((title) => ({
    title,
    cards: cardList.filter((card) => card.status === title),
  }));

  return (
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
  );
};

export default Main;
