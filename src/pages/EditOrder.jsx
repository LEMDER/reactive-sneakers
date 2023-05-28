import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useNavigate} from 'react-router-dom'
import Employees from '../Employees';


function EditOrder() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [id, setId] = useState('');

  let history = useNavigate();

  var index = Employees.map(function(e){
    return e.id;
  }).indexOf(id);

  const handleSubmit =(e) => {
    e.preventDefault();

    let a = Employees[index];
    a.name = name;
    a.amount = amount;
    
    history ("/orders"); 
  }

  useEffect(()=> {
    setName(localStorage.getItem('name'))
    setAmount(localStorage.getItem('amount'))
    setId(localStorage.getItem('id'))
  }, [])

  return (
    <div className="content">
      <div className="myOrders">
        <h1>Edit order</h1>
      </div>

      <div className="loading">
        <Form className="d-grid gap-2" >
          <Form.Group className='mb-3' controlId='formName'>
            <Form.Control type='text' placeholder='Enter name' value={name} required onChange={(e) => setName(e.target.value)}>
            </Form.Control>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formAmount'>
            <Form.Control type='number' placeholder='Enter amount of sneaker' value={amount} required onChange={(e) => setAmount(e.target.value)}>
            </Form.Control>
          </Form.Group>
          <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Form>

  
      </div>
    </div>
  );
}

export default EditOrder;