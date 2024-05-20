// Contains the Mongoose model of the TimeManager

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const timeManagerSchema = new Schema({
    ManagerName : {
    type : String,
    required : true
   },
   ManagerEmail : {
      type : String,
      required : true
   },
   ManagerAddress : {
      type : String,
      required : true
   },
   ManagerPhone : {
      type : Number,
      required : true
   },
   Password : {
      type : String,
      required : true
   }

})

const timeManager = mongoose.model("TimeManager",timeManagerSchema);
module.exports = timeManager;
