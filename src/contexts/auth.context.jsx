import {
    createContext,
    useCallback,
    useEffect,
    useReducer,
    useState,
} from "react";
// eslint-disable-next-line no-unused-vars
import { firebase, firebaseAuth } from "../utils/firebase";

const INITIAL_STATE = {
    user: undefined,
};

const AuthActionType = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthActionType.LOGIN:
            return {
                ...state,
                user: action.payload,
            };
        case AuthActionType.LOGOUT:
            return {
                ...state,
                user: undefined,
            };
        default:
            return state;
    }
};

export const AuthContext = createContext({
    state: INITIAL_STATE,
    dispatch: () => null,
    loading: true,
    setLoading: () => null,
});

const loginAction = (dispatch, userData) => {
    dispatch({
        type: AuthActionType.LOGIN,
        payload: userData,
    });
};

const logoutAction = dispatch => {
    dispatch({
        type: AuthActionType.LOGOUT,
    });
};

let refreshTokenTimer;

export const AuthProvider = props => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
    const [loading, setLoading] = useState(true);

    const handleUserAuthState = useCallback(async user => {
        setLoading(true);

        if (!user) {
            logoutAction(dispatch);
            setLoading(false);
            return;
        }

        const idTokenResult = await user.getIdTokenResult(true);

        loginAction(dispatch, {
            name: user.displayName || "",
            email: user.email || "",
            token: idTokenResult.token,
            githubToken: localStorage.getItem("githubToken"),
        });

        setLoading(false);

        refreshTokenTimer = setTimeout(() => {
            handleUserAuthState(user);
        }, 59 * 60 * 1000);
    }, []);

    useEffect(() => {
        console.log(state.user);
    }, [state.user]);

    useEffect(() => {
        const unsubscribeAuth = firebaseAuth.onIdTokenChanged(async user => {
            await handleUserAuthState(user);
        });

        return () => {
            unsubscribeAuth();
            clearTimeout(refreshTokenTimer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const value = { state, dispatch, loading, setLoading };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
};
