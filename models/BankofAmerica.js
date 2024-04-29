const mongoose = require('mongoose');

const BankofAmericaSchema = new mongoose.Schema({
    nameOfBank: String, 
    nameOfCard: String,
    annualFee: String,
    rewardRate: String,
    introOffer: String,
    recommendedCreditScore: String, 
});

module.exports = mongoose.model('BankofAmerica', BankofAmericaSchema);