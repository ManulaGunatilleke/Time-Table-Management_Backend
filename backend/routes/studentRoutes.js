const router = require("express").Router();

// Importing the Controller APIs
const {
    allStudents,
    updateStudent,
    deleteStudent,
    singleStudent
} = require('../controllers/studentController');

// Get all Students in the database
router.get("/allStudents", allStudents);

// Update a single Student
router.put("/updateStudent/:id", updateStudent);

// Delete a single Student
router.delete("/deleteStudent/:id", deleteStudent);

// Get details of a single Student 
router.get("/getStudent/:id", singleStudent);

module.exports = router;
