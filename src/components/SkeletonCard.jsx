// SkeletonCard.jsx (без изменений, просто проверьте наличие)
import React, { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const Skelet = styled.div`
  width: 220px;
  height: 130px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme === "light" ? "#FFFFFF" : "#20202C"};
`;
const SkeletonLeft = styled.div`
  padding-left: 13px;
`;
const SkeletonTop = styled.div`
  display: flex;
  gap: 90px;
  margin-left: 13px;
  padding-top: 15px;
  margin-bottom: 15px;
`;

const SkeletonCard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Skelet theme={theme}>
      <SkeletonTop>
        <Skeleton height={20} width={82} borderRadius={18} />
        <Skeleton height={4} width={18} borderRadius={0} />
      </SkeletonTop>
      <SkeletonLeft>
        <Skeleton
          height={13}
          width={113}
          borderRadius={0}
          style={{ marginBottom: "35px", marginTop: "0px" }}
        />
        <Skeleton height={13} width={58} borderRadius={0} />
      </SkeletonLeft>
    </Skelet>
  );
};
export default SkeletonCard;
