import styled from "styled-components";
import { Flexwrapper } from "../../../components/Flexwrapper";
import { Icon } from "../../../components/Icon";

type ServiceTypeProps = {
    iconId: string,
    title?: string,
    text?: string,
    height?: string,
    width?: string
}

export const Services = (props: ServiceTypeProps) => {
    return (
        <StyledServices>
                <WrapImg>
                    <Icon iconId={props.iconId}/>
                </WrapImg>
                <ServiceTitle>{props.title}</ServiceTitle>
                <ServiceText>{props.text}</ServiceText>
        </StyledServices>
    );
};

const StyledServices = styled.div`
    background-color: #fff;
    padding: 28px 76px 42px;
    text-align: center;
    width: 310px;
`
const WrapImg = styled.div`
    
`
const ServiceTitle = styled.h3`
    
`
const ServiceText = styled.p`
    
`