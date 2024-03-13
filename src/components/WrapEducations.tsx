import { styled } from "styled-components";
import { Flexwrapper } from "./Flexwrapper";
import { theme } from "../styles/Theme";


type WrapEducationsPropsType = {
    title?: string,
    deagree?: string,
    season?: string,
    titleDesc?: string,
    textDesc?: string
}

export const WrapEducations = (props: WrapEducationsPropsType) => {
    return (
        <WrapperEducations>
            <Flexwrapper justify="space-between">
                <WrapDegree>
                    <TittleFeature>{props.title}</TittleFeature>
                    <Degree>{props.deagree}</Degree>
                    <Season>{props.season}</Season>
                </WrapDegree>
                <WrapDescriptions>
                    <TitleDescriptions>{props.titleDesc}</TitleDescriptions>
                    <TextDescriptions>{props.textDesc}</TextDescriptions>
                </WrapDescriptions>
            </Flexwrapper>
        </WrapperEducations>
    );
};

const WrapperEducations = styled.div`
    max-width: 974px;
    position: relative;

    &:nth-child(2)::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: #F0F0F6;
        position:absolute;
        top: -28px;
    }
    
    &:nth-child(2)::before {
        content: "";
        width: 100%;
        height: 1px;
        background-color: #F0F0F6;
        position:absolute;
        bottom: -28px;
    }

    &:nth-child(2) {
        margin: 39px 0 58px;
    }
`
const Feature = styled.div`

`
const TittleFeature = styled.h3`

`
const WrapDegree = styled.div`
    
`
const Degree = styled.h4`
    display: inline-block;
    margin-top: 28px;
`
const Season = styled.span`
    background-color: ${theme.colors.yellow};
    padding: 4px 7px;
    border-radius: 15px;
    margin-left: 20px;
`

const WrapDescriptions = styled.div`
    width: 536px;
`
const TitleDescriptions = styled.h3`
    
`
const TextDescriptions = styled.p`
    margin-top: 28px;
    color: ${theme.colors.grey};
`