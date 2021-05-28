import { useContext } from "react";
import { Switch, Redirect } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AuthContext } from "./contexts/auth.context";
import { LoginPage } from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { UnauthenticatedRoute } from "./components/UnauthenticatedRoute";
import { signOut } from "./utils/firebase";
import { CustomThemeContext } from "./contexts/theme.context";
import MainNavigation from "./navigation/MainNavigation";
import { NAV_ROUTE } from "navigation/navRoutes";

const App = () => {
    const auth = useContext(AuthContext);
    const { themeState } = useContext(CustomThemeContext);

    if (auth.loading) {
        return <h1>Loading App...</h1>;
    }

    const protectedRoutes = (
        <Switch>
            <PrivateRoute exact path={`${NAV_ROUTE.PROJECTS}`}>
                <h1>Hello there you cool Dev!</h1>
                <button
                    onClick={() => {
                        signOut();
                    }}
                >
                    Sign Out
                </button>
            </PrivateRoute>
            <PrivateRoute exact path={`${NAV_ROUTE.WORKSPACES}`}>
                <h1>workspaces</h1>
            </PrivateRoute>
            <PrivateRoute exact path={`${NAV_ROUTE.REQUESTS}`}>
                <h1>Requests</h1>
            </PrivateRoute>
            <PrivateRoute exact path={`${NAV_ROUTE.STARRED}`}>
                <h1>Starred</h1>
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
