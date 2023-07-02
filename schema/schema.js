const express = require('express');
const mongoose = require('mongoose');
const student = new mongoose.Schema({
    name:{
        type: String
    },
    mobile:{
        type: Number
    },
    class:{
        type: String
    },
    subject:{
        type: String
    }
    

});

const register = new mongoose.model("ClassTeacher",student)
module.exports = register;


