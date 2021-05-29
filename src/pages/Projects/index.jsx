import { StyledContainer, StyledContent } from "./style";
import { CustomText } from "../../components/CustomText";
import { CreateProjectModal } from "../../components/CreateProjectModal";

export const ProjectsPage = () => {
    return (
        <StyledContainer>
            <CustomText.PageTitle>Projects</CustomText.PageTitle>
            <StyledContent>
                <CreateProjectModal />
            </StyledContent>
        </StyledContainer>
    );
};
