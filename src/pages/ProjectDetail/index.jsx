import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledContainer, StyledContent } from "./style";
import { API } from "../../utils/api";
import { CustomText } from "../../components/CustomText";
import { AuthContext } from "../../contexts/auth.context";
import { Card } from "../../components/Card";
import { Chips } from "../../components/Chips";
import Avatar from "../../components/Avatar";
import { CustomButton } from "../../components/Button";
import { toast } from "react-toastify";

export const ProjectDetailPage = () => {
    const [project, setProject] = useState();
    const [loading, setLoading] = useState(false);
    const [applying, setApplying] = useState(false);
    const params = useParams();
    const auth = useContext(AuthContext);

    useEffect(() => {
        const fetchProject = async () => {
            setLoading(true);
            try {
                const response = await API(auth.state.user?.token).get(
                    `/projects/${params.id}`
                );
                console.log(response);
                if (/[2-3]0[0-9]/.test(response.status)) {
                    setProject(response.data.project);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
                toast.error(`Failed to get Project details`);
            }
        };

        fetchProject();
    }, [auth.state.user, params.id]);

    const applyForProject = async () => {
        if (!project) {
            return;
        }

        setApplying(true);
        try {
            const response = await API(auth.state.user?.token).post(
                `/requests`,
                {
                    projectId: project._id,
                }
            );

            console.log(response);
            if (/[2-3]0[0-9]/.test(response.status)) {
                toast.success(`Request sent to mentor!`);
            }
        } catch (error) {
            console.log(error);
            toast.error(`Could not apply`);
        }
        setApplying(false);
    };

    return (
        <StyledContainer>
            {loading && <p>Loading...</p>}
            {!loading && project && (
                <>
                    <CustomText.PageTitle>
                        Project: {project.name}
                    </CustomText.PageTitle>
                    <StyledContent>
                        <Card>
                            <Card.Title>Description</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                        </Card>
                        <Card>
                            <Card.Title>Skills Needed</Card.Title>
                            <Card.Row>
                                <Chips chips={project.requiredSkills} />
                            </Card.Row>
                        </Card>
                        <Card>
                            <Card.Title>Mentor</Card.Title>
                            <Card.Row>
                                <Avatar
                                    alt={"mentor"}
                                    src={project.mentor.profilePicURL}
                                />
                                <Card.Text>{project.mentor.name}</Card.Text>
                            </Card.Row>
                            <Card.TextDisabled>
                                Email: {project.mentor.email}
                            </Card.TextDisabled>
                            <Card.TextDisabled>
                                Github: {project.mentor.github.username}
                            </Card.TextDisabled>
                        </Card>
                        <Card>
                            <Card.SubTitle>
                                People Needed: {project.peopleRequired}
                            </Card.SubTitle>
                            {!applying && (
                                <CustomButton onClick={applyForProject}>
                                    APPLY NOW
                                </CustomButton>
                            )}
                            {applying && (
                                <Card.TextDisabled>
                                    Applying...
                                </Card.TextDisabled>
                            )}
                        </Card>
                    </StyledContent>
                </>
            )}
        </StyledContainer>
    );
};
