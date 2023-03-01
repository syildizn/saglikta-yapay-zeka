import express from "express";
import bcrypt from 'bcryptjs'
import Admin from '../models/adminModel.js';
import Academician from '../models/academicianModel.js'

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

export default router;