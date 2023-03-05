const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    title: {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    },

    userID : {
        type : mongoose.Types.ObjectId,
        ref: "User",
        require : true
    }

}, { timestamps : true});

module.exports = mongoose.model("Note" , noteSchema);