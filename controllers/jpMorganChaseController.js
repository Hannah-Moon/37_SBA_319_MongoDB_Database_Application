const JPMorganChase = require("../models/jpMorganChase.js");

// API: Get all JP Morgan Chase's Cards
const fetchAllJPMorganChases = async (req, res) => {
    try {
        const allJPMorganChases = await JPMorganChase.find();
        res.json({ JPMorganChase: allJPMorganChases });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// API: Get a JP Morgan Chase's Card by ID
const fetchJPMorganChase = async (req, res) => {
    const jpMorganChaseId = req.params.id;
    const findJPMorganChase = await JPMorganChase.findById(jpMorganChaseId);
    res.json({ JPMorganChase: findJPMorganChase });
};

// API: Create a new JP Morgan Chase's Card
const createJPMorganChaseCard = async (req, res) => {
    const { nameOfBank, nameOfCard, annualFee, rewardRate, introOffer, recommendedCreditScore } = req.body;

    const newJPMorganChase = await JPMorganChase.create({
        nameOfBank,
        nameOfCard,
        annualFee,
        rewardRate,
        introOffer,
        recommendedCreditScore
    });

    res.json({ JPMorganChase: newJPMorganChase });
};
  

// API: Update JP Morgan Chase's Card Information 
const updateJPMorganChaseCard = async (req, res) => {
    const jpMorganChaseId = req.params.id;
    const { nameOfBank, nameOfCard, annualFee, rewardRate, introOffer, recommendedCreditScore } = req.body;

    const updatedJPMorganChase = await JPMorganChase.findByIdAndUpdate(jpMorganChaseId, {
        nameOfBank,
        nameOfCard,
        annualFee,
        rewardRate,
        introOffer,
        recommendedCreditScore
    }, { new: true });

    res.json({ JPMorganChase: updatedJPMorganChase });
};

// API: Get Cards with 0 Annual Fee
const getNoAnnualFeeCard = async (req, res) => {
    try {
        const jpMorganChase = await JPMorganChase.find({ annualFee: 0 });

        if (jpMorganChase.length === 0) {
            return res.status(404).json({ error: 'No Cards found' });
        }

        res.json(jpMorganChase); // Corrected variable name
    } catch (error) {
        console.error('Error retrieving cards:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// API: Delete JP Morgan Chase's Card Information 
const deleteJPMorganChaseCard = async (req, res) => {
    const jpMorganChaseId = req.params.id; // Corrected variable name

    try {
        await JPMorganChase.deleteOne({ _id: jpMorganChaseId });
        res.json({ success: "JP Morgan Chase's Credit Card information has been deleted successfully." });
    } catch (error) {
        console.error('Error deleting JP Morgan Chase card:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    fetchAllJPMorganChases,
    fetchJPMorganChase,
    createJPMorganChaseCard,
    updateJPMorganChaseCard,
    getNoAnnualFeeCard,
    deleteJPMorganChaseCard
};
