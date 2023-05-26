import axios from "axios"

const HTTP = axios.create({
    baseURL: "http://localhost:4096",
})

export const SignUp = async(formData) =>
    await HTTP.post("/student/signup", formData);

export const Login = async(formData) =>
    await HTTP.post("/student/signin", formData);

export const DoctorLogin = async(formData) =>
    await HTTP.post("/doctor/signin", formData);

export const MakeAppointment = async(formData) =>
    await HTTP.post("/student/MakeAppointment", formData);

export const DeleteAppointment = async(formData) => 
    await HTTP.delete("/doctor/DeleteAppointment", formData); 

export const AcceptAppointment = async(formData) =>
    await HTTP.post("/doctor/AcceptAppointment", formData);