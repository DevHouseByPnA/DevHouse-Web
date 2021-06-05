import styled from "styled-components";
import { ScreenSize } from "../../utils/screenSizes";

export const StyledAddTodoButton = styled.button`
    outline: none;
    border: none;
    padding: 1rem;
    margin: 0;
    z-index: 40;
    cursor: pointer;
    background: ${props => props.theme.secondary};
    border-radius: 200px;
    -webkit-tap-highlight-color: transparent;
    position: fixed;
    top: calc(100vh - 7rem);
    right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${props => props.theme.shadow.surface};

    &:hover {
        filter: brightness(1.2);
    }

    .icon {
        width: 1.8rem;
        height: 1.8rem;
        color: #000;
    }

    @media (max-width: ${ScreenSize.TABLET.max}) {
        padding: 0.1rem;
        width: 3.6rem;
        height: 3.6rem;
        top: calc(100vh - 11rem);
        right: 1rem;
    }
`;
