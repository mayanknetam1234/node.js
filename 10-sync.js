const {readFileSync , writeFileSync}= require("fs");
// This is destructuring assignment. It allows you to extract specific properties (in this case, functions) 
// from an object (the fs module) and assign them to variables with the same names.
console.log("start");
//reading a file 
 const first=readFileSync("./content/first.txt","utf-8");
 const second=readFileSync("./content/second.txt","utf-8");


 //writing a file
 writeFileSync("./content/result-sync.txt",`hii this is the result of sync, ${first}, ${second}`,{flag:'a'});
 console.log("task is finished");
 console.log("starting the next tast");