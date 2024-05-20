const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Course = require('./course');

const EnrolmentSchema = new Schema({
    EnrolmentID: {
       type: String,
       required: true
    },
    StudentID: {
        type: String,
        required: true
    },
    StudentName: {
        type: String,
        required: true
    },
    Course: {
        type : Course.schema, 
        required : true
    }
});

const Enrolment = mongoose.model("Enrolment", EnrolmentSchema);
module.exports = Enrolment;
