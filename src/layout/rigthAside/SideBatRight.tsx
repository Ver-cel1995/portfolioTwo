import styled from "styled-components";
import { Icon } from "../../components/Icon";
import { theme } from "../../styles/Theme";

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <WrapIcon>
        <Icon iconId="home" width="18" height="18" viewbox="0 0 18 18" />
      </WrapIcon>
      <WrapIcon>
        <Icon iconId="code" width="18" height="18" viewbox="0 0 18 18" />
      </WrapIcon>
      <WrapIcon>
        <Icon iconId="student" width="18" height="18" viewbox="0 0 18 18" />
      </WrapIcon>
      <WrapIcon>
        <Icon iconId="job" width="15" height="15" viewbox="0 0 15 15" />
      </WrapIcon>
      <WrapIcon>
        <Icon iconId="feather" width="13" height="15" viewbox="0 0 13 15"/>
      </WrapIcon>
      <WrapIcon>
        <Icon iconId="message" width="13" height="15" viewbox="0 0 13 15"/>
      </WrapIcon>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  max-width: 108px;
  padding: 52px 34px;
  background-color: #fafafa;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;

  position: fixed;
  right: 40px;
`;

const WrapIcon = styled.a`
  text-align: center;
  border-radius: 50%;
  background-color: #F0F0F6;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 43px;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${theme.colors.yellow}
  }

`;
