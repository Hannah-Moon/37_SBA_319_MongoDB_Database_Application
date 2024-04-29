require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connecToDB = require("./config/connectToDB.js");

// Models
const JPMorganChase = require("./models/jpMorganChase.js");
const BankofAmerica = require("./models/bankofAmerica.js");
const WellsFargo = require("./models/wellsFargo.js");
const CitiBank = require("./models/citiBank.js");
const USBank = require("./models/usBank.js");


// Controller 
const jpMorganChaseController = require("./controllers/jpMorganChaseController.js");
const bankofAmericaController = require("./controllers/bankofAmericaController.js");
const wellsFargoController = require("./controllers/wellsFargoController.js");
const citiBankController = require("./controllers/citiBankController.js");
const usBankController = require("./controllers/usBankController.js");



const cors = require("cors");
// const jpMorganChase = require("./models/jpMorganChase.js);

app.use(express.urlencoded());    /// --> We need to add this line of code everytime to POST the data on POSTMAN. 
app.use(express.json());
app.use(cors());
connecToDB();

app.get("/", (req, res) => {
    res.send("This is a Landing Page");
});


// ------------------------------ [ JPMorgan Chase ]
app.get('/jpMorganChase', jpMorganChaseController.fetchAllJPMorganChases);
app.get('/jpMorganChase/:id', jpMorganChaseController.fetchJPMorganChase);
app.post('/jpMorganChase', jpMorganChaseController.createJPMorganChaseCard);
app.put('/jpMorganChase/:id', jpMorganChaseController.updateJPMorganChaseCard);
app.delete('/jpMorganChase/:id', jpMorganChaseController.deleteJPMorganChaseCard);

// ------------------------------ [ Bank of America ]
app.get('/bankofAmerica', bankofAmericaController.fetchAllBankofAmericas);
app.get('/bankofAmerica/:id', bankofAmericaController.fetchBankofAmerica);
app.post('/bankofAmerica', bankofAmericaController.createBankofAmericaCard);
app.put('/bankofAmerica/:id', bankofAmericaController.updateBankofAmericaCard);
app.delete('/bankofAmerica/:id', bankofAmericaController.deleteBankofAmericaCard);

// ------------------------------ [ WellsFargo ]
app.get('/wellsFargo', wellsFargoController.fetchAllWellsFargos);
app.get('/wellsFargo/:id', wellsFargoController.fetchWellsFargo);
app.post('/wellsFargo', wellsFargoController.createWellsFargoCard);
app.put('/wellsFargo/:id', wellsFargoController.updateWellsFargoCard);
app.delete('/wellsFargo/:id', wellsFargoController.deleteWellsFargoCard);

// ------------------------------ [ Citi Bank ]
app.get('/citiBank', citiBankController.fetchAllCitiBanks);
app.get('/citiBank/:id', citiBankController.fetchCitiBank);
app.post('/citiBank', citiBankController.createCitiBankCard);
app.put('/citiBank/:id', citiBankController.updateCitiBankCard);
app.delete('/citiBank/:id', citiBankController.deleteCitiBankCard);

// ------------------------------ [ U.S.Bank ]
app.get('/usBank', usBankController.fetchAllUSBanks);
app.get('/usBank', usBankController.fetchUSBank);
app.post('/usBank', usBankController.createUSBankCard);
app.put('/usBank', usBankController.updateUSBankCard);
app.delete('/usBank', usBankController.deleteUSBankCard);


app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
});