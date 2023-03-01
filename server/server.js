import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
//import academicianRouter from './Routers/academicianRouter.js'
import adminRouter from './Routers/adminRouter.js'

import cors from 'cors'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.static('client'))

//app.use("/academician", academicianRouter);
app.use("/admin", adminRouter);



app.listen(4096, () => {
    // connect to database
    mongoose
      .connect(process.env.DB_CONNECTION_STRING)
      .then(() => console.log("connected to db"))
      .catch((error) => console.log(error));
  });