import React, {
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Droppable } from "@hello-pangea/dnd";
import Card from "../Card/Card";
import { ThemeContext } from "../../context/ThemeContext";
import { ColumnWrapper, ColumnTitle, CardsContainer } from "./Column.styled";
import useIsMobile from "../../hooks/useIsMobile";

const Column = ({
  title,
  cards,
  isOver,
  overIndex,
  isAnyDragging,
  draggingTaskId,
  sourceColumnId,
}) => {
  const { theme } = useContext(ThemeContext);
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const cardWidth = 220;
  const cardHeight = 130;
  const gap = 10;

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft);
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (isMobile && el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile, handleScroll]);

  const isSameColumn = sourceColumnId === title;
  const draggingCardIndex = cards.findIndex(
    (card) => (card._id || card.id) === draggingTaskId,
  );

  const showEndIndicator =
    isAnyDragging && !(isOver && overIndex === cards.length);

  const getIndicatorStyle = (index) => {
    let effectiveIndex = index;
    if (isSameColumn && draggingCardIndex !== -1 && index > draggingCardIndex) {
      effectiveIndex = index - 1;
    }

    if (isMobile) {
      const left = effectiveIndex * (cardWidth + gap) - scrollLeft;
      return {
        position: "absolute",
        left: `${left}px`,
        top: 0,
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        borderRadius: 10,
        border: "2px dashed #94a6be",
        background: "transparent",
        pointerEvents: "none",
        transition: "left 0.1s ease",
      };
    } else {
      const top = effectiveIndex * (cardHeight + gap);
      return {
        position: "absolute",
        left: 0,
        right: 0,
        height: `${cardHeight}px`,
        top: `${top}px`,
        borderRadius: 10,
        border: "2px dashed #94a6be",
        background: "transparent",
        pointerEvents: "none",
      };
    }
  };

  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Droppable
        droppableId={title}
        direction={isMobile ? "horizontal" : "vertical"}
      >
        {(provided, snapshot) => (
          <CardsContainer
            ref={(el) => {
              provided.innerRef(el);
              containerRef.current = el;
            }}
            {...provided.droppableProps}
            style={{
              background:
                snapshot.isDraggingOver && !isMobile
                  ? "#e0f7fa"
                  : "transparent",
              transition: "background 0.2s",
            }}
          >
            {cards.map((card, index) => (
              <Card
                theme={theme}
                key={card._id || card.id}
                id={card._id || card.id}
                text={card.topic}
                title={card.title}
                date={card.date}
                status={card.status}
                index={index}
              />
            ))}

            {isOver && overIndex !== null && (
              <div style={getIndicatorStyle(overIndex)} />
            )}

            {showEndIndicator && (
              <div style={getIndicatorStyle(cards.length)} />
            )}

            {provided.placeholder}
          </CardsContainer>
        )}
      </Droppable>
    </ColumnWrapper>
  );
};

export default Column;
