import { styled } from "styled-components";
import { Flexwrapper } from "../../../../components/Flexwrapper";
import { WrapInfo } from "./WrapInfo";
import { Icon } from "../../../../components/Icon";




export const ContactInfo = () => {
    return (
        <WrapperInfo>
            <TitleIngo>Contact Information</TitleIngo>
            <Flexwrapper direction="column" gap="18px">
                <WrapInfo country="Country:"
                            city="City:"
                            streat="Streat:"
                            local="Bangladesh"
                            cities="Dhaka"
                            outdoors="35 vhatara, Badda"
                            icon={<Icon iconId="map" width="15px" height="15px" viewbox="0 0 15 15"/>}/>
                <WrapInfo country="Email:"
                            city="Skype:"
                            streat="Telegram:"
                            local="youremail@gmail.com"
                            cities="@yourusername"
                            outdoors="@yourusername"
                            icon={<Icon iconId="mail" width="15px" height="15px" viewbox="0 0 15 15"/>}/>
                <WrapInfo country="Support services:"
                            city="Office:"
                            streat="Personal:"
                            local="15369"
                            cities="+58 (021)356 587 235"
                            outdoors="+58 (021)356 587 235"
                            icon={<Icon iconId="phone" width="15px" height="15px" viewbox="0 0 15 15"/>}/>
            </Flexwrapper>
        </WrapperInfo>
    );
};

const StyledContactInfo = styled.div`
    
`
const WrapperInfo = styled.div`
    
`
const TitleIngo = styled.h2`
    margin-bottom: 50px;
`