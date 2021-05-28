import { StyledContainer, StyledLoginCard } from "./style";
import { GithubLoginButton } from "../../components/GithubLoginButton";
import { signInWithGithub } from "../../utils/firebase";
import { API } from "utils/api";
import { useContext } from "react";
import { UserProfileContext } from "../../contexts/userProfile.context";

export const LoginPage = () => {
    const userProfile = useContext(UserProfileContext);

    const loginWithGithub = async () => {
        try {
            const { authToken, errorCode, errorMessage } =
                await signInWithGithub();

            if (authToken) {
                // console.log("send create user req");
                const response = await API(authToken).post(`/users`);
                // console.log("repsonse: ", response);
                if (/20[0-9]/.test(response.status) && response.data.user) {
                    console.log(response.data);
                    userProfile.setProfile(response.data.user);
                }
            } else if (errorCode && errorMessage) {
                console.log({
                    errorCode,
                    errorMessage,
                });
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.log(error);
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
