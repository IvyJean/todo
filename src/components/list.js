import React from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const { Body } = Card

const FormList = ({ data, index, deleteData, checkData }) => {

  const handleDeleteData = () => {
    deleteData(index)
  }

  const handleCheckData = () => {
    checkData(index)
  }

  return (
    <Card>
      <Body className='d-flex justify-content-between'>
        <p style={{ textDecoration: data.isDone ? "line-through" : "" }} >{data.text}</p>
        <div>
          <Button variant="outline-success" onClick={handleCheckData}>✓</Button>{' '}
          <Button variant="outline-danger" onClick={handleDeleteData}>✕</Button>
        </div>
      </Body>
    </Card>
  )
}

export default FormList