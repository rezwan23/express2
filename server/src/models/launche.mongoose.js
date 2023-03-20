const mongoose = require('mongoose');

const launchSchema = new mongoose.Schema({
    flightNumber : {
        type : Number,
        required : true,
    },
    launchDate : {
        type :Date,
        required : true,
    },
    mission:{
        type : String,
        required : true
    },
    tocket: {
        type : String,
        required : true
    },
    target : {
        type : String,
        required : true
    },
    customer : [String],
    upcoming : {
        type: Boolean,
        require : true,
        default : true
    },
    success : {
        type: Boolean,
        require : true,
        default : true
    }
})