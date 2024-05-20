// Contains the Mongoose model of the Faculty
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FacultySchema = new Schema({

    FacultyName : {
    type : String,
    required : true
   },
   DepartmentName : {
    type : String,
    required : true
   },

});

const Faculty = mongoose.model("Faculty", FacultySchema);
module.exports = Faculty;
