import PopUser from "../PopUser/PopUser";
import { useState } from "react";
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
  const [theme] = useState("light"); // Добавьте логику смены темы если нужно

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
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo theme={theme} className="_dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderButton className="_hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderButton>
            <HeaderUser
              href="#user-set-target"
              className="_hover02"
              onClick={togglePopUser}
            >
              Ivan Ivanov
            </HeaderUser>
            <PopUser isOpen={isPopUserOpen} onClose={closePopUser} />
          </HeaderNav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
