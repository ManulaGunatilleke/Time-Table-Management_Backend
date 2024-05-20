const router = require("express").Router();

// Importing the Controller APIs
const {
    createFaculty,
    allFaculties,
    updateFaculty,
    deleteFaculty,
    singleFaculty
} = require('../controllers/facultyController');

// Add the route handler for creating a new enrolment
router.post("/createFaculty", createFaculty);

// Get all Faculties in the database
router.get("/allFaculties", allFaculties);

// Update a single Faculty
router.put("/updateFaculty/:id", updateFaculty);

// Delete a single Faculty
router.delete("/deleteFaculty/:id", deleteFaculty);

// Get details of a single Faculty
router.get("/getFaculty/:id", singleFaculty);

module.exports = router;
