// require('dotenv').config({path: './env'});

import dotenv from "dotenv";
import connectDB from './db/index.js';

dotenv.config({
    path : './env'
})

connectDB()




/*
import express from "express";
const app = express()

;( async()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", ()=>{
            console.log("Error connecting to DB", error)
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listinging on port${process.env.PORT}`);
        })
    }catch(error){
        console.log(error);
        throw err
    }
})()*/