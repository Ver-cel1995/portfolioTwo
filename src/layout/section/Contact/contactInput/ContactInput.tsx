import styled from "styled-components";
import { Inputs } from "./Inputs";
import { Button } from "../../../../components/Button";
import { theme } from "../../../../styles/Theme";

export const ContactInput = () => {
    return (
        <WrapperInput>
            <TitleInput>Your Message</TitleInput>
            <StyledContactInput>
                <StyledForm>
                    <Inputs text="Your Full Name ( Required)" placeholder="Name"/>
                    <Inputs text="Your Email ( Required)" placeholder="Email"/>
                    <Inputs text="Subject" placeholder="Subject"/>
                    <Inputs text="Your Message" placeholder="Message" as={"textarea"}/>
                    <Button text="send message"/>
                </StyledForm>
            </StyledContactInput>
        </WrapperInput>
    );
};

const WrapperInput = styled.div`
    
`

const StyledContactInput = styled.div`
    background-color: ${theme.colors.white};
    min-width: 570px;
    padding: 25px;
`

const StyledForm = styled.form`

    textarea {
        resize: none;
        height: 210px;
    }
`
const TitleInput = styled.h2`
    margin-bottom: 50px;
`
