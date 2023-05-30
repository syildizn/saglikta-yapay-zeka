
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorLogin } from "../axios/axios.js";
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

function DoctorLoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    return (
        <div className="login-page-container">
        <MDBContainer fluid className='p-4'>

      <MDBRow>

      <div className='d-flex'>
      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3">
          Bakırçay Üniversitesi <br />
          <span style={{color: "#00a7b6"}}>TeleSağlık</span>
        </h1>

        <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
          
        </p>

      </MDBCol>

        <MDBCol md='3'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
                <form onSubmit={(e) => {
              
                e.preventDefault();
                DoctorLogin(formData).then((res) => {
                    navigate(`/DoctorProfile/${res.data.doctor._id}`)
                })
                .catch((err) => {
                    alert(err)
                })
              }}>
            <Form.Group >
              
                <br></br>
                <label className='admin-panel-label'>Doktor Girişi</label><br></br><br></br>
                <Form.Label>Doctor mail</Form.Label>
                <Form.Control
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            type="text"

                        />
                <Form.Label>Şifre</Form.Label>
                <Form.Control
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            type="password"

                            
                        />
              
                
                <br></br>
                <MDBBtn className='w-100 mb-4' style={{backgroundColor: "#00a7b6", border: "none"}} size='md' 
                disabled={formData.email==="" || formData.password===""} type="submit">Giriş</MDBBtn>
              
                

              
                </Form.Group>
                </form>
                <a href={`/login`} className='text-center'>Öğrenci Girişi</a>
   
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
</div>
      </MDBRow>

    </MDBContainer>
    </div>
    );
}

export default DoctorLoginPage;