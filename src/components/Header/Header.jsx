import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PopUser from "../PopUser/PopUser";
import {
  HeaderWrapper,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUser,
} from "./Header.styled";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);

  const togglePopUser = (e) => {
    e.preventDefault();
    setIsPopUserOpen(!isPopUserOpen);
  };

  const closePopUser = () => {
    setIsPopUserOpen(false);
  };

  const userName = user?.name || "Ivan Ivanov";

  return (
    <HeaderWrapper theme={theme}>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo theme={theme} className="_show _light">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </HeaderLogo>
          <HeaderLogo theme={theme} className="_dark">
            <Link to="/">
              <img src="/images/logo_dark.png" alt="logo" />
            </Link>
          </HeaderLogo>
          <HeaderNav>
            <HeaderButton id="btnMainNew">
              <Link to="/add">Создать новую задачу</Link>
            </HeaderButton>
            <HeaderUser theme={theme} onClick={togglePopUser}>
              {userName}
            </HeaderUser>
            <PopUser isOpen={isPopUserOpen} onClose={closePopUser} />
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
