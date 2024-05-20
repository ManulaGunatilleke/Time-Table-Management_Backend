const Student = require('../models/student');
const TimeManager = require('../models/timeManager');
const Token = require('../models/token');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Registering a new Student
const registerStudent = async (req, res) => {
    try {
        const { Fullname, StudentID, Email, Address, Phone, UserType, Gender, Password } = req.body;
        const hashedPassword = await bcrypt.hash(Password, 10);
        const studentValidation = await Student.findOne({Email});
        
        if (!studentValidation){
        const student = new Student({
            Fullname, 
            StudentID, 
            Email, 
            Address, 
            Phone, 
            UserType, 
            Gender,
            Password: hashedPassword,
        });


        await student.save();

        res.json({ message: 'Student registration successful' });
    }else{
        res.json({message: 'Student already exist'})
    }
    } catch (error) {
        res.status(500).json({ error: 'Student registration failed' });
    }
};

//Student Login
const loginStudent = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const student = await Student.findOne({ Email });
        if (!student) {
            res.status(401).json({ error: 'Student authentication failed' });
            return;
        }

        const passwordMatch = await bcrypt.compare(Password, student.Password);

        if (passwordMatch) {
            const token = jwt.sign({ email: student.Email }, 'secret_key');
            const tokenDoc = new Token({ token, userId: student._id });
            await tokenDoc.save();
            res.json({ token, student });
        } else {
            res.status(401).json({ error: 'Student authentication failed' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Student authentication failed' });
    }
};

//TimeManager Registration
const registerTimeManager = async (req, res) => {
    try {
        const { ManagerName, ManagerEmail, ManagerAddress, ManagerPhone, Password } = req.body;
        const hashedPassword = await bcrypt.hash(Password, 10);

        const timeManager = new TimeManager({
            ManagerName, 
            ManagerEmail, 
            ManagerAddress, 
            ManagerPhone,
            Password: hashedPassword,
        });

        await timeManager.save();

        res.json({ message: 'TimeManager registration successful' });
    } catch (error) {
        res.status(500).json({ error: 'TimeManager registration failed' });
    }
};

//TimeManager Login
const loginTimeManager = async (req, res) => {
    try {
        const { ManagerEmail, Password } = req.body;
        const timeManager = await TimeManager.findOne({ ManagerEmail });

        if (!timeManager) {
            res.status(401).json({ error: 'TimeManager authentication failed' });
            return;
        }
        
        const passwordMatch = await bcrypt.compare(Password, timeManager.Password);

        if (passwordMatch) {
            const token = jwt.sign({ email: timeManager.ManagerEmail }, 'secret_key');
            res.json({ token, timeManager });
        } else {
            res.status(401).json({ error: 'TimeManager authentication failed' });
        }
    } catch (error) {
        res.status(500).json({ error: 'TimeManager authentication failed' });
    }
};


module.exports = { 
    registerStudent, 
    loginStudent,
    registerTimeManager,
    loginTimeManager
};
