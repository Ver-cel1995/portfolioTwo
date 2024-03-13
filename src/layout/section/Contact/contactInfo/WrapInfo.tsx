import styled from "styled-components";
import { Icon } from "../../../../components/Icon";
import { theme } from "../../../../styles/Theme";

type WrapInfoPropsType = {
  country: string;
  city: string;
  streat: string;
  local: string;
  cities: string;
  outdoors: string;
  icon?: React.ReactNode
};

export const WrapInfo = (props: WrapInfoPropsType) => {
  return (
    <StyledWrapInfo>
      <WrapIcon>
        {props.icon}
      </WrapIcon>
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
  padding: 0 25px 15px;
  color: ${theme.colors.grey};
`;
const WrapIcon = styled.a`
  text-align: center;
  border-radius: 50%;
  background-color: ${theme.colors.yellow};
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 34px auto;
  cursor: default;
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
`;
const CountryText = styled.p`
  font-weight: 400;
`;
