import { StatusIndicator } from "./style";
import { Card } from "../Card";
import { TodoMenu } from "./TodoMenu";

export const TodoCard = ({ description, status, todoId, lastUpdated }) => {
    return (
        <Card>
            <Card.Row>
                <StatusIndicator status={status} />
                <Card.SubTitle>{status?.toUpperCase()}</Card.SubTitle>
                <TodoMenu todoId={todoId} status={status} />
            </Card.Row>
            <Card.Text>{description}</Card.Text>
            <Card.SubTitle>
                Last Updated: {new Date(lastUpdated).toLocaleString()}
            </Card.SubTitle>
        </Card>
    );
};
