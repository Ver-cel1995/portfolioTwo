import styled from "styled-components";
import photo from "../../assets/img/photoSidebar.jpeg";
import { Flexwrapper } from "../../components/Flexwrapper";
import { theme } from "../../styles/Theme";
import { IconSidebar } from "./iconSidebar/IconSidebar";
import { Icon } from "../../components/Icon";
import { InfoAside } from "./infoAside/InfoAside";
import { WrapInfo } from "./wrapperInfo/WrapInfo";
import { arrayLanguages, arraySkill } from "./infoAside/arrayAside/ArrayAside";
import { ExtraSkills } from "./extraSkills/ExtraSkills";
import { StyledButton } from "../../components/Button";
import vector from "../../assets/vectorImg/download.svg";

export const SidebarLeft = () => {
  return (
    <StyledSidebarLeft>
      <Flexwrapper direction="column" align="center">
        <Photo src={photo} />
        <h3>Rayan Adlardard</h3>
        <h1>Font-end Developer</h1>
        <Flexwrapper gap="15px">
          <IconSidebar
            icon={
              <Icon
                iconId="facebook"
                width="6px"
                height="12px"
                viewbox="0 0 6 12"
              />
            }
          />
          <IconSidebar
            icon={
              <Icon
                iconId="instagram"
                width="12px"
                height="12px"
                viewbox="0 0 12 12"
              />
            }
          />
          <IconSidebar
            icon={
              <Icon
                iconId="twitter"
                width="12px"
                height="10px"
                viewbox="0 0 12 10"
              />
            }
          />
          <IconSidebar
            icon={
              <Icon
                iconId="facebook"
                width="6px"
                height="12px"
                viewbox="0 0 6 12"
              />
            }
          />
          <IconSidebar
            icon={
              <Icon
                iconId="youtube"
                width="12px"
                height="9px"
                viewbox="0 0 12 9"
              />
            }
          />
          <IconSidebar
            icon={
              <Icon
                iconId="dribble"
                width="12px"
                height="12px"
                viewbox="0 0 12 12"
              />
            }
          />
          {/* Нужно взять компоненту из Contact и видоизменить */}
        </Flexwrapper>
        <InfoAside />
        <WrapInfo items={arrayLanguages} title="Languages" />
        <WrapInfo items={arraySkill} title="Skills" />
        <ExtraSkills/>
        <StyledButton>Download cv</StyledButton>
      </Flexwrapper>
    </StyledSidebarLeft>
  );
};

const StyledSidebarLeft = styled.aside`
  min-width: 305px;
  background-color: ${theme.colors.white};
  padding: 50px 45px 25px 40px;
  height: 100%;

  h1 {
    font-size: 15px;
    color: ${theme.colors.grey};
  }

  h3 {
    margin: 31px 0 15px;
  }

  ${StyledButton} {
    width: 220px;

    &::before {
        content: "";
        width: 16px;
        height: 16px;
        position: absolute;
        background: url(${vector}) no-repeat;
        right: 25px;
    }
  }
`;

const Photo = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
