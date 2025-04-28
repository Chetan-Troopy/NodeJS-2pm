const express = require('express');

const app = express();


// Get Request 

app.get('/', (req, res) =>{
    res.send("Hello, This is Home Page");
})


//Another  Get Request 

app.get('/about', (req, res) =>{
    res.send("Hello, This is About Page");
})

//  Routing Parameters 

app.get('/user/:userId', (req, res) =>{
    const id = req.params.userId
    res.send(`You are looking at user ID : ${id}`);
})

//  Multiple Routing Parameters 

app.get('/product/:category/:productID', (req, res) =>{
    const id = req.params.userId
    const cat = req.params.category
    res.send(`Category: ${cat}, Product ID : ${id}`);
})

//  Query Parameters 

app.get('/search', (req, res) =>{
    const name = req.query.name;
    const type = req.query.type;
    res.send(`Searching for: ${name} in category : ${type}`);
})


// Post Request 


app.post('/contact', (req, res) =>{
    res.send('Contact form Submitted')
})


// Server Listneing 


app.listen(3000, () =>{
    console.log("Server Is Running...");
    
})