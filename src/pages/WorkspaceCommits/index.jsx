import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router";
import { StyledContainer, StyledContent } from "./style";
import { Card } from "../../components/Card";
import { CustomText } from "../../components/CustomText";
import { AuthContext } from "contexts/auth.context";
import { API } from "utils/api";
import { toast } from "react-toastify";
import axios from "axios";

export const WorkspaceCommitsPage = () => {
    const [workspace, setWorkspace] = useState();
    const [repo, setRepo] = useState();
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

    useEffect(() => {
        if (!workspace) return;
        console.log({ workspace });
        if (workspace.project.githubRepos.length === 0) {
            return;
        }
        const [githubRepo] = workspace.project.githubRepos;
        const repoData = githubRepo.replace("https://github.com/", "");
        setRepo(repoData);
    }, [workspace]);

    useEffect(() => {
        if (!repo || !auth.state.user) {
            return;
        }

        const getCommits = async () => {
            try {
                const date = new Date().toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                });
                const response = await axios.get(
                    `https://api.github.com/search/commits?q=repo:${repo} author-date:<${date}`,
                    {
                        headers: {
                            Authorization: `token ${auth.state.user.githubToken}`,
                            Accept: `application/vnd.github.cloak-preview+json`,
                        },
                    }
                );
                console.log("Commits: ", response.data);
            } catch (error) {
                toast.error("Could not get commits");
                console.log(error);
            }
        };

        getCommits();
    }, [repo, auth.state.user]);

    if (!workspace) {
        return null;
    }

    return (
        <StyledContainer>
            <CustomText.PageTitle>Commits</CustomText.PageTitle>
            {repo && (
                <StyledContent>
                    <Card>
                        <Card.Text>Commit 1</Card.Text>
                    </Card>
                </StyledContent>
            )}
            {!repo && <Card.Text>No Repo Added for this Project!</Card.Text>}
        </StyledContainer>
    );
};
