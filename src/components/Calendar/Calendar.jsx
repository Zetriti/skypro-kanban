import React from "react";

const Calendar = ({ isBrowse = false, selectedDate, onDateChange }) => {
  // Пока статичный сентябрь 2023, но для демонстрации добавим обработчики кликов
  const handleDayClick = (day) => {
    if (!isBrowse && onDateChange) {
      // Формируем дату в формате DD.MM.YY (как в макете)
      const dateStr = `${day}.09.23`;
      onDateChange(dateStr);
    }
  };

  // Генерация дней (упрощённо, как в original)
  const days = [
    { day: 28, otherMonth: true },
    { day: 29, otherMonth: true },
    { day: 30, otherMonth: true },
    { day: 31, otherMonth: false },
    { day: 1, otherMonth: false },
    { day: 2, otherMonth: false, weekend: true },
    { day: 3, otherMonth: false, weekend: true },
    { day: 4, otherMonth: false },
    { day: 5, otherMonth: false },
    { day: 6, otherMonth: false },
    { day: 7, otherMonth: false },
    { day: 8, otherMonth: false, current: true },
    { day: 9, otherMonth: false, weekend: true },
    { day: 10, otherMonth: false, weekend: true },
    { day: 11, otherMonth: false },
    { day: 12, otherMonth: false },
    { day: 13, otherMonth: false },
    { day: 14, otherMonth: false },
    { day: 15, otherMonth: false },
    { day: 16, otherMonth: false, weekend: true },
    { day: 17, otherMonth: false, weekend: true },
    { day: 18, otherMonth: false },
    { day: 19, otherMonth: false },
    { day: 20, otherMonth: false },
    { day: 21, otherMonth: false },
    { day: 22, otherMonth: false },
    { day: 23, otherMonth: false, weekend: true },
    { day: 24, otherMonth: false, weekend: true },
    { day: 25, otherMonth: false },
    { day: 26, otherMonth: false },
    { day: 27, otherMonth: false },
    { day: 28, otherMonth: false },
    { day: 29, otherMonth: false },
    { day: 30, otherMonth: false, weekend: true },
    { day: 1, otherMonth: true, weekend: true },
  ];

  return (
    <div className="pop-new-card__calendar calendar">
      <p className="calendar__ttl subttl">Даты</p>
      <div className="calendar__block">
        <div className="calendar__nav">
          <div className="calendar__month">Сентябрь 2023</div>
          <div className="nav__actions">
            <div className="nav__action" data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </div>
            <div className="nav__action" data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="calendar__content">
          <div className="calendar__days-names">
            <div className="calendar__day-name">пн</div>
            <div className="calendar__day-name">вт</div>
            <div className="calendar__day-name">ср</div>
            <div className="calendar__day-name">чт</div>
            <div className="calendar__day-name">пт</div>
            <div className="calendar__day-name -weekend-">сб</div>
            <div className="calendar__day-name -weekend-">вс</div>
          </div>
          <div className="calendar__cells">
            {days.map((d, idx) => (
              <div
                key={idx}
                className={`calendar__cell ${
                  d.otherMonth ? "_other-month" : "_cell-day"
                } ${d.weekend ? "_weekend" : ""} ${
                  d.current ? "_current" : ""
                } ${
                  selectedDate &&
                  parseInt(selectedDate.split(".")[0]) === d.day &&
                  !d.otherMonth
                    ? "_active-day"
                    : ""
                }`}
                onClick={() => handleDayClick(d.day)}
              >
                {d.day}
              </div>
            ))}
          </div>
        </div>

        <input type="hidden" id="datepick_value" defaultValue="08.09.2023" />
        <div className="calendar__period">
          <p className="calendar__p date-end">
            {isBrowse ? "Срок исполнения:" : "Выберите срок исполнения"}{" "}
            <span className="date-control">
              {selectedDate || (isBrowse ? "09.09.23" : "")}
            </span>
            {!isBrowse && "."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
