import styled from "styled-components";
import { WrapEducations } from "../../../components/WrapEducations";
import { theme } from "../../../styles/Theme";


export const History = () => {
    return (
        <StyledEducations>
                <WrapEducations title="Lead Web Designer"
                                deagree="Student"
                                season="Jan 1016 - Dec 2021"
                                titleDesc="Certificate of web training"
                                textDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."/>           
                <WrapEducations title="Junior Web Designer"
                                deagree="Student"
                                season="Jan 1016 - Dec 2021"
                                titleDesc="Certificate of web training"
                                textDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."/>           
                <WrapEducations title="Senior Web Designer"
                                deagree="Student"
                                season="Jan 1016 - Dec 2021"
                                titleDesc="Certificate of web training"
                                textDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui."/>           
        </StyledEducations>
    );
};

const StyledEducations = styled.div`
    background-color:${theme.colors.white};
    padding: 47px 29px 38px 37px;
`