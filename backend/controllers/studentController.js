const Student = require("../models/student");
const bodyParser = require('body-parser');
const router = require("express").Router();

//Get all students
const allStudents = async (req, res) => {
    await Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
};

//Updating a student
const updateStudent = async (req, res) => {
    let studentId = req.params.id;
    const {Fullname,Email,Address,Phone,UserType,Gender,Password} = req.body;

    const updateStudent = {
        Fullname,
        Email,
        Address,
        Phone,
        UserType,
        Gender,
        Password
    }

    const update = await Student.findByIdAndUpdate(studentId, updateStudent).then(()=>{
        res.status(200).send({status: "Student updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
}

//Deleting a single student
const deleteStudent = async(req, res) => {
    let studentId = req.params.id;

    await Student.findByIdAndDelete(studentId).then(()=>{
        res.status(200).send({status: "Student deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting student", error: err.message});
    })
}

//Get the details of a single student
const singleStudent = async(req, res) => {
    let studentId = req.params.id;

    await Student.findById(studentId).then((student)=>{
        res.status(200).send({status: "Student fetched", student})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting student", error: err.message});
    })
}

//Exporting the Functions
module.exports = {
    allStudents,
    updateStudent,
    deleteStudent,
    singleStudent
}
