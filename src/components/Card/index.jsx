import {
    StyledCard,
    StyledCardTitle,
    StyledCardText,
    StyledCardTextDisabled,
    StyledCardRow,
    StyledCardSubTitle,
} from "./style";

export const Card = props => {
    return <StyledCard>{props.children}</StyledCard>;
};

Card.Title = ({ children }) => {
    return <StyledCardTitle>{children}</StyledCardTitle>;
};

Card.Text = ({ children }) => {
    return <StyledCardText>{children}</StyledCardText>;
};

Card.TextDisabled = ({ children }) => (
    <StyledCardTextDisabled>{children}</StyledCardTextDisabled>
);

Card.SubTitle = ({ children }) => (
    <StyledCardSubTitle>{children}</StyledCardSubTitle>
);

Card.Row = ({ children, flexEnd }) => (
    <StyledCardRow flexEnd={flexEnd}>{children}</StyledCardRow>
);
