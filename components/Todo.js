import { useContext } from "react"
import { TodoContext } from "../TodoContextProvider"
import Input from "./Input"
import TodoList from "./TodoList"

const Todo = () => {
    const todoContext = useContext(TodoContext);
    const todos = todoContext.todos;
    const setTodos = todoContext.setTodos;
    return (
        <div>
            <div className="todo-form">
                <Input />

                <ul>
                    {
                        todos.map((todo) => (
                            <TodoList todos={todos} todo={todo} setTodos={setTodos} text={todo.text} key={todo.id} />
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default Todo
