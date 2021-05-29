import styled from "styled-components";

export const BackdropContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.background};
    opacity: 0.5;
    z-index: 150;
    filter: blur(6px);

    &.enter-active {
        opacity: 0;
    }

    &.enter-done {
        opacity: 0.5;
        transition: ${props => props.theme.transition.hover};
    }

    &.exit-active {
        opacity: 0.5;
    }

    &.exit {
        opacity: 0;
        transition: ${props => props.theme.transition.hover};
    }
`;
