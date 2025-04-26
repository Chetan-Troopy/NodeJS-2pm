const express = require('express');

const app = express();

const PORT = 8000;


// Custom Middleware : Check for secret Key 

function checkAuth(req, res, next) {

    const secretKey = req.query.key;

    if (secretKey === "12345") {
        console.log("User Authenticated");
        next();
    }

    else{
        res.status(401).send("Unauthorized Access - Invalid Key")
    }
    
}


// Apply Middleware for /dashboard routing 

app.get('/dashboard', checkAuth, (req, res) => {
    res.send("Welcome to The Dashboard")
})



// Default Route for Home Page 


app.get('/', (req, res) => {
    res.send("home Page")
})




// Server Start 

app.listen(PORT, () => {
    console.log("Serevr is Started");
    
})