const path=require("path");

//platform separator
console.log(path.sep);

//join the path:- joins only the string according to the platforms separator

const filePath=path.join("/content/","subfolder","test.txt");

console.log(filePath);

//joins the path which also include __dirname

const absolutePath=path.resolve(__dirname,"/content/","subfolder","test.txt");

console.log(absolutePath);