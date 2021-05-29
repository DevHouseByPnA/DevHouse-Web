import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import {
    StyledModalContainer,
    StyledModalContent,
    StyledModalFooter,
    StyledModalHeader,
} from "./style";
import { Backdrop } from "../Backdrop";

const ModalOverlay = props => {
    const content = (
        <StyledModalContainer>
            <StyledModalHeader>
                <h2>{props.headerComponent}</h2>
            </StyledModalHeader>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (props.onSubmit) {
                        props.onSubmit();
                    }
                }}
            >
                <StyledModalContent>{props.children}</StyledModalContent>
                <StyledModalFooter>{props.footerComponent}</StyledModalFooter>
            </form>
        </StyledModalContainer>
    );

    return ReactDOM.createPortal(
        content,
        document.getElementById("modal-hook")
    );
};

export const Modal = props => {
    return (
        <>
            <Backdrop show={props.show} onClick={props.onCancel} />
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={300}
                classNames={{
                    enterActive: "modal-enter-active",
                    enterDone: "modal-enter-done",
                    exitActive: "modal-exit-active",
                    exit: "modal-exit",
                }}
            >
                <ModalOverlay {...props} />
            </CSSTransition>
        </>
    );
};
