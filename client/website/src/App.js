import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/Home.js"
import SignupPage from "./pages/Signup.js"
import MeetingPage from './pages/Meeting';
import JitsiPage from './pages/Jitsi.js';
import SetUpMeetingPage from './pages/SetUpMeeting.js';
import DoctorsPage from './pages/DoctorsList.js';
import DoctorPage from './pages/Doctor.js';

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
          <Route path='/Home' element={<HomePage/>} exact></Route>
          <Route path='/Meeting' element={<MeetingPage payload={payload}/>} exact></Route>
          <Route path='/Jitsi' element={<JitsiPage/>} exact></Route>
          <Route path='/SetUpMeeting' element={<SetUpMeetingPage/>} exact></Route>
          <Route path='/DoctorsList' element={<DoctorsPage/>} exact></Route>
          <Route path='/Doctor' element={<DoctorPage/>} exact></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
