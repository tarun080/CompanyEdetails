const mongoose = require('mongoose')

const details = mongoose.Schema({  
    ename : {type: String},
    ephone: {type: Number},
    eemail: {type: String}
})

module.exports = mongoose.model("EDetails", details) 