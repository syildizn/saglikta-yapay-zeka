import express from "express";
import bcrypt from 'bcryptjs'
import Academician from '../models/academicianModel.js';
import Doctor from '../models/doctorModel.js';

const router = express.Router();

// http://localhost:4096/doctor/signup 'a yapılan post isteği
router.post("/signup", async (req, res)=>{
    try {
        const {firstName, lastName, department,password,email } = req.body;
        
        
        const DoctorExist = await Doctor.findOne({ email })
        if(DoctorExist)
            return res.status(400).json({ message: 'Doctor already exists.'})

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdDoctor = await Doctor.create({
            firstName,
            password: hashedPassword,
            department,
            lastName,
            email,
            userType: 1,
        })
        return res.status(201).json(createdDoctor);
    } catch (error) {
        console.log(error)
        return res.json({message: "create doctor failed."})
    }
})

// http://localhost:4096/doctor/signin ' e yapılan POST isteği
router.post("/signin", async (req,res)=>{
    try {
        const {password,email} = req.body;
        const doctor = await Doctor.findOne({email})
        if(!doctor)
            return res.status(400).json({message: "Doctor does not exist"})

        const isPasswordCorrect = await bcrypt.compare(password, doctor.password);
        if(!isPasswordCorrect)
            return res.status(400).json({message: "Wrong Password"})
        
        return res.status(200).json({ Doctor, message: 'Authentication successful' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

export default router;