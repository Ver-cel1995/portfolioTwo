import styled from "styled-components";
import { Container } from "../../../components/Container";
import { WrapSectionTittle } from "../../../components/WrapSectionTittle";
import { Flexwrapper } from "../../../components/Flexwrapper";
import { Services } from "./Services";

export const MyServices = () => {
  return (
    <StyldeServices>
      <Container>
        <WrapSectionTittle
          title={"my services"}
          text={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"
          }
        />
        <Flexwrapper wrap="wrap" justify="space-between" gap="20px">
          <Services
            iconId={"coding"}
            title={"Web Development"}
            text={"blog, e-commerce"}
          />
          <Services
            iconId={"UI/UX"}
            title={"Web Development"}
            text={"Mobile app, website design"}
          />
          <Services
            iconId={"microphone"}
            title={"Web Development"}
            text={"Voice Over, Beat Making"}
          />
          <Services
            iconId={"gameDeveloper"}
            title={"Web Development"}
            text={"Character Design, Props & Objects"}
          />
          <Services
            iconId={"photographer"}
            title={"Web Development"}
            text={"portrait, product photography"}
          />
          <Services
            iconId={"popUp"}
            title={"Web Development"}
            text={"sale of services, broadcast, distribution"}
          />
        </Flexwrapper>
      </Container>
    </StyldeServices>
  );
};

const StyldeServices = styled.section``;
