import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import "../App.css"
import "../assets/styles/style-Login.css"
import { Link } from 'react-router-dom';

function Login() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <div className="py-4">
                <div className="d-block m-auto border rounded p-3 login_div">
                    <h4 className='fw-bolder mb-4'>Login</h4>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="validationCustom01" className='mb-3'>
                            <Form.Label>Username or email address</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Username or email address"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button type="submit" className='btn_filled mb-3'>Login</Button>
                    </Form>

                    <Link to="/register" className='primary_color'>
                        Register
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Login;