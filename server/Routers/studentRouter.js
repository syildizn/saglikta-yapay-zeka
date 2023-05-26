import express from "express";
import bcrypt from 'bcryptjs'
import Student from '../models/studentModel.js';
import Appointment from '../models/appointmentModel.js';

const router = express.Router();

// http://localhost:4096/student/signup 'a yapılan post isteği
router.post("/signup", async (req, res)=>{
    try {
        const {firstName, lastName, department,password,email,studentNo } = req.body;
        
        
        const StudentExist = await Student.findOne({ studentNo })
        if(StudentExist)
            return res.status(400).json({ message: 'Student already exists.'})

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdStudent = await Student.create({
            firstName,
            lastName,
            department,
            password: hashedPassword,
            email,
            studentNo
        })
        return res.status(201).json(createdStudent);
    } catch (error) {
        console.log(error)
        return res.json({message: "create student failed."})
    }
})

// http://localhost:4096/student/signin ' e yapılan POST isteği
router.post("/signin", async (req,res)=>{
    try {
        const {studentNo, password} = req.body;
        const student = await Student.findOne({studentNo})
        if(!student)
            return res.status(400).json({message: "Student does not exist"})

        const isPasswordCorrect = await bcrypt.compare(password, student.password);
        if(!isPasswordCorrect)
            return res.status(400).json({message: "Wrong Password"})
        
        return res.status(200).json({ student, message: 'Authentication successful' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

// http://localhost:4096/student/MakeAppointment 'a yapılan post isteği
router.post("/MakeAppointment", async (req, res)=>{
    try {
        const {doctorId, patientId, patientFirstName, patientLastName, day, month, year, hour, accepted } = req.body;
        
        const appointmentExists = await Appointment.findOne({ patientId })
        
        if(appointmentExists)

            return res.status(400).json({ message: 'Appointment Already Exists.'})
        
        
        const months = {
            Jan: 0,
            Feb: 1,
            Mar: 2,
            Apr: 3,
            May: 4,
            Jun: 5,
            Jul: 6,
            Aug: 7,
            Sep: 8,
            Oct: 9,
            Nov: 10,
            Dec: 11
            };

        const monthNum = parseInt(months[month]);
        const yearNum = parseInt(year);
        const dayClean = parseInt(day.slice(0,-1)) + 1;

        const formattedDate = new Date(yearNum, monthNum, dayClean);
        const date = formattedDate.toISOString().substring(0, 10);

        const createdAppointment = await Appointment.create({
            doctorId, patientId, patientFirstName, patientLastName, date, hour, accepted
        })
        return res.status(201).json(createdAppointment);
    } catch (error) {
        console.log(error)
        return res.json({message: "create appointment failed."})
    }
})

export default router;