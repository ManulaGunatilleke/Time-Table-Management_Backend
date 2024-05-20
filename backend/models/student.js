// Contains the Mongoose model of the student

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
   Fullname : {
    type : String,
    required : true
   },
   StudentID : {
    type : String,
    required : true
   },
   Email : {
      type : String,
      required : true
   },
   Address : {
      type : String,
      required : true
   },
   Phone : {
      type : Number,
      required : true
   },
   UserType : {
    type : String,
    required : true
   },
   Gender : {
    type : String,
    required : true
   },
   Password : {
      type : String,
      required : true
   }

})

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
