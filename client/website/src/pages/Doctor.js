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

export default function DoctorPage() {
    const [data, setData] = useState([]);
    const [patientData, setPatientData] = useState([]);
    const navigate = useNavigate();
   
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    const [selected, setSelected] = useState(new Date());
    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
  
    let text = window.location.href.slice(29,);
    const myArray = text.split("/"); // myArray[0] = studentNo, myArray[1] = doctorId

    const dateArray = format(selected, 'PP').split(" ")
    const month = dateArray[0]
    const day = dateArray[1]
    const year = dateArray[2]

    

    //Get the product details
    useEffect(() => {
      fetch(`http://localhost:4096/admin/patients/${myArray[0]}`)
      .then(response => response.json())
      .then(json => setPatientData(json))
      .catch(error => console.error(error));
  }, []);

    

    const [appointmentData, setAppointmentData] = useState({
        doctorId: myArray[1],
        patientId: myArray[0],
        patientFirstName: "emre",
        patientLastName:"turan",
        day:day,
        month:month,
        year:year,
        hour:"",
        accepted:"0"
    })
  

    //Get the product details
    useEffect(() => {
        fetch(`http://localhost:4096/admin/doctors/${myArray[1]}`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);



    // const handleClick = () => {
    //   setAppointmentData({
    //     ...appointmentData,
    //     patientFirstName: patientData.firstName
    //   });
    // };

    

  return (
    
    <section style={{ backgroundColor: '#eee' }}>


      {/* <button onClick={handleClick}>Update Patient First Name</button> */}

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
                <div className="d-flex justify-content-center mb-2">
    
                  <MDBBtn onClick={toggleShow}>Make An Appointment</MDBBtn>
                  <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Available Dates</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className='m-auto'>
            <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      onClick={(e) => {  setAppointmentData({...appointmentData, day: format(selected, 'PP').split(" ")[1]}); setAppointmentData({...appointmentData, month: format(selected, 'PP').split(" ")[0]}); setAppointmentData({...appointmentData, year: format(selected, 'PP').split(" ")[2]}); }}
      footer={footer}
      
    />

<Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        Available Hours For Selected Date
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={(e) => setAppointmentData({...appointmentData, hour: "09:00"})}>09:00</Dropdown.Item>
        <Dropdown.Item onClick={(e) => setAppointmentData({...appointmentData, hour: "10:00"})}>10:00</Dropdown.Item>
        <Dropdown.Item onClick={(e) => setAppointmentData({...appointmentData, hour: "11:00"})}>11:00</Dropdown.Item>
        <Dropdown.Item onClick={(e) => setAppointmentData({...appointmentData, hour: "12:00"})}>12:00</Dropdown.Item>
        <Dropdown.Item onClick={(e) => setAppointmentData({...appointmentData, hour: "13:00"})}>13:00</Dropdown.Item>
        <Dropdown.Item onClick={(e) => setAppointmentData({...appointmentData, hour: "14:00"})}>14:00</Dropdown.Item>
        <Dropdown.Item onClick={(e) => setAppointmentData({...appointmentData, hour: "15:00"})}>15:00</Dropdown.Item>
        <Dropdown.Item onClick={(e) => setAppointmentData({...appointmentData, hour: "16:00"})}>16:00</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={(e) => {
                
                e.preventDefault();
                MakeAppointment(appointmentData).then((res) => {
                    alert("SUCCESS")
                })
                .catch((err) => {
                    console.log(err)
                    alert("FAILED")
                })
              }}
    
    >Ask For An Appointment</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
                  <MDBBtn outline className="ms-1">Message</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
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