const express = require('express');
const app = express();
const PORT = 8000;



app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');


// Dynamic Data 

let students = [
    {id: 1, name : "Rahul"},
    {id: 2, name : "Krish"}
]



// Home - List students 


app.get('/', (req, res) => {
    res.redirect('/students');
})


app.get('/students', (req, res) => {
    res.render('home', {students});
})


// New students form 


app.get('/students/new', (req, res) =>{
    res.render('new');
})


// Add students 

app.post('/students', (req, res) =>{
    const newStudent = {
        id : students.length ? students[students.length - 1].id + 1 : 1,
        name : req.body.name  
    }
    students.push(newStudent);
    res.redirect('/students');
});


// Edit students Form 


app.get('/students/:id/edit', (req, res) =>{
    const student = students.find(s  => s.id == req.params.id);
    if (!student) return res.status(404).send("Student Not Found");
    res.render('edit', {student});

})






// Update students



app.post('/students/:id/update', (req, res) =>{
    const student = students.find(s  => s.id == req.params.id);
    if (!student) return res.status(404).send("Student Not Found");
    student.name = req.body.name;

    res.redirect('/students');

})





// Delete students



app.post('/students/:id/delete', (req, res) => {
    students = students.filter(s  => s.id != req.params.id);
    res.redirect('/students');

})





app.listen(PORT, () => {
    console.log("Server Is running....");
    
})