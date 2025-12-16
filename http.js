const http = require("http")
http.createServer((req,res)=>{

    const path = req.url
    const method = req.method

    if(path.includes('/abc') && method == "GET"){
        res.write("abc file")
        res.end()
    }
    else{
        res.write("home file")
        res.end()
    }
}).listen(3000)

console.log("API running at http://localhost:3000");