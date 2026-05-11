import styled from "styled-components";

export const CardItem = styled.div`
  margin-bottom: 10px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
  @media screen and (max-width: 1200px) {
    margin-right: 10px;
    margin-bottom: 0;
    flex-shrink: 0;
  }
`;

export const Card = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ theme }) =>
    theme === "light" ? "#FFFFFF" : "#20202C"};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  box-shadow: ${({ $isDragging }) =>
    $isDragging ? "0px 10px 39px rgba(148,166,190,0.4)" : "none"};
  transition: box-shadow 0.2s;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#FFFFFF")};
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;
