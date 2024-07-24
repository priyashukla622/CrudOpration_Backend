// create server
// const express=require("express");
// const app=express();
// const db=require('./db')
// const menu=require("./models/Menu")
// const Person=require('./models/person')
// const bodyParser=require("body-parser")
// app.use(bodyParser.json());
// app.get("/",function(req,res){
//     res.send("hello words")
// })
// app.post("/person", async(req,res)=>{
//     try{
//         const data= req.body
//         const newPerson=new Person(data);
//         const response=await newPerson.save();
//         console.log("data saved",response)
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error:"Internal server error"})
//     }
// })
// app.get("/person",async(req,res)=>{
//     try{
//         const data=await Person.find()
//         console.log("data fetch")
//         res.status(200).json({data})
//     }catch(error){
//         console.log(error)
//         res.status(500).json({error})
//     }
// })

// app.post("/menu",async(req,res)=>{
//     try{
//         const data=req.body;
//         const menuData=new menu(data);
//         const result= await menuData.save();
//         console.log(result)
//         res.status(200).json({"data save successfully":result});
//     }catch(error){
//         console.log(error)
//          res.status(500).json({error:"internal server error"})
//     }
// })
// app.get("/menu",async(req,res)=>{
//     try{
//         const data=await Person.find()
//         console.log("data fetch")
//         res.status(200).json({data})
//     }catch(error){
//         console.log(error)
//         res.status(500).json({error})
//     }
// })
// app.listen(5000,()=>{
//     console.log("server is running 3000")
// })



const express = require("express");
const app = express();
const db = require('./db');
const Menu = require("./models/Menu");
const Person = require('./models/person');
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.send("hello world");
});

const personRoutes=require("./routes/personRoutes")
const menuRoutes=require("./routes/menuRoutes")
app.use("/menu",menuRoutes)
app.use("/person",personRoutes)
app.listen(5000,() => {
    console.log("server is running 5000");
});





