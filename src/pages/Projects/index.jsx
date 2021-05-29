import { StyledContainer, StyledContent } from "./style";
import { CustomText } from "../../components/CustomText";
import { CreateProjectModal } from "../../components/CreateProjectModal";
import { useContext, useEffect } from "react";
import { ProjectsContext } from "contexts/projects.context";
import { ProjectCard } from "../../components/ProjectCard";

export const ProjectsPage = () => {
    const { projects, loading, fetchProjects } = useContext(ProjectsContext);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    return (
        <StyledContainer>
            <CustomText.PageTitle>Projects</CustomText.PageTitle>
            <StyledContent>
                <CreateProjectModal />
                {loading && <p>Loading...</p>}
                {!loading &&
                    projects &&
                    projects.map(project => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
            </StyledContent>
        </StyledContainer>
    );
};
