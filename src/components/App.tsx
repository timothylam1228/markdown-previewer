import Header from "./Header";
import styled from "styled-components";
import MarkdownGuide from "./MarkdownGuide";
import MarkdownInput from "./MarkdownInput";
import MarkdownOutput from "./MarkdownOutput";
import { useState } from "react";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  width: 100%;
`;

const DisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: blue;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 50%;
  }
`;
const MarkdownApp = () => {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const onToggleGuide = () => {
    setShowGuide(!showGuide);
  };
  return (
    <AppContainer>
      <MarkdownGuide showGuide={showGuide} onToggleGuide={onToggleGuide} />
      <HeaderContainer>
        <Header onToggleGuide={onToggleGuide} />
      </HeaderContainer>
      <DisplayContainer>
        <MarkdownInput onChange={handleMarkdownChange} value={markdown} />
        <MarkdownOutput markdown={markdown} />
      </DisplayContainer>
    </AppContainer>
  );
};

export default MarkdownApp;
