import { useState } from "react";
import { StyledAddProjectButton } from "./style";
import { GoPlus } from "react-icons/go";
import { Modal } from "../Modal";
import { CustomButton } from "../Button";
import { TextFieldInput, TextAreaInput, ChipsInput } from "../Input";

export const CreateProjectModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [skills, setSkills] = useState([]);
    const [githubRepos, setGithubRepos] = useState([]);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const onSkillsInput = chips => {
        setSkills(chips);
    };

    const onGithubReposInput = chips => {
        setGithubRepos(chips);
    };

    return (
        <>
            <StyledAddProjectButton onClick={openModal}>
                <GoPlus className="icon" />
            </StyledAddProjectButton>
            <Modal
                headerComponent={`Create Project`}
                onCancel={closeModal}
                show={showModal}
                footerComponent={
                    <>
                        {
                            <>
                                <CustomButton disabled>CREATE</CustomButton>
                                <CustomButton danger onClick={closeModal}>
                                    CANCEL
                                </CustomButton>
                            </>
                        }
                    </>
                }
            >
                <TextFieldInput
                    id="name"
                    name="name"
                    label="Name"
                    type="text"
                    // ref={register({
                    //     pattern: {
                    //         value: /.*\S.*/,
                    //         message: "Name cannot be empty",
                    //     },
                    //     required: {
                    //         value: true,
                    //         message: "A name is required",
                    //     },
                    //     maxLength: {
                    //         value: 120,
                    //         message: "The name is too long",
                    //     },
                    // })}
                    errorText={""}
                />
                <TextAreaInput
                    id="description"
                    name="description"
                    label="Description"
                    rows={3}
                    // ref={register({
                    //     maxLength: {
                    //         value: 800,
                    //         message: "The content is too long",
                    //     },
                    // })}
                    // errorText={errors.content && errors.content.message}
                />
                <TextFieldInput
                    id="peopleRequired"
                    name="peopleRequired"
                    label="No. of People Required"
                    type="number"
                    // ref={register({
                    //     pattern: {
                    //         value: /.*\S.*/,
                    //         message: "Name cannot be empty",
                    //     },
                    //     required: {
                    //         value: true,
                    //         message: "A name is required",
                    //     },
                    //     maxLength: {
                    //         value: 120,
                    //         message: "The name is too long",
                    //     },
                    // })}
                    errorText={""}
                />
                <ChipsInput
                    id="requiredSkills"
                    name="requiredSkills"
                    label="Skills Required"
                    type="text"
                    onChipsInput={onSkillsInput}
                />

                <ChipsInput
                    id="githubRepos"
                    name="githubRepos"
                    label="Github Repo Links"
                    type="text"
                    onChipsInput={onGithubReposInput}
                />
            </Modal>
        </>
    );
};
