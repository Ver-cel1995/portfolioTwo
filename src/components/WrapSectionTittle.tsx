import styled from "styled-components";

type TitlePropsType = {
    title?: string,
    text?: string
}

export const WrapSectionTittle = (props: TitlePropsType) => {
    return (
        <WrapperSectionTittle>
            <SectionTittle>{props.title}</SectionTittle>
            <SectionDescription>{props.text}</SectionDescription>
        </WrapperSectionTittle>
    );
};

export const WrapperSectionTittle = styled.div`
    text-align: center;
    margin-bottom: 50px;
`

export const SectionTittle = styled.h2`
    font-weight: 700;
    font-size: 32px;
    text-transform: uppercase;

`
export const SectionDescription = styled.p`
    max-width: 440px;
    margin: 25px auto 0;
    opacity: 0.5;
`