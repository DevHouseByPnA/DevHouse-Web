import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledContainer, StyledContent, StyledTodoContainer } from "./style";
import { AuthContext } from "../../contexts/auth.context";
import { CustomText } from "../../components/CustomText";
import { API } from "../../utils/api";
import { CreateTodoModal } from "../../components/CreateTodoModal";
import { TodoCard } from "../../components/TodoCard";
import { Card } from "../../components/Card";

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

    const renderTodos = (todos = []) => {
        return todos
            .sort((t1, t2) => {
                if (new Date(t1.updatedAt) < new Date(t2.updatedAt)) {
                    return 1;
                } else if (new Date(t1.updatedAt) > new Date(t2.updatedAt)) {
                    return -1;
                } else {
                    return 0;
                }
            })
            .map(todo => (
                <TodoCard
                    key={todo._id}
                    todoId={todo._id}
                    description={todo.description}
                    status={todo.status}
                    lastUpdated={todo.updatedAt}
                />
            ));
    };

    return (
        <StyledContainer>
            <CustomText.PageTitle>{workspace.name} Todos</CustomText.PageTitle>
            <StyledContent>
                <CreateTodoModal
                    onCreateTodo={todo => {
                        setTodolist(prev => [...prev, todo]);
                    }}
                />
                <StyledTodoContainer>
                    <div className="section-title">
                        <Card.Text>Planned</Card.Text>
                    </div>
                    {renderTodos(
                        todolist.filter(todo => todo.status === "planned")
                    )}
                </StyledTodoContainer>
                <StyledTodoContainer>
                    <div className="section-title">
                        <Card.Text>OnGoing</Card.Text>
                    </div>
                    {renderTodos(
                        todolist.filter(todo => todo.status === "ongoing")
                    )}
                </StyledTodoContainer>
                <StyledTodoContainer>
                    <div className="section-title">
                        <Card.Text>Done</Card.Text>
                    </div>
                    {renderTodos(
                        todolist.filter(todo => todo.status === "done")
                    )}
                </StyledTodoContainer>
            </StyledContent>
        </StyledContainer>
    );
};
