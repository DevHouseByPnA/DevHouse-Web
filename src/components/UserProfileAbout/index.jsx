import { UserProfileContext } from "contexts/userProfile.context";
import { useContext } from "react";
import { Card } from "../Card";

export const UserProfileAbout = () => {
    const userProfile = useContext(UserProfileContext);

    return (
        <Card>
            {userProfile.profile && (
                <>
                    <Card.Title>About</Card.Title>
                    {userProfile.profile.about && (
                        <Card.Text>{userProfile.profile.about}</Card.Text>
                    )}
                    {!userProfile.profile.about?.trim() && (
                        <Card.TextDisabled>
                            Your 'About' is empty
                        </Card.TextDisabled>
                    )}
                </>
            )}
            {!userProfile.profile && (
                <Card.TextDisabled>Loading...</Card.TextDisabled>
            )}
        </Card>
    );
};
