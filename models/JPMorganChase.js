const mongoose = require('mongoose');

const JPMorganChaseSchema = new mongoose.Schema({
    nameOfBank: String, 
    nameOfCard: String,
    annualFee: String,
    rewardRate: String,
    introOffer: String,
    recommendedCreditScore: String, 
});

module.exports = mongoose.model('JPMorganChase', JPMorganChaseSchema);