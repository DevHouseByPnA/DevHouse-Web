import { useHistory, useLocation } from "react-router-dom";
import { StyledContainer, StyledLoginCard } from "./style";
import { GithubLoginButton } from "../../components/GithubLoginButton";
import { signInWithGithub } from "../../utils/firebase";

export const LoginPage = () => {
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const loginWithGithub = async () => {
        const { token, user, errorCode, errorMessage } =
            await signInWithGithub();

        if (token && user) {
            history.replace(from);
        } else if (errorCode && errorMessage) {
            console.log({
                errorCode,
                errorMessage,
            });
        }
    };

    return (
        <StyledContainer>
            <StyledLoginCard>
                <GithubLoginButton signInHandler={loginWithGithub} />
            </StyledLoginCard>
        </StyledContainer>
    );
};
