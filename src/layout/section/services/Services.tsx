import styled from "styled-components";
import { Flexwrapper } from "../../../components/Flexwrapper";
import { Icon } from "../../../components/Icon";
import { theme } from "../../../styles/Theme";

type ServiceTypeProps = {
    iconId: string,
    title?: string,
    text?: string,
    height?: string,
    width?: string,
    viewbox?: string
}

export const Services = (props: ServiceTypeProps) => {
    return (
        <StyledServices>
            <WrapImg>
                 <Icon iconId={props.iconId} width={props.width} height={props.height} viewbox={props.viewbox}/>
            </WrapImg>
           
                <ServiceTitle>{props.title}</ServiceTitle>
                <ServiceText>{props.text}</ServiceText>
        </StyledServices>
    );
};

const StyledServices = styled.div`
    background-color: ${theme.colors.white};
    padding: 28px 20px 42px;
    text-align: center;
    width: 310px;
    transition: all 0.5s;

    &:hover {
        padding-top: 10px;
    }
`
const WrapImg = styled.div`

`
const ServiceTitle = styled.h3`
    margin: 28px 0 15px;

`
const ServiceText = styled.p`
    color: ${theme.colors.grey};
`