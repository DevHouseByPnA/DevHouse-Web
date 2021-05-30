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
import { ProjectsPage } from "./pages/Projects";
import { ProjectsProvider } from "./contexts/projects.context";
import { ProjectDetailPage } from "./pages/ProjectDetail";
import { RequestsPage } from "./pages/Requests";
import { WorkspacesPage } from "./pages/Workspaces";
import { WorkspaceDetailPage } from "./pages/WorkspaceDetail";
import { WorkspaceCommitsPage } from "./pages/WorkspaceCommits";

const App = () => {
    const auth = useContext(AuthContext);
    const { themeState } = useContext(CustomThemeContext);

    if (auth.loading) {
        return <h1>Loading App...</h1>;
    }

    const protectedRoutes = (
        <Switch>
            <PrivateRoute exact path={`${NAV_ROUTE.PROJECTS}`}>
                <ProjectsPage />
            </PrivateRoute>
            <PrivateRoute exact path={`${NAV_ROUTE.PROJECTS}/:id`}>
                <ProjectDetailPage />
            </PrivateRoute>
            <PrivateRoute exact path={`${NAV_ROUTE.WORKSPACES}`}>
                <WorkspacesPage />
            </PrivateRoute>
            <PrivateRoute exact path={`${NAV_ROUTE.WORKSPACES}/:id`}>
                <WorkspaceDetailPage />
            </PrivateRoute>
            <PrivateRoute exact path={`${NAV_ROUTE.WORKSPACES}/:id/commits`}>
                <WorkspaceCommitsPage />
            </PrivateRoute>
            <PrivateRoute exact path={`${NAV_ROUTE.REQUESTS}`}>
                <RequestsPage />
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
                    <MainNavigation>
                        <ProjectsProvider>{protectedRoutes}</ProjectsProvider>
                    </MainNavigation>
                )}
            </StyledThemeProvider>
        </>
    );
};

export default App;
