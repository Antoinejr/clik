const express = require("express")
const app = express();

const mongoose = require("mongoose");
const eventModel = require("./models/events");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("listening")
});

mongoose.connect("mongodb+srv://anto:nodepass00@cluster0.vqytbak.mongodb.net/?retryWrites=true&w=majority");


//routes
app.get("/getEvent",(req, res) =>{
    eventModel.find({}, (err,result) =>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })

});

app.post("/createEvent", async (req, res) =>{
    const event = req.body;
    const newEvent = new eventModel(event);
    await newEvent.save();

    res.json(event);


});



