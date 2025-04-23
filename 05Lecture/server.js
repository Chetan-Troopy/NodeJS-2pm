const http = require('http');
const { log } = require('util');
const fs = require('fs');
const path = require('path');


const PORT = 8000;

const myServer = http.createServer((req, res)=> {

let filePath = '';
  

if (req.url === '/') {
    filePath = path.join(__dirname, 'index.html');
} else if(req.url === '/about') {
    filePath = path.join(__dirname, 'about.html');
}
else{
    filePath = path.join(__dirname, '404.html');

}

fs.readFile(filePath, (err, data) => {
    if (err) {
        res.writeHead('500');
        res.readableEnded('Server error!');
        
    } else {
        res.writeHead("200", {'content-type': 'text/html'});
        res.end(data)
    }
})


}) 




// Start Server 

myServer.listen(PORT, () => {
    console.log(`The Server Is Started Successfully on PORT : ${PORT}`);
    
})
