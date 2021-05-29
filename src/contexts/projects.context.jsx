import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { API } from "../utils/api";
import { AuthContext } from "./auth.context";

export const ProjectsContext = createContext({
    projects: [],
    loading: true,
    setProjects: () => null,
    fetchProjects: () => null,
});

export const ProjectsProvider = props => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const auth = useContext(AuthContext);

    const fetchProjects = useCallback(async () => {
        if (!auth.state.user) {
            return;
        }

        try {
            const response = await API(auth.state.user.token).get(`/projects`);
            console.log(response);
            if (/[2-3]0[0-9]/.test(response.status)) {
                setProjects(response.data.projects);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [auth.state.user]);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    return (
        <ProjectsContext.Provider
            value={{
                projects,
                setProjects,
                fetchProjects,
                loading,
            }}
        >
            {props.children}
        </ProjectsContext.Provider>
    );
};
