// Column.styled.js
import styled from "styled-components";

export const ColumnWrapper = styled.div`
  width: 220px;
  display: block;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
  @media screen and (max-width: 1200px) {
    margin: 0;
    margin-bottom: 20px;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  /* Десктоп: placeholder скрыт, работают кастомные индикаторы */
  [data-rbd-placeholder-context-id] {
    display: none !important;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: visible;
    min-height: 140px;
    align-items: flex-start;

    /* Мобильный: включаем и стилизуем встроенный placeholder */
    [data-rbd-placeholder-context-id] {
      display: flex !important;
      flex-shrink: 0;
      width: 220px !important;
      min-width: 220px !important;
      height: 130px !important;
      border: 2px dashed #94a6be !important;
      border-radius: 10px !important;
      background: transparent !important;
      margin-right: 10px; /* такой же отступ, как у карточек */
      box-sizing: border-box !important;
      position: relative !important;
      left: auto !important;
      top: auto !important;
    }
  }
`;
