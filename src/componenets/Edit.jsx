import React, {useState,useEffect} from 'react'
import { Button, Form } from 'react-bootstrap'
import './bootstrap.min.css';
import Employees from './Employees';
import {v4 as uuid} from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Edit() {

    const [name, setName] = useState('');
    const [desig, setDesig] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();
 
    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

      let a = Employees[index];
      a.Name = name;
      a.Desig = desig;
      a.Email= email;

        history("/");
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setDesig(localStorage.getItem('Desig'))
        setEmail(localStorage.getItem('Email'))
        setId(localStorage.getItem('Id'))
    }, [])


  return (
    <div>
         <Form className='d-grid gap-2' style={{margin:'7rem'}}>
        <Form.Group className='mb-3' controlId='formName'>
            <Form.Control type='text' placeholder='Enter Name' value={name} required onChange={(e) => setName(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formDesig'>
            <Form.Control type='text' placeholder='Enter Designation' value={desig} required onChange={(e) => setDesig(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Control type='email' placeholder='Enter E-mail' value={email} required onChange={(e) => setEmail(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type='submit' style={{ backgroundColor: 'rgb(61, 133, 197', borderRadius: '5px' }}>Update</Button>
      </Form>
      
    </div>
  )
}

export default Edit
