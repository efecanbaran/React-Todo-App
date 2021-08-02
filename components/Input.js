import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContextProvider';


const Input = () => {

    const todoContext = useContext(TodoContext);
    const [text, setText] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if (text === "") {
            setText('')
        } else {
            todoContext.addTodo(text)
            setText('')
        }
    }

    const changeInput = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <input value={text} onChange={changeInput} className="input-todo" required></input>
                <button onClick={submitHandler}><i className="fas fa-plus"></i></button>
            </form>
        </div>
    )
}

export default Input
