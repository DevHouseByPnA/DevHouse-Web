import { StyledContainer, StyledContent } from "./style";
import { CustomText } from "../../components/CustomText";
import { SentRequestsSection } from "../../components/SentRequestsSection";
import { ReceivedRequestsSection } from "../../components/ReceivedRequestsSection";

export const RequestsPage = () => {
    return (
        <StyledContainer>
            <CustomText.PageTitle>Requests</CustomText.PageTitle>
            <StyledContent>
                <SentRequestsSection />
                <ReceivedRequestsSection />
            </StyledContent>
        </StyledContainer>
    );
};
