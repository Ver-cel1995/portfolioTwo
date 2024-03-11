import styled from "styled-components";
import { Container } from "../../../components/Container";
import { WrapSectionTittle } from "../../../components/WrapSectionTittle";
import { Flexwrapper } from "../../../components/Flexwrapper";
import { RecommendationsList } from "./RecommendationsList";
import profile1 from "../../../assets/img/Profile.png";
import profile2 from "../../../assets/img/Profile2.png";
import profile3 from "../../../assets/img/Profile3.png";


export const Recommendations = () => {
    return (
        <StyledRecommendations>
            <Container>
                <WrapSectionTittle/>
                <Flexwrapper justify="space-between">
                    <RecommendationsList 
                            title="Great Quality!"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
                            photo={profile1}
                            name="James Gouse"
                            specialization="Graphic Designer"/>

                    <RecommendationsList title="Great Quality!"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
                            photo={profile2}
                            name="James Gouse"
                            specialization="Graphic Designer"/>

                    <RecommendationsList title="Great Quality!"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet...."
                            photo={profile3}
                            name="James Gouse"
                            specialization="Graphic Designer"/>
                </Flexwrapper>
            </Container>
        </StyledRecommendations>
    );
};

const StyledRecommendations = styled.section`
    
`