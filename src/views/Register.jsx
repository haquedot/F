import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {toast} from 'react-toastify';

import "../App.css"
import "../assets/styles/style-Login.css"
import axios from 'axios';
function Register() {
    const [userDetails,setUserDetails]=useState({
        firstname:'',
        lastname:'',
        username:'',
        password:'',
        phone:'',
        email:'',

    })
    const [validated, setValidated] = useState(false);

    const handleSubmit = async(event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        event.preventDefault();
        try{
            const response=await axios.post('http://localhost:8000/user-Register',userDetails);
            console.log(response);
            if(response.status==201){
                toast.success('register successfully!!');
            }
        }catch(error){
            console.log("error in register:",error);
            toast.error('Register failed!!');
        }
    };
    

    const handleInputChange=(e)=>{
        setUserDetails({...userDetails,[e.target.name]:e.target.value})
        
    }

    return (
        <>
            <div className="py-4">
                <div className="d-block m-auto border rounded p-3 login_div">
                    <h4 className='fw-bolder mb-4'>Register</h4>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group controlId="validationCustom01" className='mb-3'>
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                name='firstname'
                                onChange={handleInputChange}
                                value={userDetails.firstname}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02" className='mb-3'>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                name='lastname'
                                onChange={handleInputChange}
                                value={userDetails.lastname}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustomUsername" className='mb-3'>
                            <Form.Label>Username</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    aria-describedby="inputGroupPrepend"
                                    name='username'
                                    onChange={handleInputChange}
                                    value={userDetails.username}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group controlId="validationCustom03" className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="password"
                                name='password' 
                                onChange={handleInputChange} 
                                value={userDetails.password}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom03" className='mb-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="hibbanrahmanhyt@gmail.com" 
                                name='email'
                                onChange={handleInputChange}
                                value={userDetails.email}
                                required 
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom04" className='mb-3'>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="+91-9973152523" 
                                name='phone'
                                onChange={handleInputChange}
                                value={userDetails.phone}
                                required 
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit" className='btn_filled'>Register</Button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Register;