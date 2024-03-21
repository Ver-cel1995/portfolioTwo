import styled from "styled-components";
import { WrapperInfo } from "./WrapperInfo";


export const InfoAside = () => {
    return (
        <StyledInfoAside>
                <WrapperInfo value="Age:" info="27"/>
                <WrapperInfo value="Residence:" info="BD"/>
                <WrapperInfo value="Freelance:" info="Available" color="#7EB942"/>
                <WrapperInfo value="Address:" info="Dhaka,Bangladesh"/>
        </StyledInfoAside>
    );
};

const StyledInfoAside = styled.div`
    font-size: 15px;
    width: 100%;

    position: relative;

    &::before {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #F0F0F6;
        position: absolute;
        right: 0;
        top: -20px;
    }
`