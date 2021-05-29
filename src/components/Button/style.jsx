import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled.button`
    background-color: ${props => props.theme.secondary};
    border: none;
    outline: none;
    box-shadow: ${props => props.theme.shadow.button};
    transition: ${props => props.theme.transition.hover};
    font-family: ${props => props.theme.font.family.text};
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    color: #000000;

    &:focus {
        outline: none;
    }

    &:hover {
        filter: brightness(1.1);
        cursor: pointer;

        &:disabled {
            background: #ccc;
            color: #979797;
            cursor: not-allowed;
            filter: brightness(1);
        }
    }

    &:active {
        background: ${props => props.theme.primaryLight};
        border-color: ${props => props.theme.primaryLight};

        &:disabled {
            background: #ccc;
            color: #979797;
            cursor: not-allowed;
        }
    }

    &:disabled {
        background: #ccc;
        color: #979797;
        cursor: not-allowed;
    }

    &.button--inverse {
        background: transparent;
        color: ${props => props.theme.primary};
        border: 2px solid ${props => props.theme.primary};

        &:hover {
            color: white;
            background: ${props => props.theme.primary};
        }

        &:active {
            color: white;
            background: ${props => props.theme.primary};
        }
    }

    &.button--danger {
        background: #ff0000;
        color: white;

        &:hover {
            background: #eb4c4c;
        }

        &:active {
            background: #ec4646;
        }
    }

    &.button--small {
        font-size: 0.8rem;
    }

    &.button--big {
        font-size: 1.5rem;
    }
`;

export const StyledButtonText = styled.span`
    font-family: ${props => props.theme.font.family.navigation};
    color: #000000;
    font-weight: bolder;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: ${props => props.theme.secondary};
    border: none;
    outline: none;
    box-shadow: ${props => props.theme.shadow.button};
    transition: ${props => props.theme.transition.hover};
    font-family: ${props => props.theme.font.family.text};
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    color: #000000;

    &:focus {
        outline: none;
    }

    &:hover {
        filter: brightness(1.1);
        cursor: pointer;

        &:disabled {
            background: #ccc;
            color: #979797;
            cursor: not-allowed;
            filter: brightness(1);
        }
    }

    &:active {
        background: ${props => props.theme.primaryLight};
        border-color: ${props => props.theme.primaryLight};

        &:disabled {
            background: #ccc;
            color: #979797;
            cursor: not-allowed;
        }
    }

    &:disabled {
        background: #ccc;
        color: #979797;
        cursor: not-allowed;
    }

    &.button--inverse {
        background: transparent;
        color: ${props => props.theme.primary};
        border: 2px solid ${props => props.theme.primary};

        &:hover {
            color: white;
            background: ${props => props.theme.primary};
        }

        &:active {
            color: white;
            background: ${props => props.theme.primary};
        }
    }

    &.button--danger {
        background: #ff0000;
        color: white;

        &:hover {
            background: #eb4c4c;
        }

        &:active {
            background: #ec4646;
        }
    }

    &.button--small {
        font-size: 0.8rem;
    }

    &.button--big {
        font-size: 1.5rem;
    }
`;
