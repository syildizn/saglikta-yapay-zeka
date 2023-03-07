import logo from '../assets/images/logo.png';
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/navbar.js"

function HomePage() {
    return (<div>
                <Navbar></Navbar>
                <div className="App">
                    <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className='text-black mt-4'>
                        Bakırçay Üniversitesi <code style={{color: "#00a7b6"}} className="fw-bold">Telesağlık</code> Admin Panel
                    </p>
                    
                    </header>
                </div>
          </div>
    );
}

export default HomePage;