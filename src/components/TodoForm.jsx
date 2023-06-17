import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoForm = ({ addTodoItem }) => {
    const [newTodo, setNewTodo] = useState({ id: null, task: "", compelted: false });

    function handleChange(e) {
        setNewTodo({ ...newTodo, task: e.target.value });
    }

    function addTodo(e) {
        if (newTodo.task.trim()) addTodoItem({ ...newTodo, id: Date.now() });
        setNewTodo({ ...newTodo, task: "" });
    }
    function handleEnter(e) {
        if (e.key == "Enter") {
            addTodo();
        }
    }

    return (
        <div className="d-flex m-4 " onKeyDown={handleEnter}>
            <input
                className="form-control add-task flex-grow-1"
                type="text"
                name="newTask"
                value={newTodo.task}
                onChange={handleChange}
                placeholder="Add New Task..."
            />
            <FontAwesomeIcon icon={faPlus} className="btn btn-dark icon add" onClick={addTodo} />
        </div>
    );
};

export default TodoForm;
