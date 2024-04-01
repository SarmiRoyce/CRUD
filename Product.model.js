const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    productID: { type: String, required: true, unique:true },
    productName: { type: String, required: true },
    productCategory: { type: String, required: true },
    productPrice: { type: Number, required: true },
});

const Product = mongoose.model('Product', productModel);
module.exports = Product;