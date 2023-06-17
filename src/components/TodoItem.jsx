import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck as regularCircleCheck,
    faPenToSquare,
    faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import {
    faCircleCheck as solidCircleCheck,
    faXmark,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo, deleteTodoItem, updateTodoItem }) => {
    const [updatedTask, setUpdatedTask] = useState(todo.task);
    const [editFlag, setEditFlag] = useState(false);

    function deleteTodo(e) {
        deleteTodoItem(todo.id);
    }

    function editTodo(e) {
        setEditFlag(true);
    }

    function updateTodo(e) {
        updateTodoItem(todo.id, { ...todo, task: updatedTask });
        setEditFlag(false);
    }

    function cancelUpdate(e) {
        setUpdatedTask(todo.task);
        setEditFlag(false);
    }

    function handleChange(e) {
        setUpdatedTask(e.target.value);
    }

    function toggleCompleted(e) {
        const completedTodo = { ...todo, completed: !todo.completed };
        updateTodoItem(todo.id, completedTodo);
    }
    return (
        <li className="todo m-4" style={{ backgroundColor: todo.completed ? "#cbedf9" : "white" }}>
            {editFlag ? (
                <div className="d-flex justify-content-between w-100">
                    <input
                        className="form-control"
                        type="text"
                        name="task"
                        value={updatedTask}
                        onChange={handleChange}
                    />
                    <div>
                        <FontAwesomeIcon
                            icon={faCheck}
                            onClick={updateTodo}
                            className="btn btn-outline-success icon"
                            style={{ height: "22px" }}
                        />
                        <FontAwesomeIcon
                            icon={faXmark}
                            onClick={cancelUpdate}
                            className="btn btn-outline-danger icon"
                            style={{ height: "22px" }}
                        />
                    </div>
                </div>
            ) : (
                <>
                    <span className="task" style={{ fontSize: "20px" }}>
                        {todo.task}
                    </span>
                    <div className="controls">
                        {!todo.completed && (
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                size="2xl"
                                onClick={editTodo}
                                className="text-primary icon"
                            />
                        )}
                        <FontAwesomeIcon
                            icon={todo.completed ? solidCircleCheck : regularCircleCheck}
                            size="2xl"
                            onClick={toggleCompleted}
                            className="text-success icon"
                        />
                        <FontAwesomeIcon
                            icon={faTrashCan}
                            size="2xl"
                            onClick={deleteTodo}
                            className="text-danger icon"
                        />
                    </div>
                </>
            )}
        </li>
    );
};

export default TodoItem;
