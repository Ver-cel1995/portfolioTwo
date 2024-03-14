import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type PhotoItemsPropsType = {
    srcPhoto?: string,
    isMostPopular?: boolean;
}

export const PhotoItems = (props: PhotoItemsPropsType) => {
    return (
        <WrapImg>
            <StyledPhotoItems src={props.srcPhoto}/>
        </WrapImg>
    );
};

export const WrapImg = styled.div`
    position: relative;

    &::before {
        content: "";
        width: 310px;
        height: 300px;
        background-color: ${theme.colors.yellow};
        position: absolute;
        transition: all 1s ease;
    }

    &:hover::before {
        width: 0;
        }


`

export const StyledPhotoItems = styled.img`
    object-fit: cover;
    width: 310px;
    height: 300px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    
    &:hover {
        box-shadow: ${theme.shadow.primary}
    }
`