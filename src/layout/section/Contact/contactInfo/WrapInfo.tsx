import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type WrapInfoPropsType = {
  country?: string;
  city?: string;
  streat?: string;
  local?: string;
  cities?: string;
  outdoors?: string;
  icon?: React.ReactNode;
};

type WrapIncoProipsType = {
  width?: string,
  height?: string,
  cursor?: string
}

export const WrapInfo = (props: WrapInfoPropsType) => {
  return (
    <StyledWrapInfo>
      <WrapIcon width="34px" height="34px">{props.icon}</WrapIcon>
      <WrapperContacrt>
        <Country>{props.country}</Country>
        <CountryText>{props.local}</CountryText>
      </WrapperContacrt>
      <WrapperContacrt>
        <Country>{props.city}</Country>
        <CountryText>{props.cities}</CountryText>
      </WrapperContacrt>
      <WrapperContacrt>
        <Country>{props.streat}</Country>
        <CountryText>{props.outdoors}</CountryText>
      </WrapperContacrt>
    </StyledWrapInfo>
  );
};

const StyledWrapInfo = styled.div`
  background-color: ${theme.colors.white};
  min-width: 370px;
  padding: 0 25px 14px;
  color: ${theme.colors.grey};
`;
export const WrapIcon = styled.a<WrapIncoProipsType>`
  text-align: center;
  border-radius: 50%;
  background-color: ${theme.colors.yellow};
  width: ${props => props.width || "34px"};
  height: ${props => props.height || "34px"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 34px auto;
  cursor: ${props => props.cursor || "default"};
`;

const WrapperContacrt = styled.div`
  display: flex;
  justify-content: space-between;

  &:nth-child(2) {
    margin-bottom: 16px;
  }
  &:nth-child(3) {
    margin-bottom: 16px;
  }
`;
const Country = styled.p`
  font-weight: bold;

  &::selection {
    color: white;
    background-color: ${theme.colors.yellow};
  }
`;
const CountryText = styled.p`
  font-weight: 400;

  &::selection {
    color: white;
    background-color: ${theme.colors.yellow};
  }
`;
