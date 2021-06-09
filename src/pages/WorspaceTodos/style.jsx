import styled from "styled-components";
import { ScreenSize } from "../../utils/screenSizes";

export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 8rem;
`;

export const StyledContent = styled.div`
    width: 100%;
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 1fr;
    gap: 1rem;
    overflow-x: hidden;

    @media only screen and (min-width: ${ScreenSize.LARGE_SCREEN.min}) {
        grid-template-columns: repeat(3, minmax(15rem, 1fr));
    }
`;

export const StyledTodoContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-template-rows: 1fr;
    gap: 1rem;
    grid-auto-flow: column;
    grid-auto-columns: minmax(15rem, 1fr);
    overflow-x: auto;
    position: relative;
    padding-top: 3rem;

    .section-title {
        position: absolute;
    }

    @media only screen and (min-width: ${ScreenSize.LARGE_SCREEN.min}) {
        grid-template-columns: repeat(1, minmax(15rem, 1fr));
        grid-template-rows: repeat(auto-fill, minmax(5rem, 1fr));
        grid-auto-flow: row;
        grid-auto-rows: minmax(5rem, 1fr);
        width: 100%;
    }

    /* width: 100%;
    height: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (min-width: ${ScreenSize.TABLET.min}) {
        flex-direction: column;
    } */
`;
