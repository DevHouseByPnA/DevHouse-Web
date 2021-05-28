import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background};
`;

export const StyledLoginCard = styled.div`
    max-width: 90vw;
    width: 20rem;
    height: 30vh;
    background: ${props => props.theme.surface};
    box-shadow: ${props => props.theme.shadow.surface};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
