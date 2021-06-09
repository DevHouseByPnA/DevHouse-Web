import styled from "styled-components";

const getStatusColor = status => {
    switch (status) {
        case "planned":
            return "#d32f2f";
        case "ongoing":
            return "#ff9800";
        case "done":
            return "#4caf50";
        default:
            return "#d32f2f";
    }
};

export const StatusIndicator = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${props => getStatusColor(props.status)};
`;

export const IconContainerButton = styled.button`
    text-decoration: none;
    border: none;
    outline: none;
    padding: 0.05rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }

    .icon {
        height: 1.2rem;
        color: ${props => props.theme.text.primary};
    }
`;

export const TodoMenuContainer = styled.div`
    margin-left: auto;
    position: relative;
`;

export const StyledTodoMenu = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border-radius: 10px;
    background-color: ${props => props.theme.surface};
    border: 1px solid ${props => props.theme.text.secondary};
    padding: 0.5rem 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const StyledTodoMenuOption = styled.div`
    width: 100%;
    padding: 0.5rem;

    span {
        color: ${props => props.theme.text.primary};
        font-size: 0.9rem;
        white-space: nowrap;
        overflow: hidden;
    }

    &:hover {
        span {
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;
