const router = require("express").Router();

// Importing the Controller APIs
const {
    createClassRoom,
    allClassRooms,
    updateClassRoom,
    deleteClassRoom,
    singleClassRoom
} = require('../controllers/classRoomController');

// Add the route handler for creating a new classroom
router.post("/createClassRoom", createClassRoom);

// Get all ClassRooms in the database
router.get("/allClassRooms", allClassRooms);

// Update a single ClassRoom
router.put("/updateClassRoom/:id", updateClassRoom);

// Delete a single ClassRoom
router.delete("/deleteClassRoom/:id", deleteClassRoom);

// Get details of a single ClassRoom 
router.get("/getClassRoom/:id", singleClassRoom);

module.exports = router;
