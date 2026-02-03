import styled from "styled-components";

const BaseButton = styled.button`
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: #565eef;
  color: #ffffff;
  border: none;
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: transparent;
  border: 0.7px solid #565eef;
  color: #565eef;
`;
