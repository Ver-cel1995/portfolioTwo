import styled from "styled-components";
import { Flexwrapper } from "../../../components/Flexwrapper";
import { Icon } from "../../../components/Icon";
import { theme } from "../../../styles/Theme";


export const ExtraSkills = () => {
    return (
        <StyledExtraSkills>
            <TitleExtraSkills>Extra Skills</TitleExtraSkills>
            <Flexwrapper gap="15px" margin="0 0 5px 0">
                <Icon iconId="s" width="15px" height="15px" viewbox="0 0 20"/>
                <TextExtraSkills>Bootstrap, Materialize</TextExtraSkills>
            </Flexwrapper>
            <Flexwrapper gap="15px" margin="0 0 5px 0">
                <Icon iconId="s" width="15px" height="15px" viewbox="0 0 20"/>
                <TextExtraSkills>Stylus, Sass, Less</TextExtraSkills>
            </Flexwrapper>
            <Flexwrapper gap="15px" margin="0 0 5px 0">
                <Icon iconId="s" width="15px" height="15px" viewbox="0 0 20"/>
                <TextExtraSkills>Gulp, Webpack, Grunt</TextExtraSkills>
            </Flexwrapper>
            <Flexwrapper gap="15px">
                <Icon iconId="s" width="15px" height="15px" viewbox="0 0 20"/>
                <TextExtraSkills>GIT Knowledge</TextExtraSkills>
            </Flexwrapper>
        </StyledExtraSkills>
    );
};

const TitleExtraSkills = styled.h3`
    
`
const StyledExtraSkills = styled.div`
    width: 100%;
    margin-bottom: 50px;
`
const TextExtraSkills = styled.p`
    color: ${theme.colors.grey}
`