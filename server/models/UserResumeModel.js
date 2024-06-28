
import mongoose, {Schema} from "mongoose";

const UserResumeModel=new mongoose.Schema({
    resumeId:{
        type:String,
        required:true
    },
    resumeTitle:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    }
},{timestamps:true});

const UserResume=mongoose.model("UserResume",UserResumeModel);

export default UserResume;