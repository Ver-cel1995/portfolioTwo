import styled from "styled-components";
import { Icon } from "../../components/Icon";
import photo from "../../assets/img/headerPhoto.png";
import photoSvg from "../../assets/vectorImg/headerAbstract.svg";
import { Flexwrapper } from "../../components/Flexwrapper";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Header = () => {
  return (
    <StyledHeader>
        <Tilt
            className="tilt-img"
            tiltMaxAngleX={35}
            tiltMaxAngleY={25}
            perspective={3000}
            scale={1}
            transitionSpeed={5000}
        >
          <WrapImg src={photoSvg}/>
        </Tilt>
      <Container>
        <Flexwrapper justify={"space-around"} align={"center"}>
          <MainTitle>
            <h4>I'm Aleksei and</h4>
          <Typewriter
            options={{
              strings: [`<p>Front-end</p>` + " " + "Developer"],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
              delay: 70
            }}
          />
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
`;

const WrapImg = styled.img`
  position: absolute;

  right: 80px;
  bottom: -450px;

`

const MainTitle = styled.h1`
  font-size: 48px;
  width: 515px;

  p {
    display: inline;
    color: ${theme.colors.yellow};
  }
`;

const Photo = styled.img`
  object-fit: cover;
  width: 325px;
  height: 460px;
`;
