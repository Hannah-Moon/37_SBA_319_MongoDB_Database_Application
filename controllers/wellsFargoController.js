const WellsFargo = require("../models/wellsFargo.js");

// API: Get all Wells Fargo's Cards
const fetchAllWellsFargos = async (req, res) => {
    try {
        const allWellsFargos = await WellsFargo.find();
        res.json({ WellsFargo: allWellsFargos });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// API: Get a Wells Fargo's Card by ID
const fetchWellsFargo = async (req, res) => {
    const WellsFargoId = req.params.id;
    const findWellsFargo = await WellsFargo.findById(WellsFargoId);
    res.json({ WellsFargo: findWellsFargo });
};

// API: Create a new Wells Fargo's Card
const createWellsFargoCard = async (req, res) => {
    const { nameOfBank, nameOfCard, annualFee, rewardRate, introOffer, recommendedCreditScore } = req.body;

    const newWellsFargo = await WellsFargo.create({
        nameOfBank,
        nameOfCard,
        annualFee,
        rewardRate,
        introOffer,
        recommendedCreditScore
    });

    res.json({ WellsFargo: newWellsFargo });
};

// API: Update Wells Fargo's Card Information 
const updateWellsFargoCard = async (req, res) => {
    const WellsFargoId = req.params.id;
    const { nameOfBank, nameOfCard, annualFee, rewardRate, introOffer, recommendedCreditScore } = req.body;

    const updatedWellsFargo = await WellsFargo.findByIdAndUpdate(WellsFargoId, {
        nameOfBank,
        nameOfCard,
        annualFee,
        rewardRate,
        introOffer,
        recommendedCreditScore
    }, { new: true });

    res.json({ WellsFargo: updatedWellsFargo });
};

// API: Get Cards with 0 Annual Fee
const getNoAnnualFeeCard = async (req, res) => {
    try {
        const wellsFargos = await WellsFargo.find({ annualFee: 0 });

        if (wellsFargos.length === 0) {
            return res.status(404).json({ error: 'No Cards found' });
        }

        res.json(wellsFargos);
    } catch (error) {
        console.error('Error retrieving cards:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// API: Delete Wells Fargo's Card Information 
const deleteWellsFargoCard = async (req, res) => {
    const WellsFargoId = req.params.id;

    await WellsFargo.deleteOne({ _id: WellsFargoId });

    res.json({ success: "Wells Fargo's Credit Card information has been deleted successfully." });
};

module.exports = {
    fetchAllWellsFargos,
    fetchWellsFargo,
    createWellsFargoCard,
    updateWellsFargoCard,
    getNoAnnualFeeCard,
    deleteWellsFargoCard
};