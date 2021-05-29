import {
    ProjectCardFooter,
    ProjectCardViewBtnContainer,
    ProjectSkillsContainer,
} from "./style";
import { Card } from "../Card";
import { Chips } from "../Chips";
import { CustomLink } from "../Button";
import Avatar from "../Avatar";

export const ProjectCard = ({ project }) => {
    return (
        <Card>
            <Card.Title>{project.name}</Card.Title>
            <Card.Row>
                <Card.SubTitle>Mentor: {project.mentor.name}</Card.SubTitle>
                <Avatar
                    alt={"mentor"}
                    src={project.mentor.profilePicURL}
                    tiny
                />
            </Card.Row>
            <Card.Text>{project.description}</Card.Text>
            <Card.TextDisabled>Skills Required</Card.TextDisabled>
            <ProjectSkillsContainer>
                <Chips chips={project.requiredSkills} />
            </ProjectSkillsContainer>
            <Card.Text>People Needed: {project.peopleRequired}</Card.Text>
            <ProjectCardFooter>
                <Card.Text>Rating: {project.rating}</Card.Text>
                <ProjectCardViewBtnContainer>
                    <CustomLink to={`/projects/${project._id}`}>
                        VIEW
                    </CustomLink>
                </ProjectCardViewBtnContainer>
            </ProjectCardFooter>
        </Card>
    );
};
