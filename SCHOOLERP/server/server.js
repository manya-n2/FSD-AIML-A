//wajsp to create a http server
import https from "http";
const server=https.createServer((req,res)=>{
    const url=req.url;
    if(url=="/" && req.method=="GET"){
        res.write("Home Page");
    }
    else if(url=="/about" && req.method=="PUT" ){
        res.write("About Page ");
    }
    else if(url=="/contact"){
        res.write("Contact Page ");
    }
    else{
        res.write("Error Page")
    }
    res.end();//now understands that the response has ended

})
server.listen(5001,()=>{
    console.log("server running on port 5001")
})
