const router = require("express").Router();

// Importing the Controller APIs
const {
    createTimeTable,
    allTimeTables,
    updateTimeTable,
    deleteTimeTable,
    singleTimeTable
} = require('../controllers/timeTableController');

router.post("/createTimeTable", createTimeTable);

// Get all TimeTables in the database
router.get("/allTimeTables", allTimeTables);

// Update a single TimeTable
router.put("/updateTimeTable/:id", updateTimeTable);

// Delete a single TimeTable
router.delete("/deleteTimeTable/:id", deleteTimeTable);

// Get details of a single TimeTable
router.get("/getTimeTable/:id", singleTimeTable);

module.exports = router;
