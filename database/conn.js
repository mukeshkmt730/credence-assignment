const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/cerdenceAssignment', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,useCreateIndex:true }).then(() => {
    console.log("mongoose connected successfully");
}).catch((e) => {
    console.log("mongoose not connected");
})

module.exports = connection;