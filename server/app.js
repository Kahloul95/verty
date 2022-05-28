const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();

mongoose.connect(
    "mongodb://localhost:27017/green_store?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    { useNewUrlParser: true });
    console.log('MongoDB connected');

app.use("/uploads",express.static((__dirname, 'uploads')))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
    
app.use('/api/',require('./routes/routes'));




module.exports = {app};