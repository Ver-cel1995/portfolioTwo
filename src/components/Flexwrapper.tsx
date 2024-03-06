import React from 'react';
import styled from 'styled-components';

type FlexwrapperPropsTypes = {
    justify?: string,
    align?: string,
    direction?: string,
    wrap?: string,
    gap?: string
}

export const Flexwrapper = styled.div<FlexwrapperPropsTypes>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0px"}
`
