import { MainContainer } from "./style";
import MainNavbar from "../MainNavbar";

const MainNavigation = props => {
    return (
        <>
            <MainNavbar></MainNavbar>
            <MainContainer>{props.children}</MainContainer>
        </>
    );
};

export default MainNavigation;
