import logo from '../assets/images/logo.png';
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/navbar.js"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DoctorAdd() {
    return (<div>
                <Navbar></Navbar>
                <div className="App">
                    
                    
                    <Form className='w-25 m-auto mt-5'>
      <div className='d-flex'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Doktor Adı:</Form.Label>
          <Form.Control type="email" placeholder="..." />
          
        </Form.Group>

        <Form.Group className="mb-3 ms-5" controlId="formBasicEmail">
          <Form.Label>Doktor Soyadı:</Form.Label>
          <Form.Control type="email" placeholder="..." />
          
        </Form.Group>
      </div>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Doktorun Branşı:</Form.Label>
        <Form.Control type="email" placeholder="..." />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Şifre:</Form.Label>
        <Form.Control type="password" placeholder="..." />
      </Form.Group>
      


      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="..." />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Sicil Numarası:</Form.Label>
        <Form.Control type="text" placeholder="..." />
        
      </Form.Group>

      <Button style={{backgroundColor: "#00a7b6", border: "none"}} type="submit">
        Kaydet
      </Button>
    </Form>    
               
                </div>
          </div>
    );
}

export default DoctorAdd;