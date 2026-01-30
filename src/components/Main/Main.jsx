import Column from "../Column/Column";
import { cardList, columnTitles } from "../../data.js";

const Main = () => {
  const groupedCards = columnTitles.map((title) => ({
    title,
    cards: cardList.filter((card) => card.status === title),
  }));

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {groupedCards.map((column, index) => (
              <Column key={index} title={column.title} cards={column.cards} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
