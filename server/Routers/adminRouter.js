import express from "express";
import bcrypt from 'bcryptjs'
import Admin from '../models/adminModel.js';
import Academician from '../models/academicianModel.js'
import Doctor from '../models/doctorModel.js'
import Student from '../models/studentModel.js'
import Appointments from '../models/appointmentModel.js'

const router = express.Router();

// http://localhost:4096/admin/signup 'a yapılan post isteği
router.post("/signup", async (req, res)=>{
    try {
        const {username, password } = req.body;
        
        
        const AdminExist = await Admin.findOne({ username })
        if(AdminExist)
            return res.status(400).json({ message: 'Admin already exists.'})

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdAdmin = await Admin.create({
            username,
            password: hashedPassword,
        })
        return res.status(201).json(createdAdmin);
    } catch (error) {
        console.log(error)
        return res.json({message: "create admin failed."})
    }
})

// http://localhost:4096/admin/signin ' e yapılan POST isteği
router.post("/signin", async (req,res)=>{
    try {
        const {username, password} = req.body;
        const admin = await Admin.findOne({username})
        if(!admin)
            return res.status(400).json({message: "Admin does not exist"})

        const isPasswordCorrect = await bcrypt.compare(password, admin.password);
        if(!isPasswordCorrect)
            return res.status(400).json({message: "Wrong Password"})
        
        return res.status(200).json({ admin, message: 'Authentication successful' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

// http://localhost:4096/admin/listProducts GET request
router.get('/listDoctors', async(req, res)=>{
    const Doctors = await Doctor.find()
    res.send(Doctors)
})

// http://localhost:4096/admin/listStudents GET request
router.get('/listStudents', async(req, res)=>{
    const Students = await Student.find()
    res.send(Students)
})

// http://localhost:4096/admin/doctors/:id GET request
router.get('/doctors/:id', async(req,res)=>{
    try {
        console.log(req.params.id)
        let doctor = await Doctor.findOne({_id:req.params.id });
        if (!doctor) {
            return res.status(404).send('Doctor Not Found');
        }
        res.send(doctor);
    } catch(error) {
        res.status(500).send(error);
    }
})

// http://localhost:4096/admin/appointments/:id GET request
router.get('/appointments/:id', async(req,res)=>{
    try {
        let appointment = await Appointments.findOne({doctorId:req.params.id });
        if (!appointment) {
            return res.status(404).send('Doctor Not Found');
        }
        if (appointment.accepted == 1)
            return res.status(404).send('Appointment already accepted');
        res.send(appointment);
    } catch(error) {
        res.status(500).send(error);
    }
})

// http://localhost:4096/admin/appointments/:id GET request
router.get('/patients/:id', async(req,res)=>{
    try {
        let student = await Student.findOne({studentNo:req.params.id });
        if (!student) {
            
            return res.status(404).send('Student Not Found');
        }
        
        res.send(student);
    } catch(error) {
        res.status(500).send(error);
    }
})

export default router;