import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const { Group, Label, Control } = Form

const TodoForm = ({addData}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    addData(value)
  }

  const handleOnChange = e => {
    setValue(e.target.value)
  }

  return (
    <Form onSubmit={handleSubmit} className="form" >

      <Group className="form-group">
        <h1>Add Todo</h1>
        <Control 
          type="text" 
          className="input" 
          value={value}
          placeholder="Add new todo"
          onChange={handleOnChange}
        />
      </Group>
      
      <div className="text-center">
        <Button className="" variant="primary my-3" type="submit">Submit</Button>
      </div>

    </Form>
  )
}

export default TodoForm