import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 19px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 0;
  }
`;
