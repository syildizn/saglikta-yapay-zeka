import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { FacebookIcon } from 'react-share';

import { Button } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    
    
    <MDBNavbar expand='lg' light className='border-bottom-0 myNavbar'>
      <Container >
      
        <MDBNavbarBrand href='/Home' className='text-dark'><b>Bakırçay
        Üniversitesi </b></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/Home' className='text-dark float-start ms-3'> 
                Ana sayfa
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link text-dark'  role='button'  >
                  Sayfalar
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link className='text-light' >Öğrenci Listesi</MDBDropdownItem>
                  <MDBDropdownItem link className='text-light' >Öğrenci Durumu</MDBDropdownItem>
                  <MDBDropdownItem link className='text-light' >Hekim Durumu</MDBDropdownItem>
                  <MDBDropdownItem link className='text-light' >Görüşme İstatistikleri</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link text-dark ms-3'  role='button'  >
                  İstatistikler
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link className='text-light' >Öğrenci Listesi</MDBDropdownItem>
                  <MDBDropdownItem link className='text-light' >Öğrenci Durumu</MDBDropdownItem>
                  <MDBDropdownItem link className='text-light' >Hekim Durumu</MDBDropdownItem>
                  <MDBDropdownItem link className='text-light' >Görüşme İstatistikleri</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link text-dark ms-3'  role='button'  >
                  İstatistikler
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link className='text-light' >Öğrenci Listesi</MDBDropdownItem>
                  <MDBDropdownItem link className='text-light' >Öğrenci Durumu</MDBDropdownItem>
                  <MDBDropdownItem link className='text-light' >Hekim Durumu</MDBDropdownItem>
                  <MDBDropdownItem link className='text-light' >Görüşme İstatistikleri</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link text-dark ms-3'  role='button'  >
                  İstatistikler
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link className='text-light' >Öğrenci Listesi</MDBDropdownItem>
                  <MDBDropdownItem link className='text-light' >Öğrenci Durumu</MDBDropdownItem>
                  <MDBDropdownItem link className='text-light' >Hekim Durumu</MDBDropdownItem>
                  <MDBDropdownItem link className='text-light' >Görüşme İstatistikleri</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            
        
            
          </MDBNavbarNav>
          
          <FaInstagram size={20} className="text-primary me-4"/>
          <FaFacebook size={20} className="text-primary me-4"/>
          <FaLinkedin size={20} className="text-primary me-4"/>
          <FaTwitter size={20} className="text-primary me-2"/>
          <p className='mt-3' style={{fontSize: "30px"}}>|</p>
    
        
          <MDBBtn rounded className='ms-4 me-5 text-center ps-3' style={{backgroundColor: "#0da5b3"}}>
            GİRİŞ
          </MDBBtn>
          
        </MDBCollapse>
      
      </Container>
    </MDBNavbar>
    
  );
}