import { AiFillGithub } from "react-icons/ai";
import { StyledLoginButton } from "./style";

export const GithubLoginButton = ({ signInHandler }) => {
    return (
        <StyledLoginButton onClick={signInHandler}>
            <AiFillGithub className={"icon"} />
            <span>Log in with Github</span>
        </StyledLoginButton>
    );
};
