import express from 'express';
import UserResume from './models/UserResumeModel.js';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected");
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

connectDB();

app.post("/addUserResume",async(req,res)=>{
    const data= req.body;
    try{
        const newResume=new UserResume(data);
        const resume=await newResume.save();
        if(resume){
            res.status(201).json(resume);
        }
        else{
            res.status(500).json("Something went wrong");
        }
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
})

app.get("/getUserResume/:id",async(req,res)=>{
    const id = req.params.id;
    try{
        const resume=await UserResume.findOne({
            resumeId:id
        });
        if(resume){
            res.status(200).json(resume);
        }
        else{
            res.status(500).json("Something went wrong");
        }
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
})

app.get("/getUserAllResume/:userEmail",async(req,res)=>{
    const userEmail = req.params.userEmail;
    try{
        const resume=await UserResume.find({
            userEmail:userEmail
        });
        if(resume){
            res.status(200).json(resume);
        }
        else{
            res.status(500).json("Something went wrong");
        }
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
})

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});