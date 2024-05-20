// Contains the Mongoose model of the Course
const mongoose = require('mongoose');
const Faculty = require('./faculty');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({

   Code : {
    type : String,
    required : true
   },
   CourseName : {
    type : String,
    required : true
   },
   Description : {
      type : String,
      required : true
   },
   Credits : {
    type : Number,
    required : true
   },

})

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
