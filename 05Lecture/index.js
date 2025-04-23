const http = require('http');
const { log } = require('util');
const fs = require('fs');


const PORT = 8000;

const myServer = http.createServer((req, res)=> {

    const log = `${Date.now()} : ${req.url} New Request Recevied\n`

    fs.appendFile("./log.txt", log,  (err, data) => {
        switch (req.url) {
            case '/': res.end("This is Home Page")
                
                break;
            case '/about': res.end("This is About Page")
                
                break;
            case '/team': res.end("This is Team Page")
                
                break;
        
            default: res.end("404 Error!")
                break;
        }
    })



    // res.end("<h1>Namaste, We are Learning Custom Server using HTTP Module</h1>")
}) 




// Start Server 

myServer.listen(PORT, () => {
    console.log(`The Server Is Started Successfully on PORT : ${PORT}`);
    
})
