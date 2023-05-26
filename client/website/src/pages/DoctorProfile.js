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
  import { DeleteAppointment } from "../axios/axios.js";
  import { AcceptAppointment } from "../axios/axios.js";
  
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
      const [meetingData, setMeetingData] = useState([]);
      const [patientData, setPatientData] = useState([]);
      const [doctorFirstName, setDoctorFirstName] = useState('');

      const [userDeleteAppointmentData, setUserDeleteAppointmentData] = useState({
        id:"",
      });
      
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
          .then(json => { setData(json); setDoctorFirstName(json.firstName); })
          .catch(error => console.error(error));
      }, [text]);

      
  

      //Get the appointment requests
      useEffect(() => {
        fetch(`http://localhost:4096/admin/appointments/${text}`)
        .then(response => response.json())
        .then(json => setUserAppointmentData(json))
        .catch(error => console.error(error));
    }, []);

      useEffect(() => {
        fetch(`http://localhost:4096/admin/meetings/${text}`)
        .then(response => response.json())
        .then(json => setMeetingData(json))
        .catch(error => console.error(error));
    }, []);
    

    



    //Get patient info
    useEffect(() => {
        fetch(`http://localhost:4096/admin/patients/${userAppointmentData.patientId}`)
        .then(response => response.json())
        .then(json => setPatientData(json))
        .catch(error => console.error(error));
    }, []);

    const sendEmail = () => {
      const doctorId = text;
      const appointmentId = document.getElementById('appointmentId').innerText;
      const doctorFirstName = document.getElementById('doctorFirstName').innerText;
      const doctorLastName = document.getElementById('doctorLastName').innerText;
      const patientId = document.getElementById('patientId').innerText;
      const patientFirstName = document.getElementById('patientFirstName').innerText;
      const patientLastName = document.getElementById('patientLastName').innerText;
      const patientDate = document.getElementById('patientDate').innerText;
      const patientHour = document.getElementById('patientHour').innerText;
      const patientEmail = document.getElementById('patientEmail').innerText;
    
      fetch('http://localhost:4096/doctor/setMeeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          doctorId: doctorId,
          appointmentId: appointmentId,
          doctorFirstName: doctorFirstName,
          doctorLastName: doctorLastName,
          patientId: patientId,
          patientFirstName: patientFirstName,
          patientLastName: patientLastName,
          patientDate: patientDate,
          patientHour: patientHour,
          patientEmail: patientEmail,
        })
      })
      .then(response => {
        console.log('Email sent:', response);
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });
    };
    
  
      
  
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
                             <MDBCardText id='doctorFirstName' className="text-muted pe-2"> {data.firstName}</MDBCardText>
                      
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
                             <MDBCardText id='doctorLastName' className="text-muted pe-2"> {data.lastName}</MDBCardText>
                            
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
                      <MDBCardText>Department</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {data && (
                          <div className='d-flex'>
                             <MDBCardText className="text-muted pe-2"> {data.department}</MDBCardText>
                            
                             </div>
                          )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Bio</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    {data && (
                          <div className='d-flex'>
                             <MDBCardText className="text-muted pe-2"> {data.bio}</MDBCardText>
                            
                             </div>
                          )}
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
  
              <MDBRow>
                <MDBCol md="16">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Appointment</span> Requests</MDBCardText>
                      
                      {userAppointmentData && userAppointmentData.map((appointment, index) => (
                        <div className='d-flex'>
                        <MDBCardText id='appointmentId' className="text-muted pe-2 d-none"> {appointment._id}</MDBCardText>
                        <MDBCardText id='patientId' className="text-muted pe-2"> {appointment.patientId}</MDBCardText>
                        <MDBCardText id='patientFirstName' className="text-muted pe-2"> {appointment.patientFirstName}</MDBCardText>
                        <MDBCardText id='patientLastName' className="text-muted pe-2"> {appointment.patientLastName}</MDBCardText>
                        <MDBCardText id='patientEmail' className="text-muted pe-2"> {patientData.email}</MDBCardText>
                        <MDBCardText id='patientDate' className="text-muted pe-2"> {appointment.date}</MDBCardText>
                        <MDBCardText id='patientHour' className="text-muted pe-2"> {appointment.hour}</MDBCardText>
                        <p className='opacity-0'>aaaaaaaaa</p>
                        
                        <MDBBtn onClick={sendEmail}
                       type="button" class="btn btn-outline-success btn-floating" data-mdb-ripple-color="dark">
                        <i class="fa-solid fa-check"></i>
                        </MDBBtn> <p className='opacity-0'>aa</p>


                        <MDBBtn onClick={(e) => {
                         e.preventDefault();
                         DeleteAppointment(userAppointmentData).then((res) => {
                             alert("SUCCESS")
                         })
                         .catch((err) => {
                             console.log(err)
                             alert("FAILED")
                         })
                       }}  type="button" class="btn btn-danger btn-floating">
                        <i class="fa-solid fa-trash"></i>
                       </MDBBtn>
                        </div>
                      ))}
                     
                          

                        

                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                
  
                
              </MDBRow>
              <br></br>
              <MDBRow>
                <MDBCol md="16">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Scheduled</span> Meetings</MDBCardText>
                      
                      {meetingData && meetingData.map((meeting, index) => (
                          <div className='d-flex' key={index}>
                            <MDBCardText className="text-muted pe-2">
                              {meeting.patientFirstName}
                            </MDBCardText>
                            <MDBCardText className="text-muted pe-2">
                              {meeting.patientLastName}
                            </MDBCardText>
                            <MDBCardText className="text-muted pe-2">
                              {meeting.date}
                            </MDBCardText>
                            <MDBCardText className="text-muted pe-2">
                              {meeting.hour}
                            </MDBCardText>
                            <a href={meeting.meetingRoom}>
                              <MDBCardText id='patientId' className="text-info pe-2">
                                Görüşme Linki
                              </MDBCardText>
                            </a>
                            <p className='opacity-0'>aaaaaaaaa</p>
                          </div>
                        ))}


                             

                        

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