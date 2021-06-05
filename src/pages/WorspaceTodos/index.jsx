import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledContainer, StyledContent } from "./style";
import { AuthContext } from "../../contexts/auth.context";
import { CustomText } from "../../components/CustomText";
import { API } from "../../utils/api";
import { Card } from "../../components/Card";
import { CreateTodoModal } from "../../components/CreateTodoModal";

export const WorspaceTodosPage = () => {
    const [workspace, setWorkspace] = useState();
    const [todolist, setTodolist] = useState([]);
    const { id: workspaceId } = useParams();
    const auth = useContext(AuthContext);

    useEffect(() => {
        const fetchDetails = async () => {
            if (!auth.state.user) return;
            try {
                const response = await API(
                    auth.state.user.token,
                    auth.state.user.githubToken
                ).get(`/workspaces/${workspaceId}`);

                if (/[2-3]0[0-9]/.test(response.status)) {
                    setWorkspace(response.data.workspace);
                }
            } catch (error) {
                toast.error("Could not get Workspace!");
                console.log(error);
            }
        };

        fetchDetails();
    }, [auth.state.user, workspaceId]);

    useEffect(() => {
        const fetchTodos = async () => {
            if (!auth.state.user) return;
            try {
                const response = await API(
                    auth.state.user.token,
                    auth.state.user.githubToken
                ).get(`/workspaces/${workspaceId}/todos`);

                if (/[2-3]0[0-9]/.test(response.status)) {
                    setTodolist(response.data.todos);
                }
            } catch (error) {
                toast.error("Could not get todolist!");
                console.log(error);
            }
        };

        fetchTodos();
    }, [auth.state.user, workspaceId]);

    useEffect(() => {
        console.log(todolist);
    }, [todolist]);

    if (!workspace) {
        return null;
    }

    return (
        <StyledContainer>
            <CustomText.PageTitle>{workspace.name} Todos</CustomText.PageTitle>
            <StyledContent>
                <CreateTodoModal
                    onCreateTodo={todo => {
                        setTodolist(prev => [...prev, todo]);
                    }}
                />
                {todolist.map(todo => (
                    <Card>
                        <Card.Text>{todo.description}</Card.Text>
                        <Card.SubTitle>{todo.status}</Card.SubTitle>
                    </Card>
                ))}
            </StyledContent>
        </StyledContainer>
    );
};
