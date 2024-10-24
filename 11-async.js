//synchrounous is blocking
// asynchrounous is non-blocking

const {readFile , writeFile}=require("fs");
console.log("starting the task");
readFile("./content/first.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile("./content/second.txt","utf-8",(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile("./content/result-async.txt",`hiiii how are you, ${first}, ${second}.`,{flag:"a"},(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
            console.log("task is finished");
        } )
    })
})
console.log("starting the next task");