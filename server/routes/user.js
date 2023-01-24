const express = require('express');

const router = express.Router();
const UserModel = require('../models/user');




router.get("/getUsers", (req, res) => {

    UserModel.find({}, (err,result) => {

        if(err){
            res.json(err);
        } else{
            res.json(result);
        }

    });


});

module.exports = router;