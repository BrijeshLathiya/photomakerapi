const mongoose = require('mongoose')

const userData = new mongoose.Schema ({
    UserName: String,
    MobileNo: Number,
    Date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("userData", userData)