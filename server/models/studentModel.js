import mongoose from "mongoose";

const studentSchema = mongoose.Schema({

    firstName:{
        type: String,
        required: true
    },

    lastName:{
        type: String,
        required: true
    },

    department:{
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    studentNo: {
        type: String,
        required: true
    }

})

export default mongoose.model('Student',studentSchema)