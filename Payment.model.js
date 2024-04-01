const mongoose = require('mongoose');

const paymentModel = new mongoose.Schema({
    paymentID: { type: String, required: true, unique:true },
    paymentType: { type: String, required: true },
    fee: { type: Number, required: true },
});

const Payment = mongoose.model('Payment', paymentModel);
module.exports = Payment;