const express = require('express');
const router = express.Router();
const { 
    registerStudent,
    loginStudent,
    registerTimeManager,
    loginTimeManager 
} = require('../controllers/authController');

//Student authentication
router.post('/registerStudent', registerStudent);
router.post('/loginStudent', loginStudent);

//TimeManager authentication
router.post('/registerTimeManager', registerTimeManager);
router.post('/loginTimeManager', loginTimeManager);

module.exports = router;
