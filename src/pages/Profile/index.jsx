// import { useContext } from "react";
import { StyledContainer } from "./style";
// import { UserProfileContext } from "../../contexts/userProfile.context";
import { CustomText } from "../../components/CustomText";

export const ProfilePage = () => {
    // const userProfie = useContext(UserProfileContext);

    return (
        <StyledContainer>
            <CustomText.PageTitle>Profile</CustomText.PageTitle>
        </StyledContainer>
    );
};
