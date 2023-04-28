
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from "../axios/axios.js";
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
        studentNo: "",
        password: "",
    })

    return (
        <div className="login-page-container">
        <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          
        

        </MDBCol>

        <MDBCol md='3'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
                <form onSubmit={(e) => {
                
                e.preventDefault();
                Login(formData).then((res) => {
                    navigate(`/Home/${formData.studentNo}`)
                })
                .catch((err) => {
                    console.log(err)
                })
              }}>
            <Form.Group >
              
                <br></br>
                <label className='admin-panel-label'>Log In</label><br></br><br></br>
                <Form.Label>Öğrenci No</Form.Label>
                <Form.Control
                            onChange={(e) => setFormData({...formData, studentNo: e.target.value})}
                            type="text"
                            placeholder="Enter student no"
                        />
                <Form.Label>Şifre</Form.Label>
                <Form.Control
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            type="password"
                            placeholder="Password"
                            
                        />
              
                

                <MDBBtn className='w-100 mb-4' style={{backgroundColor: "#00a7b6", border: "none"}} size='md' 
                disabled={formData.studentNo==="" || formData.password===""} type="submit">Giriş</MDBBtn>
              
                

              
                </Form.Group>
                </form>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
    );
}

export default LoginPage;