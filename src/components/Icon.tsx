import iconsSprite from "../assets/vectorImg/sprite.svg";

type iconIdPropsType = {
    iconId: string,
    width?: string,
    height?: string,

}

export const Icon = (props: iconIdPropsType) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 16.971 12.021" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};