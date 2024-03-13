import styled from "styled-components";
import { WrapSectionTittle } from "../../../components/WrapSectionTittle";
import { Container } from "../../../components/Container";
import {  History } from "./History";

export const WorkHistory = () => {
    return (
        <StyledWorkHistory>
            <Container>
                <WrapSectionTittle title="Work History" 
                                text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" />

                <History/>
            </Container>
        </StyledWorkHistory>
    );
};

const StyledWorkHistory = styled.section`

`