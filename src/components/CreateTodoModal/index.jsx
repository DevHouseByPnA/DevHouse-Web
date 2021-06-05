import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledAddTodoButton } from "./style";
import { GoPlus } from "react-icons/go";
import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { CustomButton } from "../Button";
import { TextAreaInput, TextSelectInput } from "../Input";
import { API } from "../../utils/api";
import { AuthContext } from "../../contexts/auth.context";
import { toast } from "react-toastify";

const todoStatusOptions = ["planned", "ongoing", "done"];

export const CreateTodoModal = ({ onCreateTodo }) => {
    const [showModal, setShowModal] = useState(false);
    const { id: workspaceId } = useParams();

    const { register, handleSubmit, formState } = useForm({
        mode: "all",
        defaultValues: {
            description: "",
            status: "planned",
        },
    });
    const auth = useContext(AuthContext);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const onSubmit = async input => {
        const data = {
            ...input,
        };

        try {
            const response = await API(
                auth.state.user?.token,
                auth.state.user?.githubToken
            ).post(`/workspaces/${workspaceId}/todos`, data);
            console.log(response);
            if (/[2-3]0[0-9]/.test(response.status)) {
                onCreateTodo(response.data.todo);
                toast.success(`Created Todo`);
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
            <StyledAddTodoButton onClick={openModal}>
                <GoPlus className="icon" />
            </StyledAddTodoButton>
            <Modal
                headerComponent={`Add Todo`}
                onCancel={closeModal}
                show={showModal}
                footerComponent={
                    <>
                        {!formState.isSubmitting && (
                            <>
                                <CustomButton
                                    disabled={!formState.isValid}
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    ADD
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
                            value: 7 * 150,
                            message: "The description is too long",
                        },

                        required: {
                            value: true,
                            message: "A description is required",
                        },
                    })}
                    errorText={formState.errors.description?.message}
                />
                <TextSelectInput
                    id="status"
                    name="status"
                    label="Status"
                    optionList={todoStatusOptions.map(val => ({
                        key: val,
                        value: val,
                    }))}
                    {...register("status", {
                        pattern: {
                            value: /.*\S.*/,
                            message: "Type cannot be empty",
                        },
                        required: { value: true, message: "Type is required" },
                    })}
                    errorText={formState.errors.status?.message}
                />
            </Modal>
        </>
    );
};
