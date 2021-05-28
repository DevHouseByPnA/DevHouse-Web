import styled from "styled-components";

export const StyledLoginButton = styled.button`
    background-color: #404040;
    padding: 1rem 1.5rem;
    border: none;
    outline: none;
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    box-shadow: ${props => props.theme.shadow.button};
    transition: ${props => props.theme.transition.hover};

    &:hover {
        cursor: pointer;
        background-color: #4a4a4a;
    }

    .icon {
        color: #fff;
        width: 1.5rem;
        height: 1.5rem;
    }

    span {
        color: ${props => props.theme.text.primary};
        font-weight: bold;
        text-align: center;
        font-size: 1rem;
    }
`;
