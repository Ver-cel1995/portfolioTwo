import styled from "styled-components";
import { Flexwrapper } from "./Flexwrapper";


type ButtonPropsType = {
    text: string,
    icon?: React.ReactNode
}

export const Button = (props: ButtonPropsType) => {
    return (
            <StyledButton>{props.text}</StyledButton>
    );
};

export const StyledButton = styled.button`
    text-transform: uppercase;
    padding: 9px 25px;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
    transition: all 0.5s ease-in-out;
    font-weight: bold;
    font-size: 14px;
    position: relative;

    &:hover {
        background-color: #ffb400;
        border-radius: 30px;
        color: #fff;
    }
`