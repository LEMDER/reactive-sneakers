import React from 'react';
import axios from 'axios';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useNavigate} from 'react-router-dom'
import Employees from '../Employees';


function Orders() {

 let history = useNavigate();

 const handleEdit = (id, name, amount) => {
  
  localStorage.setItem('name', name);
  localStorage.setItem('amount', amount);
  localStorage.setItem('id', id);
 }

 const handleDelete = (id) => {
  var index = Employees.map(function(e){
    return e.id
  }).indexOf(id);

  Employees.splice(index, 1);

  history('/orders');
 }


  return (
    <div className="content">
      <div className="myOrders">
        <h1>Orders to shop</h1>
      </div>

      <div className="loading">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>
                Id
              </th>
              <th>
                Name
              </th>
              <th>
                Amount
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0 ? Employees.map((item) => {
              return(
                <tr>
                    <td>
                        {item.id}
                    </td>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.amount}
                    </td>
                    <td>
                      <Link to={'/edit'}>
                      <Button className="btn btn-dark btn-sm" onClick={() => handleEdit(item.id, item.name, item.amount)}>EDIT</Button>
                      </Link>
                      &nbsp;
                      <Button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)} >DELETE</Button>
                    </td>
                  </tr>
              )
            }):"No orders"
          }
                
          </tbody>
        </Table>

        <br></br>
        <Link className='d-grid gap-2' to="/create">
          <Button className='btn-success'>Add</Button>
        </Link>
      </div>
    </div>
  );
}

export default Orders;