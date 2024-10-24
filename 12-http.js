const http=require("http");

const server=http.createServer((req,res)=>{
   if(req.url==='/'){
    res.end("welcome to the homepage");
   }
   else if(req.url==="/about"){
    res.end("This is little about our histroy");
   }
   else{
    res.end(`
        <h1>opppsss url not found</h1>
        <a href='/'>Home page</a>
        `)
   }
})

server.listen(5000);
console.log(server);