const mongoose = require('mongoose');

const WellsFargoSchema = new mongoose.Schema({
    nameOfBank: String, 
    nameOfCard: String,
    annualFee: String,
    rewardRate: String,
    introOffer: String,
    recommendedCreditScore: String, 
});

module.exports = mongoose.model('WellsFargo', WellsFargoSchema);