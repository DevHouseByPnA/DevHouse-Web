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

const App = () => {
    const auth = useContext(AuthContext);
    const { themeState } = useContext(CustomThemeContext);

    if (auth.loading) {
        return <h1>Loading App...</h1>;
    }

    return (
        <>
            <StyledThemeProvider theme={themeState}>
                <MainNavigation>
                    <Switch>
                        <UnauthenticatedRoute exact path="/login">
                            <LoginPage />
                        </UnauthenticatedRoute>
                        <PrivateRoute exact path="/">
                            <h1>Hello there you cool Dev!</h1>
                            <button
                                onClick={() => {
                                    signOut();
                                }}
                            >
                                Sign Out
                            </button>
                        </PrivateRoute>
                        <Redirect to="/" />
                    </Switch>
                </MainNavigation>
            </StyledThemeProvider>
        </>
    );
};

export default App;
