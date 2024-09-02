import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://Singhhpriyanshu:05112002@cluster0.yuap1.mongodb.net/food-del').then(()=>console.log("Db connected"));
}