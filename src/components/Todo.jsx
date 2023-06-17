import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
    const [todoList, setTodoList] = useState([]);

    function addTodoItem(item) {
        setTodoList([...todoList, item]);
    }

    function deleteTodoItem(id) {
        setTodoList(todoList.filter((item) => item.id !== id));
    }

    function updateTodoItem(id, updatedItem) {
        setTodoList(todoList.map((item) => (item.id == id ? updatedItem : item)));
    }

    return (
        <>
            <TodoForm addTodoItem={(item) => addTodoItem(item)} />
            <TodoList
                todoList={todoList}
                deleteTodoItem={(id) => deleteTodoItem(id)}
                updateTodoItem={(id, item) => updateTodoItem(id, item)}
            />
        </>
    );
};

export default Todo;
