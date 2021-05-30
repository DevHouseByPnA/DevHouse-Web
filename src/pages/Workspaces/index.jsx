import { AuthContext } from "contexts/auth.context";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "utils/api";
import { StyledContainer, StyledContent } from "./style";
import { CustomText } from "../../components/CustomText";
import { WorkspaceCard } from "../../components/WorkspaceCard";

export const WorkspacesPage = () => {
    const [workspaces, setWorkspaces] = useState([]);
    const auth = useContext(AuthContext);

    useEffect(() => {
        const fetchWorkspaces = async () => {
            if (!auth.state.user) return;

            try {
                const response = await API(
                    auth.state.user.token,
                    auth.state.user.githubToken
                ).get(`/workspaces`);
                if (/[2-3]0[0-9]/.test(response.status)) {
                    setWorkspaces([...response.data.workspaces]);
                }
            } catch (error) {
                console.log(error);
                toast.error("Could not get Workspaces");
            }
        };

        fetchWorkspaces();
    }, [auth.state.user]);

    return (
        <StyledContainer>
            <CustomText.PageTitle>Workspaces</CustomText.PageTitle>
            <StyledContent>
                {workspaces.map(workspace => (
                    <WorkspaceCard key={workspace._id} workspace={workspace} />
                ))}
            </StyledContent>
        </StyledContainer>
    );
};
