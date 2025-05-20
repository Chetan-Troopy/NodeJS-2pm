const express = require('express')
const path = require('path')
const multer = require('multer')


const app = express();


// Set up Storage Engine 


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');    // uploads Folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
})


const upload = multer({storage})

// upload endpoint 

app.post('/upload', upload.single('file'), (req, res) => {

    res.json({
        message: 'File Uploaded Successfully',
        file: req.file,
    })
})




// Start Server 


app.listen(3000, () => {
    console.log('Server is Running.....');
    
})