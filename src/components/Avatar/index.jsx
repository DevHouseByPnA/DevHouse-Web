import { ImageContainer } from "./style";

const Avatar = ({ alt, src, children, large, medium, small, tiny }) => {
    let sizeClass = `small`;
    if (tiny) {
        sizeClass = `tiny`;
    } else if (medium) {
        sizeClass = `medium`;
    } else if (large) {
        sizeClass = `large`;
    }

    return (
        <ImageContainer className={`${sizeClass}`}>
            <img alt={alt} src={src} />
        </ImageContainer>
    );
};

export default Avatar;
