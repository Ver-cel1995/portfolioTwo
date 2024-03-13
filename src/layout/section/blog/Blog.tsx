import styled from "styled-components";
import { Container } from "../../../components/Container";
import { WrapSectionTittle } from "../../../components/WrapSectionTittle";
import { WrapperBlog } from "./wrapperBlog/WrapperBlog";


export const Blog = () => {
    return (
        <StyledBlog>
            <Container>
                <WrapSectionTittle title="Blog"
                                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum"/>
                <WrapperBlog/>
            </Container>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
    
`