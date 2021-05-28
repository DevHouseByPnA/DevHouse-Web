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
];

const MainNavbar = () => {
    return (
        <StyledNavbar>
            <StyledMenu>
                {navLinks.map(({ id, name, icon: Icon, route }) => {
                    return (
                        <StyledMenuItem key={id}>
                            <StyledNavLink to={route} activeClassName="active">
                                <Icon className="icon" />
                                <span>{name}</span>
                            </StyledNavLink>
                        </StyledMenuItem>
                    );
                })}
            </StyledMenu>
        </StyledNavbar>
    );
};

export default MainNavbar;
