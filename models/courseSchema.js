const mongoose=require("mongoose")
const Schema=mongoose.Schema

const courseSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
});



const course=mongoose.model("course",courseSchema);



module.exports=course;

