import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 20px;
  color: white;
`;

const Title = styled.div`
  font-family: Arial, monospace;
`;

const Button = styled.div`
  cursor: pointer;
  font-family: Arial, monospace;
  background-color: white;
  padding: 10px;
  color: black;
  border-radius: 5px;
`;

interface HeaderProps {
  onToggleGuide: () => void;
}
const Header = (props: HeaderProps) => {
  const { onToggleGuide } = props;
  return (
    <HeaderContainer>
      <Title>Timothy's Markdown</Title>
      <Button onClick={onToggleGuide}>Guideline</Button>
    </HeaderContainer>
  );
};

export default Header;
