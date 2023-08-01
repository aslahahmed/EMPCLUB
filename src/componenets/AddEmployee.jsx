import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import './bootstrap.min.css';
import Employees from './Employees';
import {v4 as uuid} from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function AddEmployee() {

    const [name, setName] = useState('');
    const [desig, setDesig] = useState('');
    const [email, setEmail] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = desig ,
        c= email ;

        Employees.push({id: uniqueId, Name: a, Desig: b, Email: c});

        history("/");


    }

  return  <div>
      <Form className='d-grid gap-2' style={{margin:'6rem'}}>
        <Form.Group className='mb-3' controlId='formName'>
            <Form.Control type='text' placeholder='Enter Name' required onChange={(e) => setName(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formDesig'>
            <Form.Control type='text' placeholder='Enter Designation' required onChange={(e) => setDesig(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Control type='email' placeholder='Enter E-mail' required onChange={(e) => setEmail(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type='submit' style={{ backgroundColor: 'rgb(61, 133, 197', borderRadius: '5px' }}>Submit</Button>
      </Form>
    </div>
  
}

export default AddEmployee
