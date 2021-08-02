import React, { createContext, useState} from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todos, setTodos ] = useState([]);

    const addTodo = (data) => {
        setTodos([...todos, {id: Math.random()*1000, completed: false, text: data}])
    }

    return(
        <div>
            <TodoContext.Provider value={{todos, addTodo, setTodos}}>
                {props.children}
            </TodoContext.Provider>
        </div>
    )

}

export default TodoContextProvider;