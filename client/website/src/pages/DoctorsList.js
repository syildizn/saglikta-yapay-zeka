import logo from '../assets/images/logo.png';
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"
import backgroundImage from '../assets/images/bg.png';
import { MDBBtn } from 'mdb-react-ui-kit';
import { motion } from "framer-motion"
import Card from 'react-bootstrap/Card';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardHeader,
  MDBInput,
  MDBRadio,
  MDBFooter, 
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Col, Container } from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DoctorsPage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const studentNo = window.location.href.slice(34,);

  useEffect(() => {
    fetch('http://localhost:4096/admin/listDoctors')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

//   const productType = "device";

//   useEffect(() => {
//     fetch(`http://localhost:1337/admin/productType/${productType}`)
//     .then(response => response.json())
//     .then(json => setData(json))
//     .catch(error => console.error(error));
// }, []);

    return (
      <div>

        <div style={{minHeight: "1100px", backgroundColor: "#f3f4f6"}}>
            <br></br>
            <h5 className='text-center pt-5' style={{color: "#0da5b3"}}><b>Our Doctors</b></h5>
            <br></br>
            <h1 className='text-center m-auto' style={{width: "30%", color: "black", letterSpacing: "2px"}}><b>You can reach our doctors who are experts in their fields here</b></h1>
            <br></br><br></br><br></br>
            <Container>
              
                <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
                  
                  {data.map(item => (
                    
                       <MDBCol>
                        <a href={`/Doctor/${studentNo}/${item._id}`}>
                       <MDBCard background='white' className='text-body mb-3 p-4 serviceCard' style={{height: "280px"}}>
                      <MDBCardBody>
                      <span className="square rounded-8 p-3 mb-5" style={{backgroundColor: "#cef7e8"}}><i class="fas fa-chart-pie" style={{color: "#0cd68a"}}></i></span>
                        <MDBCardTitle className='mt-5 d-flex'><p className='pe-1'>{item.firstName}</p>
                          <p>{item.lastName}</p></MDBCardTitle><br></br><br></br>
                        <MDBCardText className='text-secondary'>
                          {item.firstName}
                          {item.lastName}
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                    </a>
                       </MDBCol>
                   ))}
                </MDBRow>
                
            </Container>
          </div>

          
            
          </div>
                
    );
}

export default DoctorsPage;