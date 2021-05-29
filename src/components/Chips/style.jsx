import styled from "styled-components";

export const StyledChipsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const StyledChip = styled.div`
    padding: 0.5rem;
    color: #000;
    background-color: ${props => props.theme.secondary};
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    & > button.delete-btn {
        background-color: white;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        font: inherit;
        font-weight: bold;
        padding: 0;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
