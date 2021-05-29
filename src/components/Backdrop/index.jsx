import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { BackdropContainer } from "./style";

export const Backdrop = props => {
    const backDrop = (
        <CSSTransition
            in={props.show}
            timeout={300}
            classNames={{
                enterActive: `enter-active`,
                enterDone: `enter-done`,
                exitActive: `exit-active`,
                exit: `exit`,
            }}
            mountOnEnter
            unmountOnExit
        >
            <BackdropContainer
                key="backdrop"
                onClick={props.onClick}
            ></BackdropContainer>
        </CSSTransition>
    );

    return ReactDOM.createPortal(
        backDrop,
        document.getElementById("backdrop-hook")
    );
};
