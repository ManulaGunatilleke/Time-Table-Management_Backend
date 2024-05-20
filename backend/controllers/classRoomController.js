const ClassRoom = require("../models/classRoom");
const bodyParser = require('body-parser');
const router = require("express").Router();


// Create a new classroom
const createClassRoom = async (req, res) => {
    try {
        const { RoomID, Resources, AllocatedState } = req.body;

        // Create a new instance of ClassRoom model
        const newClassRoom = new ClassRoom({
            RoomID,
            Resources,
            AllocatedState
        });

        // Save the new classroom to the database
        await newClassRoom.save();

        // Send a success response
        res.status(201).json({ status: "Classroom created", classroom: newClassRoom });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error creating classroom", error: err.message });
    }
};

// Get all classrooms
const allClassRooms = async (req, res) => {
    await ClassRoom.find().then((classrooms) => {
        res.json(classrooms);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error fetching classrooms", error: err.message });
    });
};

// Update a classroom
const updateClassRoom = async (req, res) => {
    let roomId = req.params.id;
    const { RoomID, Resources, AllocatedState } = req.body;

    const updateClassRoom = {
        RoomID,
        Resources,
        AllocatedState
    };

    const update = await ClassRoom.findByIdAndUpdate(roomId, updateClassRoom).then(() => {
        res.status(200).send({ status: "Classroom updated" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating classroom", error: err.message });
    });
};

// Delete a single classroom
const deleteClassRoom = async (req, res) => {
    let roomId = req.params.id;

    await ClassRoom.findByIdAndDelete(roomId).then(() => {
        res.status(200).send({ status: "Classroom deleted" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with deleting classroom", error: err.message });
    });
};

// Get the details of a single classroom
const singleClassRoom = async (req, res) => {
    let roomId = req.params.id;

    await ClassRoom.findById(roomId).then((classroom) => {
        res.status(200).send({ status: "Classroom fetched", classroom });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with getting classroom", error: err.message });
    });
};

// Exporting the functions
module.exports = {
    createClassRoom,
    allClassRooms,
    updateClassRoom,
    deleteClassRoom,
    singleClassRoom
};
