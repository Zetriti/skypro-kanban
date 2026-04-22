import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #eaeef6;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #565eef;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  background-color: #565eef;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #33399b;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Text>Страница не найдена</Text>
      <StyledLink to="/">На главную</StyledLink>
    </Container>
  );
};

export default NotFound;
