import axios from "axios"

const HTTP = axios.create({
    baseURL: "http://localhost:4097",
})

export const SignUp = async(formData) =>
    await HTTP.post("/student/signup", formData);