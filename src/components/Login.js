import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { NavLink } from "react-router-dom"
import {useNavigate} from "react-router-dom"
import './login.css'

const Login = () => {
    
    const redirect = useNavigate()
    const [inputs, setinputs] = useState({

        email: "",
        mobile_num: "",
        password: ""
    })

    //const [data] = useState([])
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
    const toaddData = (e) => {
        e.preventDefault()
        console.log(inputs)

        const userDataArray = localStorage.getItem("userdeatils")
console.log(userDataArray)

        const { email, mobile_num, password } = inputs

        if (password === "") {
            alert("Password is required")
        } else {
            // console.log("Details added successfully")
            // localStorage.setItem("userdeatils", JSON.stringify([...data, inputs]))
            if(userDataArray && userDataArray.length){
                const userdetails = JSON.parse(userDataArray)
                //console.log(userdetails)
                const userlogin = userdetails.filter((el,k)=>{
                    return (el.email === email || el.mobile_num===mobile_num) && el.password=== password
                })
                //console.log(userlogin)
                if(userlogin.length=== 0) {
                    alert("Invalid Details")
                }else{
                    alert("User Login Successfull")
                    localStorage.getItem("userLogin",JSON.stringify(userlogin))

                    redirect("/userdetails")
                }
            }
        }
    }


    return (
        <>
            <div className='container mt-5'>
                <section>
                    <div className='signup p-4'>
                        <h3 className='name_login'> Log In</h3>
                        {/* will use image here */}
                        <Form>




                            <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                <Form.Label>Email or Mobile Number</Form.Label>
                                <Form.Control  name='email' onChange={signupdate} placeholder="Enter Email or Mobile Number" />
                            </Form.Group>

                            {/* <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="number" name='mobile_num' onChange={signupdate} placeholder="Enter Mobile Number" />
                            </Form.Group> */}

                            <Form.Group className="mb-3 col-lg-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' onChange={signupdate} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={toaddData} className='col-lg-4' style={{ background: "rgb(67,185,127)" }} type="submit" >
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-5 forgot_pass' ><span><NavLink to="/forgetpassword" >Forget Password</NavLink></span></p>

                        <p className='mt-2 last'>Don't Have an account? <span><NavLink to="/" >Sign Up</NavLink></span></p>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Login
