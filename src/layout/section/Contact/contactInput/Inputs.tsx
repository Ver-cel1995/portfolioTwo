import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type InputsPropsType = {
  text: string;
  placeholder?: string;
  as?: string;
};

export const Inputs = (props: InputsPropsType) => {
  return (
    <WrapInputs>
      <TextInputs>{props.text}</TextInputs>
      <StyledInputs
        placeholder={props.placeholder}
        as={props.as}
      ></StyledInputs>
    </WrapInputs>
  );
};

const WrapInputs = styled.div``;

const TextInputs = styled.p`
  margin-bottom: 8px;
  color: ${theme.colors.grey};
`;

const StyledInputs = styled.input`
  margin-bottom: 25px;
  background-color: rgb(240, 240, 246);
  max-width: 521px;
  width: 100%;
  border: 1px;
  padding: 18px;
  color: #000;
  font-weight: bold;

  &:focus-visible {
    outline: 2px solid ${theme.colors.yellow};
  }
`;
