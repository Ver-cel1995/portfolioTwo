import styled from "styled-components";
import { WrapSectionTittle } from "../../../components/WrapSectionTittle";
import { Educations } from "./educations/Educations";
import { Container } from "../../../components/Container";

export const Education = () => {
    return (
        <StyledEducation>
            <Container>
                <WrapSectionTittle title="Education" 
                                text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" />

                <Educations/>
            </Container>
        </StyledEducation>
    );
};

const StyledEducation = styled.section`

`