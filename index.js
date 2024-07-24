// #############callback function ###############
// function callback(){
//     console.log("now adding is successful complete");
// }
// const add=function(a,b,callback){
//     var result=a+b;
//     console.log("function is running",result);
//     callback();
// }
// add(2,4,callback)


// const add=function(a,b,callback){
//     var result=a+b;
//     console.log("function is running",result);
//     callback();
// }
// add(2,3,()=>console.log("hello word"))
// add(2,4,function(){
//     console.log("add function")
// })



// @@@@@@@file sytem and os module ########

// var fs=require("fs");
// var os=require("os")
// var user=os.userInfo();
// console.log(user.username)

// fs.appendFile("greeting.txt","hi"+user.username,()=>{
//     console.log("file is creted")
// })

// const notes=require("./note")
// var age=notes.age;
// var res=notes.addNumber("res is:",age+80,10)
// console.log(age);
// console.log(res)


// const lodsh=require("lodsh")
// var data=["person","person",1,2,1,2,"name","age","2"];
// var filter=priya.uniq(data);
// console.log(filter)