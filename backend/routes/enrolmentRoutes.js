const router = require("express").Router();

// Importing the Controller APIs
const {
    createEnrolment,
    allEnrolments,
    updateEnrolment,
    deleteEnrolment,
    singleEnrolment
} = require('../controllers/enrolmentController');

// Add the route handler for creating a new enrolment
router.post("/createEnrolment", createEnrolment);

// Get all Enrolments in the database
router.get("/allEnrolments", allEnrolments);

// Update a single Enrolment
router.put("/updateEnrolment/:id", updateEnrolment);

// Delete a single Enrolment
router.delete("/deleteEnrolment/:id", deleteEnrolment);

// Get details of a single Enrolment
router.get("/getEnrolment/:id", singleEnrolment);

module.exports = router;
