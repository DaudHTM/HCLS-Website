require('dotenv').config()


const express = require("express");
const app = express();
app.use(express.json());


const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://daudhtm:print(\"mongodb\")@cluster0.4j6y3vr.mongodb.net/?retryWrites=true&w=majority"); 



//declaring routes
const userRoutes = require('./routes/user');
const announcementRoutes = require('./routes/announcement');





// gets user, pass, and meeting
app.use(userRoutes);

// gets all announcements
app.use(announcementRoutes);



app.listen(process.env.PORT, () => {
    console.log("server runs on port", process.env.PORT);
});