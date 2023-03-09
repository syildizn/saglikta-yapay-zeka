import logo from '../assets/images/logo.png';
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"

import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function HomePage() {
    return (
          <div>
                <Navbar></Navbar>
                <div className="App">
                    <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className='text-black mt-4'>
                        Bakırçay Üniversitesi <code style={{color: "#00a7b6"}} className="fw-bold">Telesağlık</code>    
                    </p>
                    
                    </header>
                </div>

                <div style={{backgroundColor: "#00a7b6", minHeight: "420px"}}>
                  <MDBRow className='row-cols-1 row-cols-md-3 g-4 w-75 m-auto'>
                    <MDBCol>
                      <MDBCard className='h-100 ms-5'>
                        <MDBCardImage
                          src='https://www.shutterstock.com/image-photo/doctor-holds-calendar-treatment-schedules-260nw-2101616767.jpg'
                          alt='...'
                          position='top'
                        />
                        <MDBCardBody>
                          <MDBCardTitle>Randevularım</MDBCardTitle>
                          <MDBCardText>
                            Hekimlerimizden randevu alabilir veya mevcut randevularınızı kontrol edebilirsiniz.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol>
                      <MDBCard className='h-100 ms-5'>
                        <MDBCardImage
                          src='https://www.shutterstock.com/image-vector/blue-heart-pulse-monitor-signal-260nw-1375675052.jpg'
                          alt='...'
                          position='top'
                        />
                        <MDBCardBody>
                          <MDBCardTitle>Sağlık Değerlerim</MDBCardTitle>
                          <MDBCardText>Akıllı saat gibi cihazlarınızdan elde ettiğimiz sağlık bilgilerinizi inceleyebilirsiniz.</MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    <MDBCol>
                      <MDBCard className='h-100 ms-5'>
                        <MDBCardImage
                          src='https://www.shutterstock.com/image-photo/hand-arranging-wood-block-healthcare-260nw-1561815367.jpg'
                          alt='...'
                          position='top'
                        />
                        <MDBCardBody>
                          <MDBCardTitle>Diğer</MDBCardTitle>
                          <MDBCardText>
                            Sistemimizde bulunan diğer özelliklere göz atın.
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                    
                  </MDBRow>
                </div>
                <Footer></Footer>
          </div>
    );
}

export default HomePage;