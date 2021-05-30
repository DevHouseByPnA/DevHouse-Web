import styled from "styled-components";
import { ScreenSize } from "../../utils/screenSizes";

export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 1fr;
    gap: 1rem;

    @media only screen and (min-width: ${ScreenSize.TABLET.min}) {
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    }
`;
