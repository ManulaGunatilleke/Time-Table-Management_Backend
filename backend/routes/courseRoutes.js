const router = require("express").Router();

// Importing the Controller APIs
const {
    createCourse,
    allCourses,
    updateCourse,
    deleteCourse,
    singleCourse
} = require('../controllers/courseController');

// Add the route handler for creating a new course
router.post("/createCourse", createCourse);

// Get all Courses in the database
router.get("/allCourses", allCourses);

// Update a single Course
router.put("/updateCourse/:id", updateCourse);

// Delete a single Course
router.delete("/deleteCourse/:id", deleteCourse);

// Get details of a single Course
router.get("/getCourse/:id", singleCourse);

module.exports = router;
