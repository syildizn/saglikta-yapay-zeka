import mongoose from "mongoose";

const meetingSchema = mongoose.Schema({
    doctorId:{
        type: String,
        required: true
    },

    doctorFirstName:{
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

    // day: {
    //     type: String,
    //     required: true
    // },

    // month: {
    //     type: String,
    //     required: true
    // },

    // year: {
    //     type: String,
    //     required: true
    // },

    date: {
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

    meetingRoom: {
        type: String,
        required: true
    },


})

export default mongoose.model('Meeting',meetingSchema)