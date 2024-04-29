const CitiBank = require("../models/citiBank.js");

// API: Get all Citi Bank's Cards
const fetchAllCitiBanks = async (req, res) => {
    try {
        const allCitiBanks = await CitiBank.find();
        res.json({ CitiBank: allCitiBanks });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// API: Get a Citi Bank's Card by ID
const fetchCitiBank = async (req, res) => {
    const citiBankId = req.params.id;
    const findCitiBank = await CitiBank.findById(citiBankId);
    res.json({ CitiBank: findCitiBank });
};

// API: Create a new Citi Bank's Card
const createCitiBankCard = async (req, res) => {
    const { nameOfBank, nameOfCard, annualFee, rewardRate, introOffer, recommendedCreditScore } = req.body;

    const newCitiBank = await CitiBank.create({
        nameOfBank,
        nameOfCard,
        annualFee,
        rewardRate,
        introOffer,
        recommendedCreditScore
    });

    res.json({ CitiBank: newCitiBank });
};
  

// API: Update Citi Bank's Card Information 
const updateCitiBankCard = async (req, res) => {
    const citiBankId = req.params.id;
    const { nameOfBank, nameOfCard, annualFee, rewardRate, introOffer, recommendedCreditScore } = req.body;

    const updatedCitiBank = await CitiBank.findByIdAndUpdate(citiBankId, {
        nameOfBank,
        nameOfCard,
        annualFee,
        rewardRate,
        introOffer,
        recommendedCreditScore
    }, { new: true });

    res.json({ CitiBank: updatedCitiBank });
};

// API: Get Cards with 0 Annual Fee
const getNoAnnualFeeCard = async (req, res) => {
    try {
        const citiBanks = await CitiBank.find({ annualFee: 0 });

        if (citiBanks.length === 0) {
            return res.status(404).json({ error: 'No Cards found' });
        }

        res.json(citiBanks);
    } catch (error) {
        console.error('Error retrieving cards:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// API: Delete Citi Bank's Card Information 
const deleteCitiBankCard = async (req, res) => {
    const citiBankId = req.params.id;

    await CitiBank.deleteOne({ _id: citiBankId });

    res.json({ success: "Citi Bank's Credit Card information has been deleted successfully." });
};

module.exports = {
    fetchAllCitiBanks,
    fetchCitiBank,
    createCitiBankCard,
    updateCitiBankCard,
    getNoAnnualFeeCard,
    deleteCitiBankCard
};