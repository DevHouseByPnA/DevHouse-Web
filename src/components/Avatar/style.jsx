import styled from "styled-components";
import { ScreenSize } from "../../utils/screenSizes";

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;

    & > img {
        width: 100%;
        height: 100%;
    }

    &.tiny {
        width: 2.4rem;
        height: 2.4rem;
    }

    &.small {
        width: 4rem;
        height: 4rem;

        @media only screen and (max-width: ${ScreenSize.MOBILE.max}) {
            width: 2.7rem;
            height: 2.7rem;
        }
    }

    &.medium {
        width: 7.5rem;
        height: 7.5rem;
    }

    &.large {
        width: 10rem;
        height: 10rem;
    }
`;
