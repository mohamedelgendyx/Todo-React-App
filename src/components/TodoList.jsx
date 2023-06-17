import TodoItem from "./TodoItem";

const TodoList = ({ todoList, deleteTodoItem, updateTodoItem }) => {
    return (
        <ul>
            {todoList.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodoItem={deleteTodoItem}
                        updateTodoItem={(id, item) => updateTodoItem(id, item)}
                    />
                );
            })}
        </ul>
    );
};

export default TodoList;
