import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

function TodoItem({ todo }) {
    const dispatch = useDispatch();

    const deleteTodo = () => {

        dispatch(removeTodo(todo.id));
    }

    return (

        <div className="flex flex-row rounded-md bg-neutral-500">
            <input type="checkbox" className=' mx-1' name="" />

            <input type="text" value={todo.todo} className=" w-full bg bg-neutral-500 outline-none p-1 text-sm  overflow-hidden rounded-md " />
            <button type="button">
                💾
                {/* ✎ */}
            </button>
            <button type="button" onClick={deleteTodo}>
                ❌
            </button>

        </div>

    )
}

export default TodoItem