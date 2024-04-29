const BankofAmerica = require("../models/bankofAmerica.js");

// API: Get all Bank of America's Cards
const fetchAllBankofAmericas = async (req, res) => {
    try {
        const allBankofAmericas = await BankofAmerica.find();
        res.json({ BankofAmerica: allBankofAmericas });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// API: Get a Bank of America's Card by ID
const fetchBankofAmerica = async (req, res) => {
    const bankofAmericaId = req.params.id;
    const findBankofAmerica = await BankofAmerica.findById(bankofAmericaId);
    res.json({ BankofAmerica: findBankofAmerica });
};

// API: Create a new Bank of America's Card
const createBankofAmericaCard = async (req, res) => {
    const { nameOfBank, nameOfCard, annualFee, rewardRate, introOffer, recommendedCreditScore } = req.body;

    const newBankofAmerica = await BankofAmerica.create({
        nameOfBank,
        nameOfCard,
        annualFee,
        rewardRate,
        introOffer,
        recommendedCreditScore
    });

    res.json({ BankofAmerica: newBankofAmerica });
};

// API: Update Bank of America's Card Information 
const updateBankofAmericaCard = async (req, res) => {
    const bankofAmericaId = req.params.id;
    const { nameOfBank, nameOfCard, annualFee, rewardRate, introOffer, recommendedCreditScore } = req.body;

    const updatedBankofAmerica = await BankofAmerica.findByIdAndUpdate(bankofAmericaId, {
        nameOfBank,
        nameOfCard,
        annualFee,
        rewardRate,
        introOffer,
        recommendedCreditScore
    }, { new: true });

    res.json({ BankofAmerica: updatedBankofAmerica });
};

// API: Get Cards with 0 Annual Fee
const getNoAnnualFeeCard = async (req, res) => {
    try {
        const bankofAmericas = await BankofAmerica.find({ annualFee: 0 });

        if (bankofAmericas.length === 0) {
            return res.status(404).json({ error: 'No Cards found' });
        }

        res.json(bankofAmericas);
    } catch (error) {
        console.error('Error retrieving cards:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// API: Delete Bank of America's Card Information 
const deleteBankofAmericaCard = async (req, res) => {
    const bankofAmericaId = req.params.id;

    await BankofAmerica.deleteOne({ _id: bankofAmericaId });

    res.json({ success: "Bank of America's Credit Card information has been deleted successfully." });
};

module.exports = {
    fetchAllBankofAmericas,
    fetchBankofAmerica,
    createBankofAmericaCard,
    updateBankofAmericaCard,
    getNoAnnualFeeCard,
    deleteBankofAmericaCard
};
