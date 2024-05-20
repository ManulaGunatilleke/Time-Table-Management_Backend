const express = require('express');
const app = express();
const  cors = require("cors");
require("dotenv").config();
const connectToDatabase = require('./config/database');

//Initializing the port number
const port = process.env.PORT || 8070;

// Connect to the database
connectToDatabase(process.env.MONGODB_URL);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRouter = require('./routes/authRoutes');
app.use('/auth', authRouter);

const studentsRouter = require('./routes/studentRoutes');
app.use('/students', studentsRouter);

const timeManagersRouter = require('./routes/timeManagerRoutes');
app.use('/timeManagers', timeManagersRouter);

const classRoomRouter = require('./routes/classRoomRoutes');
app.use('/classRooms', classRoomRouter);

const courseRouter = require('./routes/courseRoutes');
app.use('/courses', courseRouter);

const enrolmentRouter = require('./routes/enrolmentRoutes');
app.use('/enrolments', enrolmentRouter);

const facultyRouter = require('./routes/facultyRoutes');
app.use('/faculties', facultyRouter);

const timeTableRouter = require('./routes/timeTableRoutes');
app.use('/timeTables', timeTableRouter);


//Server Connection
app.listen(port, () => {
    console.log(`Server is up and running on port number ${port}`);
});

module.exports = app;
