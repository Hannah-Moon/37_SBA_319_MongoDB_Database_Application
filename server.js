// Load variables from .env
require("dotenv").config();

// Import express 
const express = require("express");

// Create express instance
const app = express();

// Set port number
const PORT = process.env.PORT || 3000;

// Import function to connect to DB
const connecToDB = require("./config/connectToDB.js");

// Import CORS middleware
const cors = require("cors");

// app.use(express.urlencoded());    /// --> We need to add this line of code everytime to POST the data on POSTMAN. 

// Parse incoming request bodies in JSON format
app.use(express.json());

// Import CORS middleware
app.use(cors());

// Connect to DB
connecToDB();

app.get("/", (req, res) => {
    res.send("This is a Landing Page");
});

// Models 
const jpMorganChase = require('./models/jpMorganChase.js');
const bankofAmerica = require('./models/bankofAmerica.js');
const wellsFargo = require('./models/wellsFargo.js');
const citiBank = require('./models/citiBank.js');
const usBank = require('./models/usBank.js');

// Controller 
const jpMorganChaseController = require("./controllers/jpMorganChaseController.js");
const bankofAmericaController = require("./controllers/bankofAmericaController.js");
const wellsFargoController = require("./controllers/wellsFargoController.js");
const citiBankController = require("./controllers/citiBankController.js");
const usBankController = require("./controllers/usBankController.js");

// Define routes for a each bank's creddit card
// ------------------------------ [ JPMorgan Chase ]
app.get('/jpmorganchase', jpMorganChaseController.fetchAllJPMorganChases);
app.get('/jpmorganchase/:id', jpMorganChaseController.fetchJPMorganChase);
app.post('/jpmorganchase', jpMorganChaseController.createJPMorganChaseCard);
app.put('/jpmorganchase/:id', jpMorganChaseController.updateJPMorganChaseCard);
app.delete('/jpmorganchase/:id', jpMorganChaseController.deleteJPMorganChaseCard);

// ------------------------------ [ Bank of America ]
app.get('/bankofamerica', bankofAmericaController.fetchAllBankofAmericas);
app.get('/bankofamerica/:id', bankofAmericaController.fetchBankofAmerica);
app.post('/bankofamerica', bankofAmericaController.createBankofAmericaCard);
app.put('/bankofamerica/:id', bankofAmericaController.updateBankofAmericaCard);
app.delete('/bankofamerica/:id', bankofAmericaController.deleteBankofAmericaCard);

// ------------------------------ [ WellsFargo ]
app.get('/wellsfargo', wellsFargoController.fetchAllWellsFargos);
app.get('/wellsfargo/:id', wellsFargoController.fetchWellsFargo);
app.post('/wellsfargo', wellsFargoController.createWellsFargoCard);
app.put('/wellsfargo/:id', wellsFargoController.updateWellsFargoCard);
app.delete('/wellsfargo/:id', wellsFargoController.deleteWellsFargoCard);

// ------------------------------ [ Citi Bank ]
app.get('/citibank', citiBankController.fetchAllCitiBanks);
app.get('/citibank/:id', citiBankController.fetchCitiBank);
app.post('/citibank', citiBankController.createCitiBankCard);
app.put('/citibank/:id', citiBankController.updateCitiBankCard);
app.delete('/citibank/:id', citiBankController.deleteCitiBankCard);

// ------------------------------ [ U.S.Bank ]
app.get('/usbank', usBankController.fetchAllUSBanks);
app.get('/usbank/:id', usBankController.fetchUSBank);
app.post('/usbank', usBankController.createUSBankCard);
app.put('/usbank/:id', usBankController.updateUSBankCard);
app.delete('/usbank/:id', usBankController.deleteUSBankCard);


app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
});