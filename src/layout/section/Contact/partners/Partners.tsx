import styled from "styled-components";
import { Flexwrapper } from "../../../../components/Flexwrapper";
import logo1 from "../../../../assets/img/petroleum.png"
import logo2 from "../../../../assets/img/station.png"
import logo3 from "../../../../assets/img/garage.png"
import logo4 from "../../../../assets/img/stations.png"
import { theme } from "../../../../styles/Theme";
import Marquee from "react-fast-marquee";

export const Partners = () => {
    return (
        <Marquee >
            <Flexwrapper gap="130px" margin="50px 0 0 0">
                <Logo src={logo1}/>
                <Logo src={logo2}/>
                <Logo src={logo3}/>
                <Logo src={logo4}/>
            </Flexwrapper>
        </Marquee>
    );
};

const Logo = styled.img`

`