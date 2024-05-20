const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type: String, // Similar Reference to the Student model
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '1d', // Automatically delete documents after 1 day
    },
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
