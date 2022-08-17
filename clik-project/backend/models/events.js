const mongoose = require("mongoose");

const eventSchema =  new mongoose.Schema({
    name:{
        type: String,
        requried: true,
    },
    date:{
        type: String,
        requried: true,
    },
    image:{
        type: String,
        requried: true,
    }
});

const eventModel =  mongoose.model("sample-events",eventSchema);

module.exports = eventModel;