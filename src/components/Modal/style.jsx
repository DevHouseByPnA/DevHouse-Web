import styled from "styled-components";
import { ScreenSize } from "../../utils/screenSizes";

export const StyledModalContainer = styled.div`
    z-index: 200;
    position: fixed;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    box-shadow: ${props => props.theme.shadow.surface};
    border-radius: 10px;
    overflow: hidden;
    background-color: ${props => props.theme.surface};

    @media only screen and (min-width: ${ScreenSize.TABLET.min}) {
        width: 30rem;
    }

    &.modal-enter-active {
        transform: translateY(-10rem) translateX(-50%);
        opacity: 0;
    }

    &.modal-enter-done {
        transform: translateY(0) translateX(-50%);
        opacity: 1;
        transition: ${props => props.theme.transition.hover};
    }

    &.modal-exit-active {
        transform: translateY(0) translateX(-50%);
        opacity: 1;
    }

    &.modal-exit {
        transform: translateY(-10rem) translateX(-50%);
        opacity: 0;
        transition: ${props => props.theme.transition.hover};
    }
`;

export const StyledModalHeader = styled.header`
    width: 100%;
    padding: 1rem 0.5rem;
    color: ${props => props.theme.secondary};

    h2 {
        margin: 0.5rem;
    }
`;

export const StyledModalContent = styled.div`
    padding: 1rem 0.5rem;
    max-height: 70vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 3px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme.surface};
    }

    &::-webkit-scrollbar-thumb {
        width: 3px;
        background-color: ${props => props.theme.secondary};
    }
`;

export const StyledModalFooter = styled.footer`
    padding: 1rem 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
`;
