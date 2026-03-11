import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 630px;
  margin: 40px auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Title = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const ThemeTag = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  background-color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ffe4c2";
      case "green":
        return "#b4fdd1";
      case "purple":
        return "#e9d4ff";
      default:
        return "#94a6be";
    }
  }};
  color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ff6d00";
      case "green":
        return "#06b16e";
      case "purple":
        return "#9a48f1";
      default:
        return "#ffffff";
    }
  }};
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const StatusSection = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: ${({ $isEditable }) => ($isEditable ? "pointer" : "default")};
  background-color: ${({ $active, $isEditable }) =>
    $active ? ($isEditable ? "#9a48f1" : "#94a6be") : "transparent"};
  color: ${({ $active }) => ($active ? "#ffffff" : "#94a6be")};
  &:hover {
    background-color: ${({ $isEditable }) => $isEditable && "#9a48f1"};
    color: ${({ $isEditable }) => $isEditable && "#ffffff"};
  }
  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ $isEditable }) => ($isEditable ? "#ffffff" : "#eaeef6")};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: vertical;
  color: #000;
  &[readonly] {
    background: #eaeef6;
  }
`;

export const CategorySection = styled.div`
  margin-bottom: 20px;
  &.theme-down {
    display: none;
    @media (max-width: 495px) {
      display: block;
    }
  }
`;

export const CategoryTitle = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoryThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
`;

export const CategoryTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  background-color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ffe4c2";
      case "green":
        return "#b4fdd1";
      case "purple":
        return "#e9d4ff";
      default:
        return "#94a6be";
    }
  }};
  color: ${({ $color }) => {
    switch ($color) {
      case "orange":
        return "#ff6d00";
      case "green":
        return "#06b16e";
      case "purple":
        return "#9a48f1";
      default:
        return "#ffffff";
    }
  }};
  opacity: ${({ $active }) => ($active ? 1 : 0.4)};
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
`;

export const LeftButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: #565eef;
  color: #ffffff;
  &:hover {
    background-color: #33399b;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 0.7px solid #565eef;
  color: #565eef;
  &:hover {
    background-color: #565eef;
    color: #ffffff;
  }
`;

export const DangerButton = styled(Button)`
  background-color: transparent;
  border: 0.7px solid #565eef;
  color: #565eef;
  &:hover {
    background-color: #565eef;
    color: #ffffff;
  }
`;

export const CloseButton = styled(PrimaryButton)`
  @media (max-width: 495px) {
    width: 100%;
  }
`;
