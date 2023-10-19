import styled from "styled-components";

import Logo from "./Logo";
import Menu from "./Menu";

const HeaderContainer = styled.div`
  border-bottom: 2px solid black;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 2em;
`;

interface HeaderProps {
  connected: boolean;
  onConnect: Function;
}

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Menu connected={false} onConnect={() => {}} />
    </HeaderContainer>
  );
};

export default Header;
