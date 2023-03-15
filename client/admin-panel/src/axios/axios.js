import axios from "axios"

const HTTP = axios.create({
    baseURL: "http://localhost:4097",
})

export const Login = async(formData) =>
    await HTTP.post("/admin/signin", formData);
    