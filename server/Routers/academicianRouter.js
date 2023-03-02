import express from "express";
import bcrypt from 'bcryptjs'
import Academician from '../models/academicianModel.js';


const router = express.Router();

// http://localhost:4096/academician/signup 'a yapılan post isteği
router.post("/signup", async (req, res)=>{
    try {
        const {firstName, lastName, department,password,email } = req.body;
        
        
        const AcademicianExist = await Academician.findOne({ email })
        if(AcademicianExist)
            return res.status(400).json({ message: 'Academician already exists.'})

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdAcademician = await Academician.create({
            firstName,
            password: hashedPassword,
            department,
            lastName,
            email,
        })
        return res.status(201).json(createdAcademician);
    } catch (error) {
        console.log(error)
        return res.json({message: "create academician failed."})
    }
})

// http://localhost:4096/academician/signin ' e yapılan POST isteği
router.post("/signin", async (req,res)=>{
    try {
        const {password,email} = req.body;
        const academician = await Academician.findOne({email})
        if(!academician)
            return res.status(400).json({message: "Academician does not exist"})

        const isPasswordCorrect = await bcrypt.compare(password, academician.password);
        if(!isPasswordCorrect)
            return res.status(400).json({message: "Wrong Password"})
        
        return res.status(200).json({ Academician, message: 'Authentication successful' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

export default router;