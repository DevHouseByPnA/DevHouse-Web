import { AuthContext } from "contexts/auth.context";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "../../utils/api";
import { StyledContainer } from "./style";
import { Card } from "../Card";
import { RequestCard } from "../RequestCard";

export const SentRequestsSection = () => {
    const [requests, setRequests] = useState([]);
    const auth = useContext(AuthContext);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await API(
                    auth.state.user?.token,
                    auth.state.user?.githubToken
                ).get(`/requests/sent`);
                console.log(response);
                if (/[2-3]0[0-9]/.test(response.status)) {
                    setRequests([...response.data.requests]);
                }
            } catch (error) {
                console.log(error);
                toast.error("Could not get sent requests");
            }
        };

        fetchRequests();
    }, [auth.state.user]);

    if (!auth.state.user) return null;

    return (
        <StyledContainer>
            <Card.Title>Sent</Card.Title>
            {requests.map(req => (
                <RequestCard key={req._id} request={req} />
            ))}
        </StyledContainer>
    );
};
