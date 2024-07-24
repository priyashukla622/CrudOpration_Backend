const express=require("express");
const userRouter=express.Router();
const Menu=require("../models/Menu")

userRouter.post("/",async(req, res) =>{
    try {
        const data = req.body;
        const menuData = new Menu(data);
        const result = await menuData.save();
        console.log(result);
        res.status(200).json({ "data save successfully": result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "internal server error" });
    }
});
userRouter.get("/",async(req, res) => {
    try {
        const data = await Menu.find(); 
        console.log("data fetch");
        res.status(200).json({ data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});
// userRouter.get("/:taste", async(req,res)=>{
//     try{
//         const taste=req.params.taste;
//         if(taste=="sweet"|| taste=="sour"||taste=="spicy"){
//             const response= await Menu.find(taste)
//             console.log(response);
//             res.status(200).json({"successfully found":response})
//         }else{
//             res.status(400).json({error:"Invalid data"})
//         }
//     }catch(error){
//         console.log(error);
//         res.status(500).json({"Internal server error":error})
//     }
// })


userRouter.get("/:workType",async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType=="sweet"|| workType=="sour"|| workType=="spicy"){
            const response=await Menu.find({taste:workType})
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
module.exports=userRouter
