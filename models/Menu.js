// const mongoose=require("mongoose");

// const menuSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//     },
//     taste:{
//         type:String,
//         required:true,
//         enum:["species","sweet","sour"]

//     },
//     is_drink:{
//         type:Boolean,
//         default:false,
//     },
//     num_seles:{
//         type:Number,
//         required:true,
//     }

// })
// const Menu=mongoose.model("Menu",menuSchema)
// module.exports=Menu



const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true, // This means the field is required
    },
    taste: {
        type: String,
        required: true,
        enum: ["sweet", "sour", "spicy"], // Example enum values
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    num_seles: {
        type: Number,
        required: true,
    }
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
