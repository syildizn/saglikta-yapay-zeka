import logo from '../assets/images/logo.png';
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/navbar.js"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function StudentAdd() {
    return (<div>
                <Navbar></Navbar>
                <div className="App">
                    
                    
                    <Form className='w-25 m-auto mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Öğrenci Adı" />
        <Form.Text className="text-muted">
          Bakırçay Üniversitesi Telesağlık
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Öğrenci Soyadı" />
        <Form.Text className="text-muted">
        Bakırçay Üniversitesi Telesağlık
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Bölüm" />
        <Form.Text className="text-muted">
        Bakırçay Üniversitesi Telesağlık
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Şifre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Öğrenci Adı" />
        <Form.Text className="text-muted">
        Bakırçay Üniversitesi Telesağlık
        </Form.Text>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email" />
        <Form.Text className="text-muted">
        Bakırçay Üniversitesi Telesağlık
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Öğrenci Numarası" />
        <Form.Text className="text-muted">
        Bakırçay Üniversitesi Telesağlık
        </Form.Text>
      </Form.Group>

      <Button style={{backgroundColor: "#00a7b6", border: "none"}} type="submit">
        Kaydet
      </Button>
    </Form>    
               
                </div>
          </div>
    );
}

export default StudentAdd;