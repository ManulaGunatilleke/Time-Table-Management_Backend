const Faculty = require("../models/faculty");
const bodyParser = require('body-parser');
const router = require("express").Router();


// Create a new faculty
const createFaculty = async (req, res) => {
    try {
        const { FacultyName, DepartmentName } = req.body;

        // Create a new faculty document
        const faculty = new Faculty({
            FacultyName,
            DepartmentName
        });

        // Save the faculty document to the database
        await faculty.save();

        res.status(201).send({ status: "Faculty created", faculty });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "Error creating faculty", error: err.message });
    }
};

// Get all faculties
const allFaculties = async (req, res) => {
    await Faculty.find().then((faculties) => {
        res.json(faculties);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error fetching faculties", error: err.message });
    });
};

// Update a faculty
const updateFaculty = async (req, res) => {
    let facultyId = req.params.id;
    const { FacultyName, DepartmentName } = req.body;

    const updateFaculty = {
        FacultyName,
        DepartmentName
    };

    const update = await Faculty.findByIdAndUpdate(facultyId, updateFaculty).then(() => {
        res.status(200).send({ status: "Faculty updated" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating faculty", error: err.message });
    });
};

// Delete a single faculty
const deleteFaculty = async (req, res) => {
    let facultyId = req.params.id;

    await Faculty.findByIdAndDelete(facultyId).then(() => {
        res.status(200).send({ status: "Faculty deleted" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with deleting faculty", error: err.message });
    });
};

// Get the details of a single faculty
const singleFaculty = async (req, res) => {
    let facultyId = req.params.id;

    await Faculty.findById(facultyId).then((faculty) => {
        res.status(200).send({ status: "Faculty fetched", faculty });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with getting faculty", error: err.message });
    });
};

// Exporting the functions
module.exports = {
    createFaculty,
    allFaculties,
    updateFaculty,
    deleteFaculty,
    singleFaculty
};
