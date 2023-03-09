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

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    
    <MDBNavbar expand='lg' light style={{backgroundColor: "#00a7b6"}}>
      
      <MDBContainer fluid>
        <MDBNavbarBrand href='/Home' className='text-light'>Bakırçay
        Üniversitesi</MDBNavbarBrand>

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
              <MDBNavbarLink active aria-current='page' href='/Home' className='text-light float-start'> 
                Ana sayfa
              </MDBNavbarLink>
            </MDBNavbarItem>
        
            
          </MDBNavbarNav>

          <Form className='d-flex input-group w-auto'>
            
            <MDBBtn style={{backgroundColor: "#39363b", border: "none"}}>Giriş</MDBBtn>
          </Form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}