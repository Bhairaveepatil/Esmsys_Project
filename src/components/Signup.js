import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {NavLink} from "react-router-dom"
import { useNavigate } from "react-router-dom";
//import Jahernotice_img from './Jahernotice_img';
import "./signup.css"
const Signup = () => {
    const [inputs, setinputs] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobile_num: "",
        password: ""
    })

    const [data] = useState([])
    console.log(inputs)
    const signupdate = (e) => {
        const { value, name } = e.target;

        setinputs((inputs) => {
            return {
                ...inputs,
                [name]: value
            }
        })
    }
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let history = useNavigate();
  const handleClick = async () => {
    alert("Signup success.");
    history("/login");
    await delay(10);
  };
    const toaddData = (e) => {
        e.preventDefault()
        // console.log(inputs)
        const { firstname, lastname, email, mobile_num, password } = inputs

        if (firstname === "") {
            alert("First name is required")
        } else if (lastname === "") {
            alert("Last Name is required")
        } else if (mobile_num === "") {
            alert("Mobile Number is required")
        } else if (password === "") {
            alert("Password is required")
        } else if (!email.includes("@")) {
            alert("Please enter valid email address")
        } else {
            console.log("Details added successfully")
            localStorage.setItem("userdeatils", JSON.stringify([...data, inputs]))
        }
    }


    return (
        <>
            <div className='container mt-1 centre'>
                <section>
                    <div className='signup p-2'>
                        <h3 className='name_login'> Sign Up</h3>
                        {/* will use image here */}
                        <Form>
                            <Form.Group className=" col-lg-4" controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name='firstname' onChange={signupdate} placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name='lastname' onChange={signupdate} placeholder="Enter Last Name" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' onChange={signupdate} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="number" name='mobile_num' onChange={signupdate} placeholder="Enter Mobile Number" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' onChange={signupdate} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={() => {handleClick();toaddData();}} className='col-lg-4' style={{ background: "rgb(67,185,127)" }} type="submit" >
                                Submit
                            </Button>
                        </Form>
                        <p className='last mt-2'>Already have an account? <span><NavLink to="/login" >Log In</NavLink></span></p>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Signup
