import styled from "styled-components";
import { Flexwrapper } from "../../../../components/Flexwrapper";
import logo1 from "../../../../assets/img/petroleum.png"
import logo2 from "../../../../assets/img/station.png"
import logo3 from "../../../../assets/img/garage.png"
import logo4 from "../../../../assets/img/stations.png"

export const Partners = () => {
    return (
        <Flexwrapper justify="space-between">
            <Logo src={logo1}/>
            <Logo src={logo2}/>
            <Logo src={logo3}/>
            <Logo src={logo4}/>
        </Flexwrapper>
    );
};

const Logo = styled.img`

`