const Course = require("../models/course");
const bodyParser = require('body-parser');
const router = require("express").Router();

// Create a new course
const createCourse = async (req, res) => {
    try {
        const { Code, CourseName, Description, Credits } = req.body;

        // Create a new course object
        const newCourse = new Course({
            Code,
            CourseName,
            Description,
            Credits
        });

        // Save the course to the database
        await newCourse.save();

        res.status(201).json({ message: 'Course created successfully', course: newCourse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create course' });
    }
};

// Get all courses
const allCourses = async (req, res) => {
    await Course.find().then((courses) => {
        res.json(courses);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error fetching courses", error: err.message });
    });
};

// Update a course
const updateCourse = async (req, res) => {
    let courseId = req.params.id;
    const { Code, CourseName, Description, Credits, Faculty } = req.body;

    const updateCourse = {
        Code,
        CourseName,
        Description,
        Credits,
    };

    const update = await Course.findByIdAndUpdate(courseId, updateCourse).then(() => {
        res.status(200).send({ status: "Course updated" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating course", error: err.message });
    });
};

// Delete a single course
const deleteCourse = async (req, res) => {
    let courseId = req.params.id;

    await Course.findByIdAndDelete(courseId).then(() => {
        res.status(200).send({ status: "Course deleted" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with deleting course", error: err.message });
    });
};

// Get the details of a single course
const singleCourse = async (req, res) => {
    let courseId = req.params.id;

    await Course.findById(courseId).then((course) => {
        res.status(200).send({ status: "Course fetched", course });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with getting course", error: err.message });
    });
};

// Exporting the functions
module.exports = {
    createCourse,
    allCourses,
    updateCourse,
    deleteCourse,
    singleCourse
};
