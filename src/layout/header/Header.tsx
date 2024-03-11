import styled from "styled-components";
import { Icon } from "../../components/Icon";
import photo from "../../assets/img/I'm.png";
import photoSvg from "../../assets/vectorImg/headerAbstract.svg";
import { Flexwrapper } from "../../components/Flexwrapper";
import { Container } from "../../components/Container";
import { SectionTittle } from "../../components/WrapSectionTittle";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flexwrapper justify={"space-between"} align={"center"}>
          <MainTitle>
            I’m Russian idiot and <span> Front-end</span> Developer
          </MainTitle>

          <Photo src={photo} />
        </Flexwrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #fff;

  ${Flexwrapper} {
    position: relative;

    &::before {
      content: "";
      display: inline-block;
      background-image: url(${photoSvg});
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
    }
  }
`;

const MainTitle = styled.h1`
  font-size: 48px;
  max-width: 490px;

  span {
    color: #ffb400;
  }
`;

const Photo = styled.img`
  object-fit: cover;
  width: 325px;
  height: 460px;
`;
