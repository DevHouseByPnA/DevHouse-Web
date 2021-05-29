import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    position: relative;
`;

export const StyledName = styled.span`
    font-size: 2rem;
    font-family: ${props => props.theme.font.family.text};
    color: ${props => props.theme.text.primary};
`;

export const StyledEmail = styled.span`
    font-size: 1.2rem;
    font-family: ${props => props.theme.font.family.text};
    color: ${props => props.theme.text.secondary};
`;

export const StyledGithub = styled.a`
    font-size: 1.2rem;
    text-decoration: none;
    font-family: ${props => props.theme.font.family.text};
    color: ${props => props.theme.text.secondary};
`;

export const LogoutButtonContainer = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
`;
