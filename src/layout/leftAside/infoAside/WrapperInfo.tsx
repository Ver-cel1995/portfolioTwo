import { styled } from "styled-components";
import { Flexwrapper } from "../../../components/Flexwrapper";
import { theme } from "../../../styles/Theme";

type WrapperInfoPropsType = {
  value: string;
  info: string;
};

type ColorInfo = {
  color?: string;
};

export const WrapperInfo = (props: WrapperInfoPropsType & ColorInfo) => {
  return (
    <StyledWrapperIngo>
      <Value>{props.value}</Value>
      <Info color={props.color}>{props.info}</Info>
    </StyledWrapperIngo>
  );
};

const StyledWrapperIngo = styled.div`
    display: flex; 
    justify-content: space-between;
    margin-bottom: 9px;
`;
const Value = styled.p`
  background-color: ${theme.colors.yellow};
`;
const Info = styled.p<ColorInfo>`
  color: ${(props) => props.color};
`;
