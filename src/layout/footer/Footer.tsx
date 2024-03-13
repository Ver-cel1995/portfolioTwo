import styled from "styled-components";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
        <Container>
            <Copyright><span>©</span> 2021 All Rights Reserved.Ojjomedia</Copyright>
        </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.section``;
const Copyright = styled.h4`
    text-align: center;
    background-color: ${theme.colors.white};
    padding: 18px 0;
    font-weight: 400;
`;
