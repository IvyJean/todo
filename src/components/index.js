import React, { useState } from 'react'
import '../styles/App.css'

import TodoForm from './form'
import Todolist from './list'

const initialData = [
  {
    text: "Sample todo",
    isDone: false
  },
]

const App = () => {
  const [todos, setTodos] = useState(initialData)

  const addData = (text) => {
    const newData = [...todos, {text}]
    setTodos(newData)
  }

  const deleteData = index => {
    const newData = [...todos]
    newData.splice(index, 1)
    setTodos(newData)
  }

  const checkData = index => {
    const newData = [...todos]
    newData[index].isDone = !newData[index].isDone
    setTodos(newData)
  }

  return (
    <div className="App">

      <div className="row">
        <div className="form col-sm-6">
          <TodoForm addData={addData}/>
        </div>

        <div className="list col-sm-6">
          <h1>Todo List</h1>
          {todos.map((data, index) => (
              <Todolist 
                data={data}
                key={index}
                index={index}
                deleteData={deleteData}
                checkData={checkData}
              />
          ))}
        </div>

      </div>
    </div>
  )
}

export default App
