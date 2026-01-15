import Column from "../Column/Column";

const Main = () => {
  const columnsData = [
    {
      title: "Без статуса",
      cards: [
        {
          theme: "orange",
          text: "Web Design",
          title: "Название задачи",
          date: "30.10.23",
        },
        {
          theme: "green",
          text: "Research",
          title: "Название задачи",
          date: "30.10.23",
        },
        {
          theme: "orange",
          text: "Web Design",
          title: "Название задачи",
          date: "30.10.23",
        },
        {
          theme: "purple",
          text: "Copywriting",
          title: "Название задачи",
          date: "30.10.23",
        },
        {
          theme: "orange",
          text: "Web Design",
          title: "Название задачи",
          date: "30.10.23",
        },
      ],
    },
    {
      title: "Нужно сделать",
      cards: [
        {
          theme: "green",
          text: "Research",
          title: "Название задачи",
          date: "30.10.23",
        },
      ],
    },
    {
      title: "В работе",
      cards: [
        {
          theme: "green",
          text: "Research",
          title: "Название задачи",
          date: "30.10.23",
        },
        {
          theme: "purple",
          text: "Copywriting",
          title: "Название задачи",
          date: "30.10.23",
        },
        {
          theme: "orange",
          text: "Web Design",
          title: "Название задачи",
          date: "30.10.23",
        },
      ],
    },
    {
      title: "Тестирование",
      cards: [
        {
          theme: "green",
          text: "Research",
          title: "Название задачи",
          date: "30.10.23",
        },
      ],
    },
    {
      title: "Готово",
      cards: [
        {
          theme: "green",
          text: "Research",
          title: "Название задачи",
          date: "30.10.23",
        },
      ],
    },
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columnsData.map((column, index) => (
              <Column key={index} title={column.title} cards={column.cards} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
