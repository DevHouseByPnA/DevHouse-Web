import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";

export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.state.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
