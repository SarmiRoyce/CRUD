const mongoose = require('mongoose');
// const Schema = mongoose.Schema

const userModel = new mongoose.Schema({
    userID: { type: String, required: true, unique:true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique:true }
});

brconst User = mongoose.model('User', userModel);
module.exports = User
