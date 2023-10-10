import styled from "styled-components";
import Markdown from "react-markdown";

const OutputContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #e0dddc;
`;

interface MarkdownOutputProps {
  markdown: string;
}
const MarkdownOutput = (prpos: MarkdownOutputProps) => {
  const { markdown } = prpos;
  return (
    <OutputContainer>
      <Markdown>{markdown}</Markdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
