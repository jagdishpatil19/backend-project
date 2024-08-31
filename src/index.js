// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import conectDB from "./db/index.js";

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from 'express'
// const app =express()
dotenv.config({
    path:'./env'
})

conectDB()

// ;( async ()=>{
// try{
// await mongoose.connect(`${process.env.MONGODB_URL}/ ${DB_NAME}`)
// app.on('error',(error)=>{
//     console.log("Error:",error);
//     throw error
// })
// app.listen(process.env.PORT,()=>{
//     console.log(`app listing on port ${process.env.PORT}`);
    
// })
// }
// catch(error){
// console.log("error",error);
// throw error

// }
// }) ()