const USBank = require("../models/usBank.js");

// API: Get all U.S. Bank's Cards
const fetchAllUSBanks = async (req, res) => {
    try {
        const allUSBanks = await USBank.find();
        res.json({ USBank: allUSBanks });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// API: Get a U.S. Bank's Card by ID
const fetchUSBank = async (req, res) => {
    const USBankId = req.params.id;
    const findUSBank = await USBank.findById(USBankId);
    res.json({ USBank: findUSBank });
};

// API: Create a new U.S. Bank's Card
const createUSBankCard = async (req, res) => {
    const { nameOfBank, nameOfCard, annualFee, rewardRate, introOffer, recommendedCreditScore } = req.body;

    const newUSBankCard = await USBank.create({
        nameOfBank,
        nameOfCard,
        annualFee,
        rewardRate,
        introOffer,
        recommendedCreditScore
    });

    res.json({ USBank: newUSBankCard });
};

// API: Update U.S. Bank's Card Information 
const updateUSBankCard = async (req, res) => {
    const USBankId = req.params.id;
    const { nameOfBank, nameOfCard, annualFee, rewardRate, introOffer, recommendedCreditScore } = req.body;

    const updatedUSBankCard = await USBank.findByIdAndUpdate(USBankId, {
        nameOfBank,
        nameOfCard,
        annualFee,
        rewardRate,
        introOffer,
        recommendedCreditScore
    }, { new: true });

    res.json({ USBank: updatedUSBankCard });
};

// API: Get Cards with 0 Annual Fee
const getNoAnnualFeeCard = async (req, res) => {
    try {
        const usBankCards = await USBank.find({ annualFee: 0 });

        if (usBankCards.length === 0) {
            return res.status(404).json({ error: 'No Cards found' });
        }

        res.json(usBankCards);
    } catch (error) {
        console.error('Error retrieving cards:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// API: Delete U.S. Bank's Card Information 
const deleteUSBankCard = async (req, res) => {
    const USBankId = req.params.id;

    await USBank.deleteOne({ _id: USBankId });

    res.json({ success: "U.S. Bank's Credit Card information has been deleted successfully." });
};

module.exports = {
    fetchAllUSBanks,
    fetchUSBank,
    createUSBankCard,
    updateUSBankCard,
    getNoAnnualFeeCard,
    deleteUSBankCard
};