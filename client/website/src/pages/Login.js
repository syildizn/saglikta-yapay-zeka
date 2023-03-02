import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignUp } from "../axios/axios.js";
import { Form, Button } from "react-bootstrap";

import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    return (
        <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Bakırçay Üniversitesi <br />
            <span className="text-primary">TeleSağlık</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
            <Form.Group onSubmit={(e) => {
                e.preventDefault();
                SignUp(formData).then((res) => {
                    navigate("/")
                })
                .catch((err) => {
                    console.log(err)
                })
              }}>
              <MDBRow>
                <MDBCol col='6'>
                    <Form.Label>First Name</Form.Label>
                  <Form.Control wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                <Form.Label>Last Name</Form.Label>
                  <Form.Control wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                </MDBCol>
              </MDBRow>
              
                <br></br>
                <Form.Label>Department</Form.Label>
                <Form.Control wrapperClass='mb-4' label='Department' id='form1' type='text'
                    onChange={(e) => setFormData({...formData, username: e.target.value })}/><br></br>
                <Form.Label>Password</Form.Label>
                <Form.Control wrapperClass='mb-4' label='Password' id='form1' type='password'/><br></br>
                <Form.Label>Email</Form.Label>
                <Form.Control wrapperClass='mb-4' label='Email' id='form1' type='email'/><br></br>
                <Form.Label>Student No</Form.Label>
                <Form.Control wrapperClass='mb-4' label='StudentNo' id='form1' type='text'/><br></br>

                <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>

                <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

                <div className="text-center">

                    <p>or sign up with:</p>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="sm"/>
                    </MDBBtn>

                </div>

              
                </Form.Group>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    );
}

export default LoginPage;