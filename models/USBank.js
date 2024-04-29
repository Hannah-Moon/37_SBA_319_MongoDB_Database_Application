const mongoose = require('mongoose');

const USBankSchema = new mongoose.Schema({
    nameOfBank: String, 
    nameOfCard: String,
    annualFee: String,
    rewardRate: String,
    introOffer: String,
    recommendedCreditScore: String, 
});

module.exports = mongoose.model('USBank', USBankSchema);