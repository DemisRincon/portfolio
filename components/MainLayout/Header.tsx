import styled from "styled-components";
import Menu from "./Menu";
import WrapperFadeIn from "../WrapperFadeIn";

const name = "Demis Rincon";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <WrapperFadeIn fromTop>
        <Title>{name}</Title>
      </WrapperFadeIn>
      <WrapperFadeIn fromTop>
        <Menu />
      </WrapperFadeIn>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  color: #343a40;
`;

export default Header;
