// Contains the Mongoose model of the Class
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classRoomSchema = new Schema({

   RoomID : {
    type : String,
    required : true
   },
   Resources : {
    type : String,
    required : true
   },
   AllocatedState : {
      type : Boolean,
      required : true
   },

});

const classRoom = mongoose.model("ClassRoom", classRoomSchema);
module.exports = classRoom;
