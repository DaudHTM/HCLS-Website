const express = require('express');

const router = express.Router();
const AnnouncementsModel = require('../models/announcements');




router.get("/getAnnouncements", (req, res) => {

    AnnouncementsModel.find({}, (err,result) => {

        if(err){
            res.json(err);
        } else{
            res.json(result);
        }

    });


});

module.exports = router;