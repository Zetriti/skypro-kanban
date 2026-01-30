import Card from "../Card/Card";

const Column = ({ title, cards }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
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
      </div>
    </div>
  );
};

export default Column;
