import styled from "styled-components";

export const CustomButton = styled.button`
    background-color: ${props => props.theme.secondary};
    border: none;
    outline: none;
    box-shadow: ${props => props.theme.shadow.button};
    transition: ${props => props.theme.transition.hover};
    border-radius: 6px;
    padding: 0.5rem 0.75rem;

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
`;

export const CustomButtonText = styled.span`
    font-family: ${props => props.theme.font.family.navigation};
    color: #000000;
    font-weight: bolder;
`;
