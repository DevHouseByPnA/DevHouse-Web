import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ScreenSize } from "utils/screenSizes";

export const StyledNavbar = styled.nav`
    width: 6rem;
    height: 100vh;
    position: fixed;
    background-color: ${props => props.theme.surface};
    box-shadow: ${props => props.theme.shadow.surface};
    padding: 2rem 0;
    z-index: 100;

    @media only screen and (max-width: ${ScreenSize.MOBILE.max}) {
        height: 5rem;
        width: 100vw;
        bottom: 0;
        padding: 0;
    }
`;

export const StyledMenu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: ${ScreenSize.MOBILE.max}) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
`;

export const StyledMenuItem = styled.li`
    width: 100%;

    @media only screen and (max-width: ${ScreenSize.MOBILE.max}) {
        height: 100%;
    }

    @media only screen and (min-width: ${ScreenSize.TABLET.min}) {
        &:last-child {
            margin-top: auto;
        }
    }
`;

export const StyledNavLink = styled(NavLink)`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    gap: 0.5rem;
    transition: ${props => props.theme.transition.navigationHover};
    filter: grayscale(100%) opacity(0.7);

    @media only screen and (max-width: ${ScreenSize.MOBILE.max}) {
        padding: 0.6rem;
    }

    &.profile {
        filter: grayscale(0%) opacity(1);

        span {
            filter: grayscale(100%) opacity(0.7);
        }
    }

    &:hover,
    &.active {
        filter: grayscale(0%) opacity(1);
        background-color: ${props => props.theme.background};

        &.profile {
            span {
                filter: grayscale(0%) opacity(1);
            }
        }
    }

    .icon {
        color: ${props => props.theme.primary};
        width: 2rem;
        height: 2rem;
        padding: 0;

        @media only screen and (max-width: ${ScreenSize.MOBILE.max}) {
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    span {
        padding: 0;
        color: ${props => props.theme.primary};
        font-size: 0.8rem;
        font-weight: bold;
        font-family: ${props => props.theme.font.family.navigation};
        text-align: center;

        @media only screen and (max-width: ${ScreenSize.MOBILE.max}) {
            font-size: 0.7rem;
        }
    }
`;
