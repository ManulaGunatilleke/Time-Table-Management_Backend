const TimeTable = require("../models/timeTable");
const bodyParser = require('body-parser');
const router = require("express").Router();

// Create a new timetable
const createTimeTable = async (req, res) => {
    try {
        const { TimeTableID, Batch, Course, Location, Time, Faculty } = req.body;
        const date = await TimeTable.findOne({Time});
        const timeTableID = await TimeTable.findOne({TimeTableID});
        // Create a new timetable object
        if ((!date)&&(!timeTableID)){
        const newTimeTable = new TimeTable({
            TimeTableID,
            Batch,
            Course,
            Location,
            Time,
            Faculty
        });
        // Save the timetable to the database
        await newTimeTable.save();

        res.status(201).json({ message: 'Timetable created successfully', timetable: newTimeTable });
    }else{
        res.json({ message: 'You refferenced same date or your Timetable Id is already exist'});
    }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create timetable' });
    }
};


// Get all timetables
const allTimeTables = async (req, res) => {
    await TimeTable.find().then((timeTables) => {
        res.json(timeTables);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error fetching timetables", error: err.message });
    });
};

// Update a timetable
const updateTimeTable = async (req, res) => {
    let timeTableId = req.params.id;
    const { TimeTableID, Batch, Course, Location, Time, Faculty } = req.body;

    const updateTimeTable = {
        TimeTableID,
        Batch,
        Course,
        Location,
        Time,
        Faculty
    };

    const update = await TimeTable.findByIdAndUpdate(timeTableId, updateTimeTable).then(() => {
        res.status(200).send({ status: "Timetable updated" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating timetable", error: err.message });
    });
};

// Delete a single timetable
const deleteTimeTable = async (req, res) => {
    let timeTableId = req.params.id;

    await TimeTable.findByIdAndDelete(timeTableId).then(() => {
        res.status(200).send({ status: "Timetable deleted" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with deleting timetable", error: err.message });
    });
};

// Get the details of a single timetable
const singleTimeTable = async (req, res) => {
    let timeTableId = req.params.id;

    await TimeTable.findById(timeTableId).then((timeTable) => {
        res.status(200).send({ status: "Timetable fetched", timeTable });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with getting timetable", error: err.message });
    });
};

// Exporting the functions
module.exports = {
    createTimeTable,
    allTimeTables,
    updateTimeTable,
    deleteTimeTable,
    singleTimeTable
};
