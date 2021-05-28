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

const navLinks = [
    {
        id: 1,
        name: "Projects",
        icon: ProjectIcon,
    },
    {
        id: 2,
        name: "Workspaces",
        icon: WorkspaceIcon,
    },
    { id: 3, name: "Requests", icon: RequestIcon },
    { id: 4, name: "Starred", icon: StarIcon },
];

const MainNavbar = () => {
    return (
        <StyledNavbar>
            <StyledMenu>
                {navLinks.map(({ id, name, icon: Icon }) => {
                    return (
                        <StyledMenuItem key={id}>
                            <StyledNavLink>
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
