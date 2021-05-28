import styled from "styled-components";
import { ScreenSize } from "../../utils/screenSizes";

export const MainContainer = styled.main`
    margin-left: 6rem;
    width: calc(100% - 6rem);
    min-height: 100vh;
    background-color: ${props => props.theme.background};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;

    @media only screen and (max-width: ${ScreenSize.MOBILE.max}) {
        margin-left: 0;
        width: 100%;
        padding-bottom: 6rem;
    }
`;
