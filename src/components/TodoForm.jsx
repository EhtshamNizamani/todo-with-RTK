import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';
export const TodoForm = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();

        dispatch(addTodo(input))
        setInput('');
    }
    return (
        <div className='flex mb-4'>

            <input type="text" onChange={(e) => setInput(e.target.value)} className=" w-full bg-cyan-800 outline-none p-1 text-sm rounded-l-sm " />
            <button type="button" onClick={handleClick} className="bg-green-800 p-1 text-sm rounded-r-sm">
                Add
            </button>
        </div>
    )
}


export default TodoForm