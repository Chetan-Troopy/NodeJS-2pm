const express = require('express');

const app = express();

const PORT = 8000;


// Logger Middleware 

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method}  ${req.url}`);
    next();
    
})


// Parse JSON 

app.use(express.json());


app.get('/', (req, res) => {

    res.send("Hello Middleware")
})








// Server Listen 

app.listen(PORT, () => {
    console.log("Serevr is Started");
    
})