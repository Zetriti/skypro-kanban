// src/components/Card/Card.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  CardItem,
  Card as CardStyled,
  CardGroup,
  CardButton,
  CardContent,
  CardTitle,
  CardDate,
} from "./Cards.styled";

const getThemeColors = (topic) => {
  switch (topic) {
    case "Web Design":
      return { bg: "#ffe4c2", color: "#ff6d00" };
    case "Research":
      return { bg: "#b4fdd1", color: "#06b16e" };
    case "Copywriting":
      return { bg: "#e9d4ff", color: "#9a48f1" };
    default:
      return { bg: "#94a6be", color: "#ffffff" };
  }
};

const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $topic }) => getThemeColors($topic).bg};
  color: ${({ $topic }) => getThemeColors($topic).color};
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

const Card = ({ id, text, title, date }) => {
  return (
    <CardItem key={id}>
      <CardStyled>
        <CardGroup>
          <CardTheme $topic={text}>
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
            <CardTitle>{title}</CardTitle>
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
