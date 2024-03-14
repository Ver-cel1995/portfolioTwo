import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type PhotoItemsPropsType = {
    srcPhoto?: string,
    isMostPopular?: boolean;
}

export const PhotoItems = (props: PhotoItemsPropsType) => {
    return (
        <StyledPhotoItems src={props.srcPhoto}/>
    );
};


const StyledPhotoItems = styled.img`
    object-fit: cover;
    width: 310px;
    height: 300px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    
    &:hover {
        box-shadow: ${theme.shadow.primary}
    }
`

export default StyledPhotoItems;