import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";

export const UnauthenticatedRoute = ({ children, ...rest }) => {
    const auth = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                !auth.state.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
