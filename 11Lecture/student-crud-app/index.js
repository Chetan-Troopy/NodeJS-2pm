const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/Student');
const app = express();
const PORT = 8000;


// Dynamic Data 

mongoose.connect('mongodb://localhost:27017/studentDB')
    .then(() => console.log("MongoDb Connected"))
    .catch(err => console.log(err));


app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');


// Home - List all students 


app.get('/', async (req, res) => {
    const students = await Student.find();
    res.render('home', {students});
});


// Add New students form 


app.get('/add', (req, res) =>{
    res.render('add');
})


// Add students Post

app.post('/add', async (req, res) =>{
   
    const {name, email, course} = req.body
    await Student.create({name, email, course})
    res.redirect('/');
});


// Edit students Form 


app.get('/edit/:id', async (req, res) =>{

    const student = await Student.findById(req.params.id)
    res.render('edit', {student});

})


// Update students



app.post('/edit/:id', async (req, res) =>{
    const {name, email, course} = req.body
await Student.findByIdAndUpdate(req.params.id, {name, email, course})
    res.redirect('/');

})





// Delete students



app.get('/delete/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.redirect('/');

})





app.listen(PORT, () => {
    console.log("Server Is running....");
    
})