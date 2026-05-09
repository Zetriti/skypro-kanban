import styled from "styled-components";

export const PopBrowse = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) =>
    theme === "light" ? "#FFFFFF" : "#20202C"};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid
    ${({ theme }) => (theme === "light" ? " #d4dbe5" : "#4E5566")};
  position: relative;
  cursor: default;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: ${({ theme }) => (theme === "light" ? "#000" : "#FFFFFF")};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const ThemeTop = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  background-color: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
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

export const StatusP = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#FFFFFF")};
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
  background-color: ${({ $active }) => ($active ? "#94a6be" : "transparent")};
  color: ${({ theme }) =>
    theme === "light"
      ? ({ $active }) => ($active ? "#FFFFFF" : "#94a6be")
      : ({ $active }) => ($active ? "#151419" : "#94a6be")};

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    color: ${({ theme }) =>
      theme === "light"
        ? ({ $active }) => ($active ? "#FFFFFF" : "#94a6be")
        : ({ $active }) => ($active ? "#151419" : "#94a6be")};
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 10px;
    white-space: nowrap;
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 660px) {
    display: block;
  }
`;

export const FormBrowse = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subttl = styled.label`
  color: ${({ theme }) => (theme === "light" ? "#000" : "#FFFFFF")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  color: ${({ theme }) => (theme === "light" ? "#000" : "#FFFFFF")};
  background: ${({ theme }) =>
    theme === "light"
      ? ({ $isEditable }) => ($isEditable ? "#ffffff" : "#eaeef6")
      : ({ $isEditable }) => ($isEditable ? "#20202C" : "#151419")};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: vertical;
  &[readonly] {
    ${({ theme }) => (theme === "light" ? "#eaeef6" : "#151419")};
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const ThemeDownCategories = styled.div`
  margin-bottom: 20px;
  display: none;
  @media (max-width: 495px) {
    display: block;
  }
`;

export const CategoriesP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  background-color: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  ${({ $hide }) => $hide && "display: none;"}
`;

export const PopBrowseBtnEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  ${({ $hide }) => $hide && "display: none;"}
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const BtnBor = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid
    ${({ theme }) => (theme === "light" ? "#565eef" : "#FFFFFF")};
  outline: none;
  background: transparent;
  color: ${({ theme }) => (theme === "light" ? "#565eef" : "#FFFFFF")};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #565eef;
    color: #ffffff;
    border: 0.7px solid #565eef;
    a {
      color: #ffffff;
    }
  }
  a {
    color: #565eef;
    text-decoration: none;
  }
  @media (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const BtnBg = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #565eef;
  }
  a {
    color: #ffffff;
    text-decoration: none;
  }
  @media (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;
