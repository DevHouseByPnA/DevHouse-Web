import { UserProfileContext } from "contexts/userProfile.context";
import { useContext } from "react";
import { Card } from "../Card";

export const UserProfileSkills = () => {
    const userProfile = useContext(UserProfileContext);

    return (
        <Card>
            {userProfile.profile && (
                <>
                    <Card.Title>Skills</Card.Title>
                    {userProfile.profile.skills.length === 0 && (
                        <Card.TextDisabled>No skills added</Card.TextDisabled>
                    )}
                </>
            )}
            {!userProfile.profile && (
                <Card.TextDisabled>Loading...</Card.TextDisabled>
            )}
        </Card>
    );
};
