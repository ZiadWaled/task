const mongoose=require("mongoose")
const Schema=mongoose.Schema

const studentSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
    }
});



const student=mongoose.model("student",studentSchema);



module.exports=student;
