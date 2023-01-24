const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

const AnnouncementsSchema = new mongoose.Schema({

    by: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required:true,
    },
    date:{
        type: String,
        required:true,
    },
});


const AnnouncementModel = mongoose.model("announcements", AnnouncementsSchema);
module.exports = AnnouncementModel;