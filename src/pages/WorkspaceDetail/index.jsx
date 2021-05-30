import { useParams } from "react-router-dom";
import { StyledContainer, StyledContent } from "./style";
import { Card } from "../../components/Card";
import { CustomLink } from "../../components/Button";
import { CustomText } from "../../components/CustomText";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "utils/api";
import { AuthContext } from "contexts/auth.context";
import { NAV_ROUTE } from "navigation/navRoutes";

export const WorkspaceDetailPage = () => {
    const [workspace, setWorkspace] = useState([]);
    const { id: workspaceId } = useParams();
    const auth = useContext(AuthContext);

    useEffect(() => {
        const fetchDetails = async () => {
            if (!auth.state.user) return;
            try {
                const response = await API(
                    auth.state.user.token,
                    auth.state.user.githubToken
                ).get(`/workspaces/${workspaceId}`);

                if (/[2-3]0[0-9]/.test(response.status)) {
                    setWorkspace(response.data.workspace);
                }
            } catch (error) {
                toast.error("Could not get Workspace!");
                console.log(error);
            }
        };

        fetchDetails();
    }, [auth.state.user, workspaceId]);

    if (!workspace) {
        return null;
    }

    return (
        <StyledContainer>
            <CustomText.PageTitle>{workspace.name}</CustomText.PageTitle>
            <StyledContent>
                <Card>
                    <Card.Title>CHATS</Card.Title>
                    <CustomLink
                        to={`${NAV_ROUTE.WORKSPACES}/${workspaceId}/chat`}
                    >
                        VIEW
                    </CustomLink>
                </Card>
                <Card>
                    <Card.Title>COMMITS</Card.Title>
                    <CustomLink
                        to={`${NAV_ROUTE.WORKSPACES}/${workspaceId}/commits`}
                    >
                        VIEW
                    </CustomLink>
                </Card>
                <Card>
                    <Card.Title>TODOS</Card.Title>
                    <CustomLink
                        to={`${NAV_ROUTE.WORKSPACES}/${workspaceId}/todos`}
                    >
                        VIEW
                    </CustomLink>
                </Card>
            </StyledContent>
        </StyledContainer>
    );
};
