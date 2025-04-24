const express = require('express');

const app = express();


const PORT = 8000;

app.get("/", (req, res)=>{
    return res.send("Home Page");
})
app.get("/about", (req, res)=>{
    return res.send("About Page");
})
app.get('/user/:id', (req, res) =>{
    const userId = req.params.id;
    res.send(`User Id is : ${userId}`);
})

app.get('/search', (req,res)=>{
    const keyword =req.query.q;
    const category =req.query.cat;
    res.send(`Namaste "${keyword}" in a category "${category}"`)


    // const fname =req.query.fname;
    // const lname =req.query.lname;
    // res.send(`Namaste ${fname} ${lname}`)
})


// Start Server 

app.listen(PORT, () => {
    console.log(`The Server Is Started Successfully on PORT : ${PORT}`);
    
})
