const mongoose = require('mongoose');
// const Schema = mongoose.Schema

const reviewModel = new mongoose.Schema({
    reviewID: { type: String, required: true, unique:true },
    reviewDescription: { type: String, required: true },
    userId: { type: Number, required: true, unique:true },
});

const Review = mongoose.model('Review', reviewModel);
module.exports = Review;