import styled from "styled-components";
import { Languages } from "./Languages";

type WrapInfoPropsType = {
    items: any[],
    title: string
}

export const WrapInfo = (props: WrapInfoPropsType) => {
    return (
        <StyledWrapInfo>
            <TitleWrapInfo>{props.title}</TitleWrapInfo>
            {props.items.map( (i) => {
                return (
                    <Languages widthBorder={i.widthBorder} 
                            widthValue={i.widthValue} 
                            text={i.text} 
                            value={i.value} />
                )
            } )}
                
        </StyledWrapInfo>
    );
};

const StyledWrapInfo = styled.div`
    width: 100%;
    position: relative;

    &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #F0F0F6;
        position: absolute;
        right: 0;
        top: 16px;
    }
`
const TitleWrapInfo = styled.h3`
    text-align: start;
`