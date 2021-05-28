import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { API } from "../utils/api";
import { AuthContext } from "./auth.context";

export const UserProfileContext = createContext({
    profile: undefined,
    setProfile: () => null,
    fetchUserProfile: () => null,
});

export const UserProfileProvider = props => {
    const [userProfile, setUserProfile] = useState();
    const auth = useContext(AuthContext);

    const fetchUserProfile = useCallback(async () => {
        if (!auth.state.user) {
            return;
        }

        try {
            const response = await API(auth.state.user.token).get(
                `/users/profile`
            );

            if (/20[0-9]/.test(response.status)) {
                setUserProfile(response.data.user);
            } else {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    }, [auth.state.user]);

    useEffect(() => {
        fetchUserProfile();
    }, [fetchUserProfile]);

    return (
        <UserProfileContext.Provider
            value={{
                profile: userProfile,
                setProfile: setUserProfile,
                fetchUserProfile,
            }}
        >
            {props.children}
        </UserProfileContext.Provider>
    );
};
