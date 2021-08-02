import React from 'react'

const TodoList = ({ text, todos, todo, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id))
    }
    const checkHandler = () => {
        setTodos(todos.map((item) => {
            if (todo.id === item.id) {
                return {
                    ...item, completed: !item.completed
                }

            }
            return item
        }))
    }
    return (
        <div>
            <li className={todo.completed ? 'list-item completed' : 'list-item'}>{text}</li>
            <button onClick={checkHandler}><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default TodoList
