// Contains the Mongoose model of the TimeTable
const mongoose = require('mongoose');
const Course = require('./course');
const Faculty = require('./faculty');

const Schema = mongoose.Schema;

const TimeTableSchema = new Schema({
    TimeTableID: {
       type: String,
       required: true
    },
    Batch : {
        type : String,
        required : true
    },
    Course: {
        type : [[Course.schema]],//relevent Details
        required : true
    },
    Location : {
        type : String,
        required : true
    },
    Time : {
        type : Date,
        required : true
    },
    Faculty : {
        type : [[Faculty.schema]],
        required : true
    },
});
 

const TimeTable = mongoose.model("TimeTable", TimeTableSchema);
module.exports = TimeTable;