import {
    StyledNavbar,
    StyledMenu,
    StyledMenuItem,
    StyledNavLink,
} from "./style";
import { MdGroupWork as WorkspaceIcon } from "react-icons/md";
import { SiMoleculer as ProjectIcon } from "react-icons/si";
import { RiUserFollowFill as RequestIcon } from "react-icons/ri";
import { AiFillStar as StarIcon } from "react-icons/ai";
import { NAV_ROUTE } from "navigation/navRoutes";
import Avatar from "../../components/Avatar";
import { useContext } from "react";
import { UserProfileContext } from "contexts/userProfile.context";

const navLinks = [
    {
        id: 1,
        name: "Projects",
        icon: ProjectIcon,
        route: NAV_ROUTE.PROJECTS,
    },
    {
        id: 2,
        name: "Workspaces",
        icon: WorkspaceIcon,
        route: NAV_ROUTE.WORKSPACES,
    },
    {
        id: 3,
        name: "Requests",
        icon: RequestIcon,
        route: NAV_ROUTE.REQUESTS,
    },
    {
        id: 4,
        name: "Starred",
        icon: StarIcon,
        route: NAV_ROUTE.STARRED,
    },
    {
        id: 5,
        name: "Profile",
        route: NAV_ROUTE.PROFILE,
    },
];

const MainNavbar = () => {
    const userProfile = useContext(UserProfileContext);

    return (
        <StyledNavbar>
            <StyledMenu>
                {navLinks.map(({ id, name, icon: Icon, route }) => {
                    return (
                        <StyledMenuItem key={id}>
                            {route !== NAV_ROUTE.PROFILE && (
                                <StyledNavLink
                                    to={route}
                                    activeClassName="active"
                                >
                                    {Icon && <Icon className="icon" />}
                                    <span>{name}</span>
                                </StyledNavLink>
                            )}
                            {route === NAV_ROUTE.PROFILE &&
                                userProfile.profile && (
                                    <StyledNavLink
                                        to={route}
                                        activeClassName="active"
                                        className="profile"
                                    >
                                        <Avatar
                                            alt="Profile"
                                            src={`${userProfile.profile?.profilePicURL}`}
                                            small
                                        />
                                        <span>{name}</span>
                                    </StyledNavLink>
                                )}
                            {route === NAV_ROUTE.PROFILE &&
                                !userProfile.profile && <p>Loading</p>}
                        </StyledMenuItem>
                    );
                })}
            </StyledMenu>
        </StyledNavbar>
    );
};

export default MainNavbar;
