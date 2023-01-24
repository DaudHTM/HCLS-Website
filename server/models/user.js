const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required:true,
    },
    pass:{
        type: String,
        required:true,
    },
    meetings:[{
        type: String,
        required:true,
    }]
});


const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;