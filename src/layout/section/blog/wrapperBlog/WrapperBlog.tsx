import styled from "styled-components";
import { Flexwrapper } from "../../../../components/Flexwrapper";
import { WrapBlog } from "./WrapBlog";
import portfolio1 from "../../../../assets/img/portfolio1.png";
import portfolio2 from "../../../../assets/img/portfolio2.png";
import portfolio3 from "../../../../assets/img/portfolio3.png";


export const WrapperBlog = () => {
    return (
        <StyledWrapperBlog>
            <Flexwrapper justify="center" gap="20px">
                <WrapBlog photo={portfolio1}
                            title="How to make web tempates"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
                            link="Learn more"/>
                <WrapBlog photo={portfolio2}
                            title="How to make web tempates"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
                            link="Learn more"/>
                <WrapBlog photo={portfolio3}
                            title="How to make web tempates"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
                            link="Learn more"/>
            </Flexwrapper>
        </StyledWrapperBlog>
    );
};

const StyledWrapperBlog = styled.div`
    
`