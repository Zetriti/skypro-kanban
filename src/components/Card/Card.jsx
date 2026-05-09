// src/components/Card/Card.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  CardItem,
  Card as CardStyled,
  CardGroup,
  CardButton,
  CardContent,
  CardTitle as StyledCardTitle,
  CardDate,
} from "./Cards.styled";
import { ThemeContext } from "../../context/ThemeContext";

const getThemeColors = (topic, theme) => {
  switch (topic) {
    case "Web Design":
      return {
        bg: theme === "light" ? "#FFE4C2" : "#ff6d00",
        color: theme === "light" ? "#ff6d00" : "#FFE4C2",
      };
    case "Research":
      return {
        bg: theme === "light" ? "#B4FDD1" : "#06b16e",
        color: theme === "light" ? "#06b16e" : "#B4FDD1",
      };
    case "Copywriting":
      return {
        bg: theme === "light" ? "#E9D4FF" : "#9a48f1",
        color: theme === "light" ? "#9a48f1" : "#E9D4FF",
      };
    default:
      return { bg: "#94a6be", color: "#ffffff" };
  }
};

const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $topic, $theme }) =>
    getThemeColors($topic, $theme).bg};
  color: ${({ $topic, $theme }) => getThemeColors($topic, $theme).color};
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

const CardTitle = styled(StyledCardTitle)`
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
`;

const Card = ({ id, text, title, date, status }) => {
  const { theme } = useContext(ThemeContext);
  const isCompleted = status === "Готово";

  return (
    <CardItem key={id}>
      <CardStyled theme={theme}>
        <CardGroup>
          <CardTheme $theme={theme} $topic={text}>
            <p>{text}</p>
          </CardTheme>
          <Link to={`/card/${id}`}>
            <CardButton>
              <div></div>
              <div></div>
              <div></div>
            </CardButton>
          </Link>
        </CardGroup>
        <CardContent>
          <Link to={`/card/${id}`}>
            <CardTitle theme={theme} $completed={isCompleted}>
              {title}
            </CardTitle>
          </Link>
          <CardDate>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <g clipPath="url(#clip0_1_415)">
                <path
                  d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z"
                  stroke="#94A6BE"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>{date}</p>
          </CardDate>
        </CardContent>
      </CardStyled>
    </CardItem>
  );
};

export default Card;
