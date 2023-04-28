import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({

    doctorId:{
        type: String,
        required: true
    },

    patientId: {
        type: String,
        required: true
    },

    patientFirstName: {
        type: String,
        required: true
    },

    patientLastName: {
        type: String,
        required: true
    },

    day: {
        type: String,
        required: true
    },

    month: {
        type: String,
        required: true
    },

    year: {
        type: String,
        required: true
    },

    hour: {
        type: String,
        required: true
    },

    accepted: {
        type: String,
        required: true
    },

})

export default mongoose.model('Appointment',appointmentSchema)