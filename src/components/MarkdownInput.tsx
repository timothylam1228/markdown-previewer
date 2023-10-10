import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
`;

interface MarkdownInputProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const MarkdownInput = (props: MarkdownInputProps) => {
  const { onChange, value } = props;

  return (
    <InputContainer>
      <StyledTextArea onChange={onChange} value={value} />
    </InputContainer>
  );
};

export default MarkdownInput;
