import { useContext, useEffect, useState } from "react";
import { StyledAddProjectButton } from "./style";
import { GoPlus } from "react-icons/go";
import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { CustomButton } from "../Button";
import { TextFieldInput, TextAreaInput, ChipsInput } from "../Input";
import { API } from "../../utils/api";
import { AuthContext } from "../../contexts/auth.context";
import { ProjectsContext } from "contexts/projects.context";
import { toast } from "react-toastify";

export const CreateProjectModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [skills, setSkills] = useState([]);
    const [githubRepos, setGithubRepos] = useState([]);
    const [touched, setTouched] = useState({
        skills: false,
    });
    const { register, handleSubmit, formState } = useForm({
        mode: "all",
        defaultValues: {
            name: "",
            description: "",
            peopleRequired: 0,
        },
    });
    const auth = useContext(AuthContext);
    const { setProjects } = useContext(ProjectsContext);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const onSkillsInput = chips => {
        setSkills(chips);
    };

    const onGithubReposInput = chips => {
        setGithubRepos(chips);
    };

    const onSubmit = async input => {
        const data = {
            ...input,
            requiredSkills: skills,
            githubRepos,
        };

        try {
            const response = await API(
                auth.state.user?.token,
                auth.state.user?.githubToken
            ).post("/projects", data);
            console.log(response);
            if (/[2-3]0[0-9]/.test(response.status)) {
                setProjects(prev => [...prev, response.data.project]);
                toast.success(`Created Project ${response.data.project.name}`);
                closeModal();
            }
        } catch (error) {
            console.log(error);
            toast.error(`Could not create the Project`);
        }
    };

    useEffect(() => {
        console.log(formState.isSubmitting);
    }, [formState.isSubmitting]);

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
                        {!formState.isSubmitting && (
                            <>
                                <CustomButton
                                    disabled={
                                        !formState.isValid ||
                                        skills.length === 0
                                    }
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    CREATE
                                </CustomButton>
                                <CustomButton danger onClick={closeModal}>
                                    CANCEL
                                </CustomButton>
                            </>
                        )}
                        {formState.isSubmitting && <p>loading...</p>}
                    </>
                }
            >
                <TextFieldInput
                    id="name"
                    name="name"
                    label="Name"
                    type="text"
                    {...register("name", {
                        pattern: {
                            value: /.*\S.*/,
                            message: "Name cannot be empty",
                        },
                        required: {
                            value: true,
                            message: "A name is required",
                        },
                        maxLength: {
                            value: 120,
                            message: "The name is too long",
                        },
                    })}
                    errorText={formState.errors.name?.message}
                />
                <TextAreaInput
                    id="description"
                    name="description"
                    label="Description"
                    rows={3}
                    {...register("description", {
                        pattern: {
                            value: /.*\S.*/,
                            message: "Description cannot be empty",
                        },
                        maxLength: {
                            value: 8000,
                            message: "The description is too long",
                        },
                        minLength: {
                            value: 10,
                            message: "The description is too short",
                        },
                        required: {
                            value: true,
                            message: "A description is required",
                        },
                    })}
                    errorText={formState.errors.description?.message}
                />
                <TextFieldInput
                    id="peopleRequired"
                    name="peopleRequired"
                    label="No. of People Required"
                    type="text"
                    {...register("peopleRequired", {
                        required: {
                            value: true,
                            message: "This field is required",
                        },
                        max: {
                            value: 50,
                            message: "Can't add more than 50 people",
                        },
                        min: {
                            value: 0,
                            message: "Can't be less than zero",
                        },
                    })}
                    errorText={formState.errors.peopleRequired?.message}
                />
                <ChipsInput
                    id="requiredSkills"
                    name="requiredSkills"
                    label="Skills Required"
                    type="text"
                    onChipsInput={onSkillsInput}
                    onBlur={() => {
                        setTouched(prev => ({ ...prev, skills: true }));
                    }}
                    errorText={
                        touched.skills &&
                        skills.length === 0 &&
                        "add some skills"
                    }
                />

                <ChipsInput
                    id="githubRepos"
                    name="githubRepos"
                    label="Github Repo Links (Optional)"
                    type="text"
                    onChipsInput={onGithubReposInput}
                />
            </Modal>
        </>
    );
};
