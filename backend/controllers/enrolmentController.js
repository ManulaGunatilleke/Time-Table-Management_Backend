const Enrolment = require("../models/enrolment");
const bodyParser = require('body-parser');
const router = require("express").Router();


// Create a new enrolment
const createEnrolment = async (req, res) => {
    try {
        const { EnrolmentID, StudentID, StudentName, Course } = req.body;

        // Create a new enrolment document
        const enrolment = new Enrolment({
            EnrolmentID,
            StudentID,
            StudentName,
            Course
        });

        // Save the enrolment document to the database
        const createdEnrolment = await enrolment.save();

        res.status(201).send({ status: "Enrolment created", enrolment: createdEnrolment });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "Error creating enrolment", error: err.message });
    }
};

// Get all enrolments
const allEnrolments = async (req, res) => {
    await Enrolment.find().then((enrolments) => {
        res.json(enrolments);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error fetching enrolments", error: err.message });
    });
};

// Update an enrolment
const updateEnrolment = async (req, res) => {
    try {
        let enrolmentId = req.params.id;
        const { EnrolmentID, StudentID, StudentName, Course } = req.body;

        const updateEnrolment = {
            EnrolmentID,
            StudentID,
            StudentName,
            Course
        };

        await Enrolment.findByIdAndUpdate(enrolmentId, updateEnrolment);
        res.status(200).send({ status: "Enrolment updated" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "Error with updating enrolment", error: err.message });
    }
};

// Delete a single enrolment
const deleteEnrolment = async (req, res) => {
    let enrolmentId = req.params.id;

    await Enrolment.findByIdAndDelete(enrolmentId).then(() => {
        res.status(200).send({ status: "Enrolment deleted" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with deleting enrolment", error: err.message });
    });
};

// Get the details of a single enrolment
const singleEnrolment = async (req, res) => {
    let enrolmentId = req.params.id;

    await Enrolment.findById(enrolmentId).then((enrolment) => {
        res.status(200).send({ status: "Enrolment fetched", enrolment });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with getting enrolment", error: err.message });
    });
};

// Exporting the functions
module.exports = {
    createEnrolment,
    allEnrolments,
    updateEnrolment,
    deleteEnrolment,
    singleEnrolment
};
