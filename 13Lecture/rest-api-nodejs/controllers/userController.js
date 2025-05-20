const User = require('../models/User');

//  Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Create a user
exports.createUser = async (req, res) => {
  try{

    const { name, email, password } = req.body;
    
    
    if(!name || !email || !password){
      return res.status(400).json({message: "all fields are required"})
    }
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  }catch(error){
    console.log(error.message)
    res.status(500).json({message: 'server Error'})
  }
};



// Update a User 

// Delete a User 
