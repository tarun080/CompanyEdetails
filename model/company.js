const mongoose = require('mongoose')

const company = mongoose.Schema({  
    cname: {type: String},
    city: {type: String},
    state: {type: String},
    cemail: {type: String},
    edetails: {type: mongoose.Schema.ObjectId, ref: "EDetails"}
})

module.exports = mongoose.model("Company", company) 