const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
})


// Hashing Password

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next();
}

)


// Matching Password 

userSchema.methods.matchPassword = function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password)
}