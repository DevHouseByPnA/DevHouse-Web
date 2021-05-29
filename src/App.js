import { useContext } from "react";
import { Switch, Redirect } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AuthContext } from "./contexts/auth.context";
import { LoginPage } from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { UnauthenticatedRoute } from "./components/UnauthenticatedRoute";
import { CustomThemeContext } from "./contexts/theme.context";
import MainNavigation from "./navigation/MainNavigation";
import { NAV_ROUTE } from "./navigation/navRoutes";
import { CustomText } from "./components/CustomText";
import { ProfilePage } from "./pages/Profile";

const App = () => {
    const auth = useContext(AuthContext);
    const { themeState } = useContext(CustomThemeContext);

    if (auth.loading) {
        return <h1>Loading App...</h1>;
    }

    const protectedRoutes = (
        <Switch>
            <PrivateRoute exact path={`${NAV_ROUTE.PROJECTS}`}>
                <CustomText.PageTitle>Projects</CustomText.PageTitle>
            </PrivateRoute>
            <PrivateRoute exact path={`${NAV_ROUTE.WORKSPACES}`}>
                <CustomText.PageTitle>workspaces</CustomText.PageTitle>
            </PrivateRoute>
            <PrivateRoute exact path={`${NAV_ROUTE.REQUESTS}`}>
                <CustomText.PageTitle>Requests</CustomText.PageTitle>
            </PrivateRoute>
            <PrivateRoute exact path={`${NAV_ROUTE.STARRED}`}>
                <CustomText.PageTitle>Starred</CustomText.PageTitle>
            </PrivateRoute>
            <PrivateRoute exact path={`${NAV_ROUTE.PROFILE}`}>
                <ProfilePage />
            </PrivateRoute>
            <Redirect to={`${NAV_ROUTE.PROJECTS}`} />
        </Switch>
    );

    const unauthenticatedRoutes = (
        <Switch>
            <UnauthenticatedRoute exact path={`${NAV_ROUTE.LOGIN}`}>
                <LoginPage />
            </UnauthenticatedRoute>
            <Redirect to={`${NAV_ROUTE.LOGIN}`} />
        </Switch>
    );

    return (
        <>
            <StyledThemeProvider theme={themeState}>
                {!auth.state.user && unauthenticatedRoutes}
                {auth.state.user && (
                    <MainNavigation>{protectedRoutes}</MainNavigation>
                )}
            </StyledThemeProvider>
        </>
    );
};

export default App;
