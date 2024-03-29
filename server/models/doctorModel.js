import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({

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

    

})

export default mongoose.model('Doctor', doctorSchema)