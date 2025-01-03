import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useSelector } from 'react-redux'
function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div className='max-w-md m-auto'>


        <h1 className="text-3xl font-bold text-cyan-700">
          Todo with reduct toolkit!
        </h1>

        <TodoForm />
        {todos.map((todo) => (
          <div key={todo.id}>

            <TodoItem todo={todo} />
          </div>

        ))}
      </div>
    </>
  )
}

export default App
