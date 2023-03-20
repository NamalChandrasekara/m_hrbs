import mongoose from "mongoose";

const Schema = mongoose.Schema;
const roomSchema  = new Schema({
    name : {
        type : String,
        required : true
    },
    maxcount:{
        type:Number,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    rentperday:{
        type:Number,
        required:true
    },
    /*imagurl:[],
    currentbookings:[],
    type:{
        type:String,
        required:true
    },*/
    description :{
        type:String,
        required:true
    }

})

const Room = mongoose.model('Room',roomSchema);
module.exports=Room;