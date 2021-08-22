const mongoose=require('mongoose');


const credenceSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    img:String,
    summary:String
})

const collection=mongoose.model('credence',credenceSchema);

module.exports=collection;