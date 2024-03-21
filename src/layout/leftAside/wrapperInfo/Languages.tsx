import styled from "styled-components";
import { theme } from "../../../styles/Theme";

type WidthPropsType = {
    widthBorder: string,
    widthValue: string
}
type LanguagesPropsType = {
    text: string,
    value: string
}

export const Languages = (props: WidthPropsType & LanguagesPropsType) => {
    return (
        <StyledLanguages widthBorder={props.widthBorder} widthValue={props.widthValue}>
            <p>{props.text}</p>
            <p>{props.value}</p>
        </StyledLanguages>
    );
};

const StyledLanguages = styled.div<WidthPropsType>`
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 18px;

    &::after {
        content: "";
        width: ${props => props.widthBorder};
        height: 4px;
        border: 1px solid ${theme.colors.yellow};
        position: absolute;
        bottom: -10px;
    }
    &::before {
        content: "";
        width: ${props => props.widthValue};
        height: 4px;
        background-color: ${theme.colors.yellow};
        position: absolute;
        bottom: -10px;
    }
`