import { AuthContext } from "contexts/auth.context";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "../../utils/api";
import { StyledContainer } from "./style";
import { Card } from "../Card";
import { RequestCard } from "../RequestCard";

export const ReceivedRequestsSection = () => {
    const [requests, setRequests] = useState([]);
    const auth = useContext(AuthContext);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await API(
                    auth.state.user?.token,
                    auth.state.user?.githubToken
                ).get(`/requests/received`);
                console.log(response.data.requests);
                if (/[2-3]0[0-9]/.test(response.status)) {
                    setRequests([...response.data.requests]);
                    console.log("Received: ", [...response.data.requests]);
                }
            } catch (error) {
                console.log(error);
                toast.error("Could not get received requests");
            }
        };

        fetchRequests();
    }, [auth.state.user]);

    if (!auth.state.user) return null;
    return (
        <StyledContainer>
            <Card.Title>Received</Card.Title>
            {requests.map(req => (
                <RequestCard key={req._id} request={req} />
            ))}
        </StyledContainer>
    );
};
