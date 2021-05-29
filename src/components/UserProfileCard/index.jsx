import {
    ProfileContainer,
    StyledName,
    StyledEmail,
    LogoutButtonContainer,
    StyledGithub,
} from "./style";
import { Card } from "../Card";
import Avatar from "../Avatar";
import { useContext } from "react";
import { UserProfileContext } from "../../contexts/userProfile.context";
import { CustomButton } from "../Button";
import { signOut } from "../../utils/firebase";

export const UserProfileCard = () => {
    const userProfile = useContext(UserProfileContext);

    return (
        <Card>
            <ProfileContainer>
                {userProfile.profile && (
                    <>
                        <LogoutButtonContainer>
                            <CustomButton danger onClick={signOut}>
                                SIGN OUT
                            </CustomButton>
                        </LogoutButtonContainer>
                        <Avatar
                            alt="profile"
                            src={userProfile.profile.profilePicURL}
                            medium
                        />
                        <StyledName>{userProfile.profile.name}</StyledName>
                        <StyledEmail>{userProfile.profile.email}</StyledEmail>
                        <StyledGithub
                            target="_blank"
                            href={userProfile.profile.github.profileURL}
                        >
                            {userProfile.profile.github.username}
                        </StyledGithub>
                    </>
                )}
                {!userProfile.profile && (
                    <Card.TextDisabled>loading...</Card.TextDisabled>
                )}
            </ProfileContainer>
        </Card>
    );
};
