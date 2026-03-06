import React, { useState } from "react";
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

const Header = () => {
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);
  const [theme] = useState("light");

  const togglePopUser = (e) => {
    e.preventDefault();
    setIsPopUserOpen(!isPopUserOpen);
  };

  const closePopUser = () => {
    setIsPopUserOpen(false);
  };

  return (
    <HeaderWrapper>
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
            <HeaderUser onClick={togglePopUser}>Ivan Ivanov</HeaderUser>
            <PopUser isOpen={isPopUserOpen} onClose={closePopUser} />
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
