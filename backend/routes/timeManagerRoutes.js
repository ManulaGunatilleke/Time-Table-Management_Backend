const router = require("express").Router();

// Importing the Controller APIs
const {
    allTimeManagers,
    updateTimeManager,
    deleteTimeManager,
    singleTimeManager
} = require('../controllers/timeManagerController');

// Get all TimeManagers in the database
router.get("/allTimeManagers", allTimeManagers);

// Update a single TimeManager
router.put("/updateTimeManager/:id", updateTimeManager);

// Delete a single TimeManager
router.delete("/deleteTimeManager/:id", deleteTimeManager);

// Get details of a single TimeManager 
router.get("/getTimeManager/:id", singleTimeManager);

module.exports = router;
