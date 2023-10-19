import styled from "styled-components";

const LogoContainer = styled.div`
  position: relative;
  display: flex;
`;

const LogoMain = styled.h1`
  font-family: "Dela Gothic One";
  position: absolute;
`;

const LogoShadow = styled.h1`
  font-family: "Dela Gothic One";
  color: ${({ theme }) => theme.red};
  margin-left: 3px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoMain>NFLINKS</LogoMain>
      <LogoShadow>NFLINKS</LogoShadow>
    </LogoContainer>
  );
};

export default Logo;
