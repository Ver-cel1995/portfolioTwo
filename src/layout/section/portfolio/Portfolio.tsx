import styled from "styled-components";
import { Container } from "../../../components/Container";
import { WrapSectionTittle } from "../../../components/WrapSectionTittle";
import { Portfolios } from "./portfolios/Portfolios";


export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <WrapSectionTittle title="Portfolio"
                                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"/>
                <Portfolios/>
            </Container>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
    
`