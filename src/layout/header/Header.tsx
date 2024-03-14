import styled from "styled-components";
import { Icon } from "../../components/Icon";
import photo from "../../assets/img/headerPhoto.png";
import photoSvg from "../../assets/vectorImg/headerAbstract.svg";
import { Flexwrapper } from "../../components/Flexwrapper";
import { Container } from "../../components/Container";
import { SectionTittle } from "../../components/WrapSectionTittle";
import { theme } from "../../styles/Theme";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flexwrapper justify={"space-between"} align={"center"}>
          <MainTitle>
            I’m madman and <span> Front-end</span> Developer
          </MainTitle>

          <Photo src={photo} />
        </Flexwrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.white};

    position: relative;

    &::before {
      content: "";
      display: inline-block;
      background-image: url(${photoSvg});
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      width: 100%;
      height: 100%;
    }
`;

const MainTitle = styled.h1`
  font-size: 48px;
  max-width: 490px;

  span {
    color: ${theme.colors.yellow};
  }
`;

const Photo = styled.img`
  object-fit: cover;
  width: 325px;
  height: 460px;
`;
