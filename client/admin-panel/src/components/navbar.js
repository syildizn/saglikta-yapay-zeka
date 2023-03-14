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
              <MDBNavbarLink active aria-current='page' href='/Home' className='text-light'> 
                Ana sayfa
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/StudentAdd' className='text-light' >Öğrenci Ekle</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/DoctorAdd' className='text-light' >Doktor Ekle</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link text-light'  role='button'  >
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
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true' className='text-light' >
                Öğrenci Sağlık Kaydı
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="ms-auto">
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true' className='text-light' >
                Admin Panel
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>


          {/* <Form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Arama' aria-label='Search' />
            <MDBBtn style={{backgroundColor: "#39363b", border: "none"}}>Ara</MDBBtn>
          </Form> */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}