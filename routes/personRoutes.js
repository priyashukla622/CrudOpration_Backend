const express=require("express")
const router=express.Router()
const Person = require('../models/person');
router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("data saved", response);
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});
router.get("/", async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data fetch");
        res.status(200).json({ data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});
router.get("/:workType",async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType=="chef"|| workType=="manager"|| workType=="waiter"){
            const response=await Person.find({work:workType})
            console.log("response fetchd")
            res.status(200).json({response})
    
        }else{
            res.status(400).json({error:"Invalid data"})
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error });
    }
})
router.put("/:id",async(req,res)=>{
    try{
        const personId=req.params.id;
        const updatePersonData=req.body;
        const response=await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,
            runValidators:true,
        })
        if(!updatePersonData){
            return res.status(404).json({error:"Person not found"})
        }
        console.log("data updated")
        res.status(200).json({response})
    }catch(error){
        console.log(error);
        res.status(500).json({"Invalid server error":error})
    }
})


// router.delete("/:id",async(req,res)=>{
//     try{
//         const personId=req.params.id;
//         const response = await Person.findByIdAndRemove(personId);
//         if (!response) {
//             return res.status(404).json({ error: "Person not found" });
//         }
//         console.log("data deleted",response)
//         res.status(200).json({message:"person deleted successfully"})
//     }catch(error){
//         console.log("Invalid server")
//         res.status(500).json({error:"Internal server error"})
//     }
// })
router.delete("/:id", async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: "Person not found" });
        }
        console.log("Data deleted:", response);
        res.status(200).json({ message: "Person deleted successfully", data: response });
    } catch (error) {
        console.log("Server error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
module.exports=router;