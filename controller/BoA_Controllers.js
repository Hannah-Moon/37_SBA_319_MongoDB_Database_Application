const Account = require("../models/BankofAmerica");

// All Bank of America's Cards
const fetchAllBankofAmericas = async (req, res) => {
    try{
        const allBankofAmericas = await BankofAmerics.find();
        res.json({ BankofAmerica: allBankofAmericas });
    } catch (error) {
        res.status(500).json({ error: 'Server error'});
    }
};

const fetchAccount = async (req, res) => {
  const accountId = req.params.id;
  const findAccount = await Account.findById(accountId);
  res.json({ Account: findAccount });
};


const createAccount = async (req, res) => {
  console.log(`BODY: ${req.body}`);
  const accountNumber = req.body.accountNumber;
  const routingNumber = req.body.routingNumber;
  const newAccount = await Account.create({
    accountNumber: accountNumber, 
    routingNumber: routingNumber,
  });
  res.json({ Account: newAccount });
};


const updateAccount = async (req, res) => {
  const AccountId = req.params.id;
  const { name, email } = req.body;
  const account = await account.findByIdAndUpdate(accountId, {
    accountNumber: accountNumber, 
    routingNumber: routingNumber,
  });
  const updatedAccount = await Account.findById(accountId);
  res.json({ account: updatedAccount });
};

const deleteAccount = async(req, res) => {
    const accountId = req.params.id
  await Account.deleteOne({
    id: accountId
  })
  res.json({success: "Bank of America's Credit Card information has been deleted successfully."})
}

module.exports = {
    fetchAllAccounts,
    fetchAccount,
    createAccount,
    updateAccount,
    deleteAccount
}