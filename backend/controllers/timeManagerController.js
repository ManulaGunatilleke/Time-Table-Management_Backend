const TimeManager = require("../models/timeManager");
const bodyParser = require('body-parser');
const router = require("express").Router();

//Get all TimeManagers
const allTimeManagers = async (req, res) => {

    TimeManager.find().then((timeManagers)=>{
        res.json(timeManagers)
    }).catch((err)=>{
        console.log(err)
    })
}

//Updating a TimeManager
const updateTimeManager = async (req, res) => {
    let timeManagerId = req.params.id;
    const {TimeManagerName, TimeManagerID, TimeManagerEmail, TimeManagerAddress, TimeManagerPhone, Password} = req.body;

    const updateTimeManager = {
        TimeManagerName,
        TimeManagerID,
        TimeManagerEmail,
        TimeManagerAddress,
        TimeManagerPhone,
        Password
    }

    const update = await TimeManager.findByIdAndUpdate(timeManagerId, updateTimeManager).then(()=>{
        res.status(200).send({status: "TimeManager updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
}

//Deleting a single TimeManager
const deleteTimeManager = (req, res) => {
    let timeManagerId = req.params.id;

    TimeManager.findByIdAndDelete(timeManagerId).then(()=>{
        res.status(200).send({status: "TimeManager deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with deleting TimeManager", error: err.message});
    })
}

//Get the details of a single TimeManager
const singleTimeManager = (req, res) => {
    let timeManagerId = req.params.id;

    TimeManager.findById(timeManagerId).then((timeManager)=>{
        res.status(200).send({status: "TimeManager fetched", timeManager})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting timeManager", error: err.message});
    })
}

//Exporting the Functions
module.exports = {
    allTimeManagers,
    updateTimeManager,
    deleteTimeManager,
    singleTimeManager
}
