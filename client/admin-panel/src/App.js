import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/Home.js"
import StudentAdd from "./pages/StudentAdd.js"
import LoginPage from "./pages/Login.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<LoginPage/>} exact></Route>
          <Route path='/Home' element={<HomePage/>} exact></Route>
          <Route path='/StudentAdd' element={<StudentAdd/>} exact></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
