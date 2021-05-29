import { useState } from "react";
import { StyledAddProjectButton } from "./style";
import { GoPlus } from "react-icons/go";
import { Modal } from "../Modal";
import { CustomButton, CustomButtonText } from "../Button";

export const CreateProjectModal = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

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
                                <CustomButton>
                                    <CustomButtonText>CREATE</CustomButtonText>
                                </CustomButton>
                                <CustomButton>
                                    <CustomButtonText onClick={closeModal}>
                                        CANCEL
                                    </CustomButtonText>
                                </CustomButton>
                            </>
                        }
                    </>
                }
            >
                <h1>Form</h1>
            </Modal>
        </>
    );
};
