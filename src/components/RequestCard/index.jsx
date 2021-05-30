import { Card } from "../Card";
import { CustomButton } from "../Button";
import Avatar from "../Avatar";
import { useContext } from "react";
import { UserProfileContext } from "contexts/userProfile.context";
import { toast } from "react-toastify";
import { API } from "utils/api";
import { AuthContext } from "contexts/auth.context";

export const RequestCard = ({ request }) => {
    const { project, sender } = request;
    const userProfile = useContext(UserProfileContext);
    const auth = useContext(AuthContext);

    console.log(request);

    const acceptRequest = async () => {
        try {
            const response = await API(
                auth.state.user?.token,
                auth.state.user?.githubToken
            ).post(`requests/${request._id}/accept`);
            console.log(response);

            if (/[2-3]0[0-9]/.test(response.status)) {
                toast.success("Request Accepted!");
            } else {
                throw new Error(response.data.error.message);
            }
        } catch (error) {
            toast.error("Could not accept request");
            console.log(error);
        }
    };

    if (!userProfile.profile) return null;

    return (
        <Card>
            <Card.Row>
                <Avatar alt={"sender"} src={sender.profilePicURL} tiny />
                <Card.Text>
                    {sender.github.username} requested to join project{" "}
                    {project.name}
                </Card.Text>
            </Card.Row>
            {userProfile.profile._id === project.mentor._id && (
                <Card.Row>
                    <CustomButton onClick={acceptRequest}>ACCEPT</CustomButton>
                    <CustomButton danger>DECLINE</CustomButton>
                </Card.Row>
            )}
            {userProfile.profile._id === sender._id && (
                <Card.Row>
                    <CustomButton danger>DELETE</CustomButton>
                </Card.Row>
            )}
        </Card>
    );
};
