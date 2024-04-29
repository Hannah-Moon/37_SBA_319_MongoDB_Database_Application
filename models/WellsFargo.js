const mongoose = require('mongoose');

const wellsFargoSchema = new mongoose.Schema({
    nameOfBank: {
        type: String,
        required: true,
    }, 
    nameOfCard: {
        type: String,
        required: true,
    },
    annualFee: {
        type: Number,
        required: true,
    },
    rewardRate: {
        type: Number,
        required: true,
    },
    introOffer: {
        type: Number,
        required: true,
    },
    recommendedCreditScore: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('WellsFargo', wellsFargoSchema);