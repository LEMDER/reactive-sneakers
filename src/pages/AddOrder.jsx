import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useNavigate} from 'react-router-dom'
import Employees from '../Employees';
import {v4 as uuid} from 'uuid';


function AddOrder() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  let history = useNavigate();

  const handleSubmit =(e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0,8);

    let a = name,
    b = amount;
    Employees.push({id:uniqueId, name: a, amount:b});
    history ("/orders")
  }

  return (
    <div className="content">
      <div className="myOrders">
        <h1>Add orders</h1>
      </div>

      <div className="loading">
        <Form className="d-grid gap-2" >
          <Form.Group className='mb-3' controlId='formName'>
            <Form.Control type='text' placeholder='Enter name' required onChange={(e) => setName(e.target.value)}>
            </Form.Control>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formAmount'>
            <Form.Control type='number' placeholder='Enter amount of sneaker' required onChange={(e) => setAmount(e.target.value)}>
            </Form.Control>
          </Form.Group>
          <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>

  
      </div>
    </div>
  );
}

export default AddOrder;