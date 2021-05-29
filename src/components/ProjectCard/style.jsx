import styled from "styled-components";

export const ProjectCardFooter = styled.div`
    margin-top: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
`;

export const ProjectSkillsContainer = styled.div`
    width: 100%;
    max-height: 10rem;
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

export const ProjectCardViewBtnContainer = styled.div`
    margin-left: auto;
`;
