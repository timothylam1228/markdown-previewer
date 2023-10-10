import React from "react";
import styled from "styled-components";

const GuideContainer = styled.div<{ showGuide: boolean }>`
  background-color: white;
  display: ${(props) => (props.showGuide ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
`;

const Guide = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 20px;
  border: 2px solid black;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
  border: 2px solid black;
  background-color: white;
  color: black;
  font-family: Arial, monospace;

  @media (max-width: 768px) {
    font-size: 12px;
    width: 90%;
  }
`;

const CloseButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
  background-color: black;
  padding: 10px;
  color: white;
`;

interface MarkdownGuideProps {
  showGuide: boolean;
  onToggleGuide: () => void;
}

const MarkdownGuide: React.FC<MarkdownGuideProps> = (props) => {
  const { showGuide, onToggleGuide } = props;
  return (
    <GuideContainer showGuide={showGuide}>
      <Guide>
        <CloseButton onClick={onToggleGuide}>Close</CloseButton>
        <code>*Italic*: Use _Italic_ or *Italic*.</code>
        <code>**Bold**: Use __Bold__ or **Bold**.</code>

        <code>
          Headings: - Heading 1: # Heading 1 - Heading 2: ## Heading 2
        </code>

        <code>Links: [Link](http://a.com).</code>
        <code>Images: ![Image](http://url/a.png).</code>

        <code>Blockquotes: Begin a line with &gt;.</code>

        <code>
          Lists: - Unordered: - * List - - List - Ordered: 1. One, 2. Two, 3.
          Three
        </code>

        <code>
          Horizontal Rules: - --- for a plain line. - *** for a decorative line.
        </code>

        <code>
          Inline Code: Enclose text with backticks like \`Inline code\`.
        </code>

        <code>
          Code Blocks: Surround code with triple backticks or indent with four
          spaces. \``` # code block print '3 backticks or' print 'indent 4
          spaces' \```
        </code>
      </Guide>
    </GuideContainer>
  );
};

export default MarkdownGuide;
