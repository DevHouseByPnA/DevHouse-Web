import styled from "styled-components";

export const StyledCard = styled.div`
    padding: 1rem;
    background-color: ${props => props.theme.surface};
    box-shadow: ${props => props.theme.shadow.surface};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const StyledCardTitle = styled.h3`
    padding: 0;
    margin: 0.5rem 0;
    color: ${props => props.theme.text.primary};
    font-size: 1.5rem;
`;

export const StyledCardText = styled.p`
    padding: 0;
    margin: 0.5rem 0;
    color: ${props => props.theme.text.primary};
    font-size: 1rem;
`;

export const StyledCardTextDisabled = styled.p`
    padding: 0;
    margin: 0.5rem 0;
    color: ${props => props.theme.text.secondary};
    font-size: 0.9rem;
`;

export const StyledCardSubTitle = styled.p`
    padding: 0;
    margin: 0.5rem 0;
    color: ${props => props.theme.text.secondary};
    font-size: 1rem;
`;

export const StyledCardRow = styled.p`
    width: 100%;
    display: flex;
    justify-content: ${props => (props.flexEnd ? "flex-end" : "flex-start")};
    align-items: center;
    gap: 0.5rem;
`;
