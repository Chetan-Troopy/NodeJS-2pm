const express = require('express');
const app =  express();

// Set View engine 


app.set('view engine', 'ejs');


// Home Route


app.get('/', (req, res) =>{
    res.render('home', {companyName : 'Frameboxx IT'});
})


// About Route


app.get('/about', (req, res) =>{
    res.render('about', {
        companyName : 'Frameboxx IT', 
        description : 'We are a Leading IT Insititute and we provide Multiple IT Courses.'});
})



// Services Route


app.get('/services', (req, res) =>{

    const services = ['Web Devlopment', "MERN Stack", "Python", "Java", "Testing"]
    res.render('services', {services});
})



// Server Listen 


app.listen(8000, ()=>{
    console.log("Server Is Running .....");
    
})