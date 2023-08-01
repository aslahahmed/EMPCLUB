import React, { Fragment } from 'react';
import { Button, NavbarBrand, Table } from 'react-bootstrap';
import './bootstrap.min.css';
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    let history = useNavigate();

    const handleEdit = (id, name, desig, email) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Desig',desig);
        localStorage.setItem('Email',email);
        localStorage.setItem('Id',id);
    }

    const handleDelete = (id) => {
        var index = Employees.map(function (e) {
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);

        history('/');
    }

    return (

    
        <Fragment>
            <div style={{ margin: "5rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Designation
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                                ?
                                Employees.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Desig}
                                            </td>
                                            <td>
                                                {item.Email}
                                            </td>
                                            <td>
                                                <Link to={'/edit'}>
                                                    <Button style={{ backgroundColor: 'rgb(61, 133, 197', borderRadius: '5px', padding:'5px 5px 0' }} size="sm" onClick={() => handleEdit(item.id, item.Name, item.Desig, item.Email)}>
                                                    <i class='bx bxs-edit' style={{fontSize:'22px'}}></i>
                                                    </Button>
                                                </Link>
                                                &nbsp;
                                                <Button style={{ backgroundColor: 'red', borderRadius: '5px', padding:'5px 5px 0' }} size='sm' onClick={() => handleDelete(item.id)}>
                                                <i class="uil uil-trash-alt" style={{fontSize:'22px'}}></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "no data available"
                        }
                    </tbody>
                </Table>
                <br>
                </br>
                <Link style={{ textDecoration: 'none'}}  to={'/add'}>
                    <Button style={{ backgroundColor: 'rgb(25, 200, 45)', borderRadius:'5px'}} >Add Employee</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home
