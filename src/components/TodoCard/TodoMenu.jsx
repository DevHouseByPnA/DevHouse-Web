import {
    TodoMenuContainer,
    StyledTodoMenu,
    StyledTodoMenuOption,
    IconContainerButton,
} from "./style";
import { FaEllipsisV } from "react-icons/fa";
import { useCallback, useContext, useState } from "react";
import { useDetectTouchOutside } from "hooks/useDetectTouchOutside";
import { API } from "utils/api";
import { AuthContext } from "contexts/auth.context";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const getNextStatus = status => {
    switch (status) {
        case "planned":
            return "ongoing";
        case "ongoing":
            return "done";
        case "done":
            return "planned";
        default:
            return "planned";
    }
};

export const TodoMenu = ({ todoId, status }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const auth = useContext(AuthContext);
    const { id: workspaceId } = useParams();

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const { ref: menuRef } = useDetectTouchOutside({
        onOutsideTouch: closeMenu,
    });

    const updateTodoStatus = useCallback(async () => {
        try {
            const response = await API(
                auth.state.user?.token,
                auth.state.user?.githubToken
            ).put(`/workspaces/${workspaceId}/todos/${todoId}`, {
                status: getNextStatus(status),
            });

            console.log(response);
            toast.success("Todo status updated, reload page to view");
        } catch (error) {
            toast.error("Cannot update status");
        } finally {
            closeMenu();
        }
    }, [auth.state.user, workspaceId, todoId, status]);

    return (
        <TodoMenuContainer ref={menuRef}>
            <IconContainerButton onClick={toggleMenu}>
                <FaEllipsisV className="icon" />
            </IconContainerButton>
            {menuOpen && (
                <StyledTodoMenu>
                    <StyledTodoMenuOption>
                        <span>DELETE</span>
                    </StyledTodoMenuOption>
                    <StyledTodoMenuOption>
                        <span onClick={updateTodoStatus}>
                            MARK {getNextStatus(status).toUpperCase()}
                        </span>
                    </StyledTodoMenuOption>
                </StyledTodoMenu>
            )}
        </TodoMenuContainer>
    );
};
