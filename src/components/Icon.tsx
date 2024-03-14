import iconsSprite from "../assets/vectorImg/sprite.svg";

type iconIdPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewbox?: string,
    fill?: string

}

export const Icon = (props: iconIdPropsType) => {
    return (
        <svg width={props.width || "78"} height={props.height || "78"} viewBox={props.viewbox || "0 0 78 78"} fill={props.fill}xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};