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
const jpMorganChaseController = require("./controller/jpMorganChaseController.js");
const bankofAmericaController = require("./controller/bankofAmericaController.js");
const wellsFargoController = require("./controller/wellsFargoController.js");
const citiBankController = require("./controller/citiBankController.js");
const usBankController = require("./controller/usBankController.js");



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



// ------------------------------ [ Bank of America ]

app.get("/bankofAmericas", bankofAmericaController.fetchAllBankofAmericas);
app.get("/bankofAmericas/:id", bankofAmericaController.fetchBankofAmerica);
app.post("/bankofAmericas", bankofAmericaController.createBankofAmerica);
app.put("/bankofAmericas/:id", bankofAmericaController.updateBankofAmerica);
app.delete("/bankofAmericas/:id", bankofAmericaController.deleteBankofAmerica);


// ------------------------------ [ WellsFargo ]



// ------------------------------ [ Citi Bank ]



// ------------------------------ [ U.S.Bank ]




app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
});