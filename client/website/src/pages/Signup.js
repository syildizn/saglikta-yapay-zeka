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
        name: "",
        lastName: "",
        department: "",
        password: "",
        mail: "",
        no: "",
    })

    return (
        <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Bakırçay Üniversitesi <br />
            <span style={{color: "#00a7b6"}}>TeleSağlık</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
            <Form.Group onSubmit={(e) => {
                e.preventDefault();
                SignUp(formData).then((res) => {
                  console.log("asdas");
                    navigate("/home")
                })
                .catch((err) => {
                    console.log("adasasddasd");
                    console.log(err);
                })
              }}>
              <MDBRow>
                <MDBCol col='6'>
                    <Form.Label>İsim</Form.Label>
                  <Form.Control wrapperClass='mb-4' label='First name' id='form1' type='text'
                      onChange={(e) => setFormData({...formData, name: e.target.value })}/>
                </MDBCol>

                <MDBCol col='6'>
                <Form.Label>Soy İsim</Form.Label>
                  <Form.Control wrapperClass='mb-4' label='Last name' id='form1' type='text'
                      onChange={(e) => setFormData({...formData, lastName: e.target.value })}/>
                </MDBCol>
              </MDBRow>
              
                <br></br>
                <Form.Label>Bölüm</Form.Label>
                <Form.Control wrapperClass='mb-4' label='Department' id='form1' type='text'
                    onChange={(e) => setFormData({...formData, department: e.target.value })}/><br></br>
                <Form.Label>Şifre</Form.Label>
                <Form.Control wrapperClass='mb-4' label='Password' id='form1' type='password' 
                    onChange={(e) => setFormData({...formData, password: e.target.value })}/><br></br>
                <Form.Label>Email</Form.Label>
                <Form.Control wrapperClass='mb-4' label='Email' id='form1' type='email'
                    onChange={(e) => setFormData({...formData, mail: e.target.value })}/><br></br>
                <Form.Label>Öğrenci No</Form.Label>
                <Form.Control wrapperClass='mb-4' label='StudentNo' id='form1' type='text'
                    onChange={(e) => setFormData({...formData, no: e.target.value })}/><br></br>

                

                <MDBBtn type='submit' className='w-100 mb-4' style={{backgroundColor: "#00a7b6", border: "none"}} size='md'>Üye Ol</MDBBtn>
               
              
                </Form.Group>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    );
}

export default LoginPage;