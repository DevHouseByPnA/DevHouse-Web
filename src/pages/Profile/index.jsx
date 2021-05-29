import { StyledContainer, StyledContent } from "./style";
import { CustomText } from "../../components/CustomText";
import { UserProfileCard } from "../../components/UserProfileCard";
import { UserProfileAbout } from "../../components/UserProfileAbout";
import { UserProfileSkills } from "../../components/UserProfileSkills";

export const ProfilePage = () => {
    return (
        <StyledContainer>
            <CustomText.PageTitle>Profile</CustomText.PageTitle>
            <StyledContent>
                <UserProfileCard />
                <UserProfileAbout />
                <UserProfileSkills />
            </StyledContent>
        </StyledContainer>
    );
};
