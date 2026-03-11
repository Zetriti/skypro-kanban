import React from "react";
import * as S from "./Calendar.styled";

const Calendar = ({ isBrowse = false, selectedDate, onDateChange }) => {
  const handleDayClick = (day) => {
    if (!isBrowse && onDateChange) {
      const dateStr = `${day}.09.23`;
      onDateChange(dateStr);
    }
  };

  const days = [
    { id: "day-0", day: 28, otherMonth: true },
    { id: "day-1", day: 29, otherMonth: true },
    { id: "day-2", day: 30, otherMonth: true },
    { id: "day-3", day: 31, otherMonth: false },
    { id: "day-4", day: 1, otherMonth: false },
    { id: "day-5", day: 2, otherMonth: false, weekend: true },
    { id: "day-6", day: 3, otherMonth: false, weekend: true },
    { id: "day-7", day: 4, otherMonth: false },
    { id: "day-8", day: 5, otherMonth: false },
    { id: "day-9", day: 6, otherMonth: false },
    { id: "day-10", day: 7, otherMonth: false },
    { id: "day-11", day: 8, otherMonth: false, current: true },
    { id: "day-12", day: 9, otherMonth: false, weekend: true },
    { id: "day-13", day: 10, otherMonth: false, weekend: true },
    { id: "day-14", day: 11, otherMonth: false },
    { id: "day-15", day: 12, otherMonth: false },
    { id: "day-16", day: 13, otherMonth: false },
    { id: "day-17", day: 14, otherMonth: false },
    { id: "day-18", day: 15, otherMonth: false },
    { id: "day-19", day: 16, otherMonth: false, weekend: true },
    { id: "day-20", day: 17, otherMonth: false, weekend: true },
    { id: "day-21", day: 18, otherMonth: false },
    { id: "day-22", day: 19, otherMonth: false },
    { id: "day-23", day: 20, otherMonth: false },
    { id: "day-24", day: 21, otherMonth: false },
    { id: "day-25", day: 22, otherMonth: false },
    { id: "day-26", day: 23, otherMonth: false, weekend: true },
    { id: "day-27", day: 24, otherMonth: false, weekend: true },
    { id: "day-28", day: 25, otherMonth: false },
    { id: "day-29", day: 26, otherMonth: false },
    { id: "day-30", day: 27, otherMonth: false },
    { id: "day-31", day: 28, otherMonth: false },
    { id: "day-32", day: 29, otherMonth: false },
    { id: "day-33", day: 30, otherMonth: false, weekend: true },
    { id: "day-34", day: 1, otherMonth: true, weekend: true },
  ];

  const selectedDay = selectedDate
    ? parseInt(selectedDate.split(".")[0])
    : null;

  return (
    <S.CalendarContainer>
      <S.CalendarTitle>Даты</S.CalendarTitle>
      <S.CalendarBlock>
        <S.CalendarNav>
          <S.CalendarMonth>Сентябрь 2023</S.CalendarMonth>
          <S.NavActions>
            <S.NavAction data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </S.NavAction>
            <S.NavAction data-action="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </S.NavAction>
          </S.NavActions>
        </S.CalendarNav>
        <S.CalendarContent>
          <S.DaysNames>
            <S.DayName>пн</S.DayName>
            <S.DayName>вт</S.DayName>
            <S.DayName>ср</S.DayName>
            <S.DayName>чт</S.DayName>
            <S.DayName>пт</S.DayName>
            <S.DayName>сб</S.DayName>
            <S.DayName>вс</S.DayName>
          </S.DaysNames>
          <S.Cells>
            {days.map((d) => (
              <S.Cell
                key={d.id}
                className={`${d.otherMonth ? "other-month" : "cell-day"} ${
                  d.current ? "current" : ""
                } ${selectedDay === d.day && !d.otherMonth ? "active-day" : ""}`}
                onClick={() => handleDayClick(d.day)}
              >
                {d.day}
              </S.Cell>
            ))}
          </S.Cells>
        </S.CalendarContent>

        <input type="hidden" id="datepick_value" defaultValue="08.09.2023" />
        <S.CalendarPeriod>
          <S.PeriodText>
            {isBrowse ? "Срок исполнения:" : "Выберите срок исполнения"}{" "}
            <span>{selectedDate || (isBrowse ? "09.09.23" : "")}</span>
            {!isBrowse && "."}
          </S.PeriodText>
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.CalendarContainer>
  );
};

export default Calendar;
