import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, completeTodo, updateTodo } from '../features/todo/todoSlice';

function TodoItem({ todo }) {
    const [input, setInput] = useState(todo.todo)
    const [isEditable, setIsEditable] = useState(false)
    const dispatch = useDispatch();

    const deleteTodo = () => {

        dispatch(removeTodo(todo.id));
    }

    const compeleteTodo = () => {
        dispatch(completeTodo(todo.id));


    }
    const editTodo = (e) => {
        e.preventDefault();

        if (isEditable) {
            dispatch(updateTodo({ id: todo.id, text: input }))
            setIsEditable(false);
        }
        else {
            setIsEditable(!isEditable);
        }
    }

    return (

        <div className={`flex mt-2 rounded-md ${todo.isCompleted ? "bg-yellow-50" : ""}  bg-neutral-500`} >
            <input type="checkbox" onChange={compeleteTodo} checked={todo.isCompleted} className=' mx-1' name="" />

            <input type="text" onChange={(e) => setInput(e.target.value)} readOnly={!isEditable} value={input} className={` w-full ${todo.isCompleted ? "line-through bg-yellow-50 " : ""} bg bg-neutral-500 outline-none p-1 text-sm  overflow-hidden rounded-md `} />
            <button type="button" onClick={editTodo}>
                {isEditable ? "💾" : "✎"}
            </button>
            <button type="button" onClick={deleteTodo}>
                ❌
            </button>

        </div >

    )
}

export default TodoItem