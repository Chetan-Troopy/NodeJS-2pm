const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const protect = require('./middleware/authMiddleware'); 



dotenv.config();
connectDB();


const app = express();


app.use(express.json());


app.use('/api/auth', authRoutes)


app.get('/api/protected', protect, (req, res) => {
    res.json({message: `Hello ${req.user.name}, this is Protected`})
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running....")
)