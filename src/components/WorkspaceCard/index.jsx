import { Card } from "../Card";
import Avatar from "../Avatar";
import { CustomLink } from "../Button";
import { NAV_ROUTE } from "navigation/navRoutes";

export const WorkspaceCard = ({ workspace }) => {
    return (
        <Card>
            <Card.Title>{workspace.name}</Card.Title>
            <Card.SubTitle>Members</Card.SubTitle>
            {workspace.members.map(member => (
                <Avatar
                    key={member._id}
                    alt={"member"}
                    src={member.profilePicURL}
                    tiny
                />
            ))}
            <Card.Row flexEnd>
                <CustomLink to={`${NAV_ROUTE.WORKSPACES}/${workspace._id}`}>
                    VIEW
                </CustomLink>
            </Card.Row>
        </Card>
    );
};
