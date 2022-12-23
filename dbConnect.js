const mongoose = require('mongoose')

const URL = 'mongodb+srv://test-anurag:test123@cluster0.g2tqnwo.mongodb.net/healthCart'

mongoose.connect(URL)

let connectionObj = mongoose.connection

connectionObj.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})

connectionObj.on('error' , ()=>{
    console.log('Mongo DB Connection Failed')
})
