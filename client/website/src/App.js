import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/Home.js"
import SignupPage from "./pages/Signup.js"
import MeetingPage from './pages/Meeting';
import JitsiPage from './pages/Jitsi.js';
import SetUpMeetingPage from './pages/SetUpMeeting.js';
import DoctorsPage from './pages/DoctorsList.js';
import DoctorPage from './pages/Doctor.js';
import LoginPage from './pages/Login.js';
import DoctorLoginPage from './pages/DoctorLogin.js';
import DoctorProfilePage from './pages/DoctorProfile.js';
import StudentProfilePage from './pages/StudentProfile.js';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  let payload={
    meetingNumber:"84875767386",
    role: 0,
    sdkKey:"7dSJzzcvTj2bsO8pAWQ2A",
    sdkSecret:"iUsDetHffg6sjOOkrEAZ4mgPfsQH7EFF",
    passWord:"1iFAj7",
    userName:"emreeee",
    userEmail:"syzbakircay.projects@gmail.com",
    leaveUrl:"https://localhost:4098"
  };

  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<SignupPage/>} exact></Route>
          <Route path='/Login' element={<LoginPage/>} exact></Route>
          <Route path='/DoctorLogin' element={<DoctorLoginPage/>} exact></Route>
          <Route path='/Home/:studentNo' element={<HomePage/>} exact></Route>
          <Route path='/Meeting' element={<MeetingPage payload={payload}/>} exact></Route>
          <Route path='/Jitsi' element={<JitsiPage/>} exact></Route>
          <Route path='/SetUpMeeting' element={<SetUpMeetingPage/>} exact></Route>
          <Route path='/DoctorsList/:studentNo' element={<DoctorsPage/>} exact></Route>
          <Route path='/Doctor/:studentNo/:id' element={<DoctorPage/>} exact></Route>
          <Route path='/DoctorProfile/:id' element={<DoctorProfilePage/>} exact></Route>
          <Route path='/StudentProfile/:id' element={<StudentProfilePage/>} exact></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
