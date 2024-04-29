const BankofAmerica = require("../models/bankofAmerica.js")

// All Bank of America's Cards
const fetchAllBankofAmericas = async (req, res) => {
    try{
        const allBankofAmericas = await BankofAmerica.find();
        res.json({ BankofAmerica: allBankofAmericas });
    } catch (error) {
        res.status(500).json({ error: 'Server error'});
    }
};

const fetchBankofAmerica = async (req, res) => {
  const bankofAmericaId = req.params.id;
  const findBankofAmerica = await BankofAmerica.findById(bankofAmericaId);
  res.json({ BankofAmerica: findBankofAmerica });
};

// Create a new card
const createBankofAmerica = async (req, res) => {
  console.log(`BODY: ${req.body}`);
  const nameOfBank = req.body.nameOfBank;
  const nameOfCard = req.body.nameOfCard;
  const annualFee = req.body.annualFee;
  const rewardRate = req.body.rewardRate;
  const introOffer = req.body.introOffer;
  const recommendedCreditScore = req.body.recommendedCreditScore;

  const newBankofAmerica = await BankofAmerica.create({
    nameOfBank: nameOfBank, 
    nameOfCard: nameOfCard,
    annualFee: annualFee,
    rewardRate: rewardRate,
    introOffer: introOffer,
    recommendedCreditScore: recommendedCreditScore,    
  });
  res.json({ BankofAmerica: newBankofAmerica });
};

// Update Card Information 
const updateBankofAmerica = async (req, res) => {
  const BankofAmericaId = req.params.id;
  const { nameOfBank, nameOfCard, annualFee, rewardRate, introOffer, recommendedCreditScore } = req.body;
  const BankofAmerica = await BankofAmerica.findByIdAndUpdate(BankofAmericaId, {
    nameOfBank: nameOfBank, 
    nameOfCard: nameOfCard,
    annualFee: annualFee,
    rewardRate: rewardRate,
    introOffer: introOffer,
    recommendedCreditScore: recommendedCreditScore,
  });
  const updatedBankofAmerica = await BankofAmerica.findById(BankofAmericaId);
  res.json({ BankofAmerica: updatedBankofAmerica });
};

// Get Card Name by 0 Annual Fee
const getNoAnnualFeeCard = async (req, res) => {
    try {
        const { annualFee = 0 } = req.params;
        console.log('No Annual Fee Card:', annualFee);

        const bankofAmericas = await BankofAmerica.find({ annualFee: 0 });
        console.log('Card:', nameOfCard);

        if (bankofAmericas.length === 0) {
            return res.status(404).json({ error: 'No Cards found' });
        }

        res.json(bankofAmericas);
        
    } catch (error) {
        console.error('Error retrieving cards:', error);
        res.status(500).json({ error: 'Server error' });
    }
};



// Delete Card Information 
const deleteBankofAmerica = async(req, res) => {
    const BankofAmericaId = req.params.id
  await BankofAmerica.deleteOne({
    id: BankofAmericaId
  })
  res.json({success: "Bank of America's Credit Card information has been deleted successfully."})
}

module.exports = {
    fetchAllBankofAmericas,
    fetchBankofAmerica,
    createBankofAmerica,
    updateBankofAmerica,
    deleteBankofAmerica
}