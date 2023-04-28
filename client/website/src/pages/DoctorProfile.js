import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
  import React, { useState, useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
  import Dropdown from 'react-bootstrap/Dropdown';
  import { MakeAppointment } from "../axios/axios.js";
  
  import {
      MDBModal,
      MDBModalDialog,
      MDBModalContent,
      MDBModalHeader,
      MDBModalTitle,
      MDBModalBody,
      MDBModalFooter,
    } from 'mdb-react-ui-kit';
  
  import { format } from 'date-fns';
  import { DayPicker } from 'react-day-picker';
  import 'react-day-picker/dist/style.css';
  
  export default function DoctorProfilePage() {
      const [data, setData] = useState([]);
      const [userAppointmentData, setUserAppointmentData] = useState([]);
      const [patientData, setPatientData] = useState([]);
      
      const navigate = useNavigate();
     
      const [basicModal, setBasicModal] = useState(false);
  
      const toggleShow = () => setBasicModal(!basicModal);
  
      const [selected, setSelected] = useState(new Date());
      let footer = <p>Please pick a day.</p>;
      if (selected) {
          footer = <p>You picked {format(selected, 'PP')}.</p>;
      }
    
      let text = window.location.href.slice(36,);
      
      const dateArray = format(selected, 'PP').split(" ")
      const month = dateArray[0]
      const day = dateArray[1]
      const year = dateArray[2]
  
      
  
    //   const [appointmentData, setAppointmentData] = useState({
    //       doctorId: myArray[1],
    //       patientId: myArray[0],
    //       day:day,
    //       month:month,
    //       year:year,
    //       hour:"",
    //       accepted:"0"
    //   })
    
  
      
      useEffect(() => {
          fetch(`http://localhost:4096/admin/doctors/${text}`)
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error));
      }, []);
  

      //Get the appointment requests
      useEffect(() => {
        fetch(`http://localhost:4096/admin/appointments/${text}`)
        .then(response => response.json())
        .then(json => setUserAppointmentData(json))
        .catch(error => console.error(error));
    }, []);

    



    //Get patient info
    useEffect(() => {
        fetch(`http://localhost:4096/admin/patients/${userAppointmentData.patientId}`)
        .then(response => response.json())
        .then(json => setPatientData(json))
        .catch(error => console.error(error));
    }, []);
      
  
    return (
      
      <section style={{ backgroundColor: '#eee' }}>

  
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href='/home'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="/DoctorsList">Doctors</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Doctor Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://pbs.twimg.com/media/Fl-T2_UXgAMQX5X.jpg"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                  
                    
                </MDBCardBody>
              
                
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>First Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {data && (
                          <div className='d-flex'>
                             <MDBCardText className="text-muted pe-2"> {data.firstName}</MDBCardText>
                      
                             </div>
                          )}
                          
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Last Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {data && (
                          <div className='d-flex'>
                             <MDBCardText className="text-muted pe-2"> {data.lastName}</MDBCardText>
                            
                             </div>
                          )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {data && (
                          <div className='d-flex'>
                             <MDBCardText className="text-muted pe-2"> {data.email}</MDBCardText>
                            
                             </div>
                          )}
                    </MDBCol>
                  </MDBRow>
                  
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {data && (
                          <div className='d-flex'>
                             <MDBCardText className="text-muted pe-2"> {data.department}</MDBCardText>
                            
                             </div>
                          )}
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
  
              <MDBRow>
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Appointment</span> Requests</MDBCardText>
                      
                      {userAppointmentData && (
                          <div className='d-flex'>
                             <MDBCardText className="text-muted pe-2"> {userAppointmentData.patientId}</MDBCardText>
                             <MDBCardText className="text-muted pe-2"> {userAppointmentData.patientFirstName}</MDBCardText>
                             <MDBCardText className="text-muted pe-2"> {userAppointmentData.patientLastName}</MDBCardText>
                             </div>
                          )}

                        

                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
  
                <MDBCol md="6">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status</MDBCardText>
                      <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                      </MDBProgress>
  
                      <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                      </MDBProgress>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }