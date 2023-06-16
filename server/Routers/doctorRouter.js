import express from "express";
import bcrypt from 'bcryptjs'
import Academician from '../models/academicianModel.js';
import Doctor from '../models/doctorModel.js';
import Appointment from '../models/appointmentModel.js';
import Meeting from '../models/meetingModel.js';
import nodemailer from "nodemailer"

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

// // http://localhost:4096/doctor/signin ' e yapılan POST isteği
// router.post("/signin", async (req,res)=>{
//     try {
//         const {password,email} = req.body;
//         const doctor = await Doctor.findOne({email})
//         if(!doctor)
//             return res.status(400).json({message: "Doctor does not exist"})

//         const isPasswordCorrect = await bcrypt.compare(password, doctor.password);
//         if(!isPasswordCorrect)
//             return res.status(400).json({message: "Wrong Password"})
        
//         return res.status(200).json({ Doctor, message: 'Authentication successful' })
//     } catch (error) {
//         return res.status(400).json({ message: error.message })
//     }
// })

// http://localhost:4096/doctor/signin ' e yapılan POST isteği
router.post("/signin", async (req,res)=>{
    try {
        const {email, password} = req.body;
        const doctor = await Doctor.findOne({email})
        if (!doctor || doctor.password !== password) {
            return res.status(400).json({ message: "Invalid credentials" });
          }
          

        // const isPasswordCorrect = await bcrypt.compare(password, doctor.password);
        // if(!isPasswordCorrect)
        //     return res.status(400).json({message: "Wrong Password"})
        
        return res.status(200).json({ doctor, message: 'Authentication successful' })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
})

// http://localhost:4096/doctor/deleteappointment ' e yapılan POST isteği
router.delete('/RejectAppointment', async (req, res) => {
    try {
        const _id = req.body.appointmentId.slice(1);
        // const {doctorId, patientId} = req.body;
        console.log(_id);
 
        //console.log(doctorId);
        // Check if the document exists
        const appointment = await Appointment.findOne({ _id });
  
        if (!appointment) {
            res.status(404).send('Appointment not found');
        
        } else {
            // Delete the document
            const result = await Appointment.deleteOne({ _id });
            res.status(200).json(result)
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).send('An error occurred while deleting the Appointment');
    }
  });


router.post('/setMeeting', function (req, res) {

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'syzbakircay.projects@gmail.com',
        pass: 'mlkvarvhvjoqxboy'
    }
    });

    console.log(req.body.appointmentId);

    var mailOptions = {
    from: 'syzbakircay.projects@gmail.com',
    // to: `${req.body.patientEmail}`,
    to: "syzbakircay.projects@gmail.com",
    subject: 'Randevu Onay',
    text: `Merhaba, 

    Randevunuzun onaylandığını bildirmekten mutluluk duyuyoruz. Aşağıdaki detaylar randevunuz hakkında bilgi içermektedir:

    Hasta Adı: ${req.body.patientFirstName}
    Hasta Soyadı: ${req.body.patientLastName}
    Tarih: ${req.body.patientDate}
    Saat: ${req.body.patientHour}
    Doktor Adı: ${req.body.doctorFirstName}
    Doktor Soyadı: ${req.body.doctorLastName}
    Jitsi Linki: "https://meet.jit.si/${req.body.appointmentId.slice(1)}"

    İyi günler dileriz.`
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });

    try {
        const newMeeting = new Meeting({
          doctorId: req.body.doctorId,
          doctorFirstName: req.body.doctorFirstName,
          patientId: req.body.patientId,
          patientFirstName: req.body.patientFirstName,
          patientLastName: req.body.patientLastName,
          date: req.body.patientDate,
          hour: req.body.patientHour,
          accepted: "1",
          meetingRoom: "https://meet.jit.si/" + req.body.appointmentId.slice(1),
        });
    
        newMeeting.save();
        console.log("New meeting created");

        console.log(req.body.appointmentId.slice(1));
        // Update the accepted value in the corresponding appointment
        Appointment.findOneAndUpdate(
            { _id: req.body.appointmentId.slice(1) },
            { accepted: "1" },
            { new: true }
        )
            .then((updatedAppointment) => {
            console.log("Appointment updated successfully");
            })
            .catch((error) => {
            console.log("Error updating appointment:", error);
            });
      } catch (error) {
        console.log("Error creating meeting:", error);
      }
    
      

});

export default router;
