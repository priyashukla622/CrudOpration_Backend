// const mongoose=require("mongoose");
// const personSchema=new Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     age:{
//         type:Number,
//     },
//     work:{
//         type:String,
//         enum:["chef","waiter","manager"],
//         required:true,
//     },
//     mobile:{
//         type:String,
//         required:true,
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     address:{
//         type:String,
//     },
//     salary:{
//         type:String,
//         required:true
//     }

// });
// const Person=mongoose.model("Person",personSchema);
// module.exports=Person;



const mongoose = require("mongoose");
const { Schema } = mongoose; 

const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0 
    },
    work: {
        type: String,
        enum: ["chef", "waiter", "manager"],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        default: "" 
    },
    salary: {
        type: Number, 
        required: true
    }
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
