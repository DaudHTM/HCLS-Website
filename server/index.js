require('dotenv').config()


const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://daudhtm:print(\"mongodb\")@cluster0.4j6y3vr.mongodb.net/?retryWrites=true&w=majority"); 



//declaring routes
const userRoutes = require('./routes/user');
const announcementRoutes = require('./routes/announcement');
const sendEmailRoutes = require('./routes/sendemail');





// gets user, pass, and meeting
app.use(userRoutes);

// gets all announcements
app.use(announcementRoutes);

//
app.use(sendEmailRoutes);

app.listen(process.env.PORT, () => {
    console.log("server runs on port", process.env.PORT);
});