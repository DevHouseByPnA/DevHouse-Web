import styled from "styled-components";

const StyledPageTitle = styled.h2`
    margin: 0.5rem;
    padding: 0;
    color: ${props => props.theme.text.primary};
    font-family: ${props => props.theme.font.family.screenTitle};
`;

export const CustomText = {
    PageTitle: props => <StyledPageTitle>{props.children}</StyledPageTitle>,
};
