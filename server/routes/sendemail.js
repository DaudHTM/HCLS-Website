const express = require('express');
const sendEmail = require("../sendEmail");
const dotenv = require("dotenv").config();
const router = express.Router();
const sendEmailModel = require('../models/announcements');




router.post("/sendmail", async(req, res) => {

    sendEmailModel.find({}, async(err,result) => {
        const {email} = req.body;
        try{
            const send_to = "DaudHTM@gmail.com";
            const sent_from = process.env.EMAIL_USER;
            const reply_to = "DaudHTM@gmail.com";
            const subject = "HCLS Robotics club contact";
            const message = `
            <h3> Hello zino</h3>

            <p> Regards </p>
            
            `;
            await sendEmail(subject, message , send_to, sent_from, reply_to );
            res.status(200).json({sucess: true, message: "Email Sent"})
        } catch (error){
            res.status(500).json(error.message)

        }
   

    });


});

module.exports = router;