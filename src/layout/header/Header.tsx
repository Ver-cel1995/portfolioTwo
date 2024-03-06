import styled from "styled-components";
import { Icon } from "../../components/Icon";
import photo from "../../assets/img/headerPhoto.png";
import photoSvg from "../../assets/vectorImg/headerAbstract.svg";
import { Flexwrapper } from "../../components/Flexwrapper";
import { Container } from "../../components/Container";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Flexwrapper justify={"space-between"} align={"center"}>
          <h1>
            I’m Rayan Adlrdard <span> Front-end</span> Developer
          </h1>

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

const Photo = styled.img`
  object-fit: cover;
`;
