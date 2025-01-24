import styled from "styled-components";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>My Portfolio</Title>
      <Menu />
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
