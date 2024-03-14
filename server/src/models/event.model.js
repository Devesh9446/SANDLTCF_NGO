import mongoose from 'mongoose'

const eventSchema=new mongoose.Schema({
    image:{
        type:string,
        required:true,
    },
    name:{
        type:string,
        required:true,
    },
    description:{
        type:string,
        required:true, 
    },
    regitrationDate:{ 
        type:string,
        required:true,
    },
    eventDate:{
        type:string,
        required:true,
    },
    status:{
        type:Boolean,
        default:0;
    }
},{timestamps:true})

export const  event= mongoose.model(event,eventSchema); 