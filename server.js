require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connecToDB = require("./config/connectToDB.js");

// Models
const JPMorganChase = require("./models/jpMorganChase.js");
const BankofAmerica = require("./models/bankofAmerica");
const WellsFargo = require("./models/wellsFargo.js");
const CitiBank = require("./models/CitiBank");
const USBank = require("./models/usBank.js");


// Controller 
const JPMC_Controller = require("./controller/jpMorganChaseController.js")
const BoA_Controller = require("./controller/bankofAmericaController.js")
const WF_Controller = require("./controller/wellsFargoController.js")
const CB_Controller = require("./controller/citiBankController.js")
const USB_Controller = require("./controller/usBankController.js")


const cors = require("cors");
const bankofAmerica = require("./models/bankofAmerica");

app.use(express.urlencoded());    /// --> We need to add this line of code everytime to POST the data on POSTMAN. 
app.use(express.json());

app.use(cors());
connecToDB();

app.get("/", (req, res) => {
    res.send("This is a Landing Page");
})

// ------------------------------ [ JPMorgan Chase ]



// ------------------------------ [ Bank of America ]

app.get("/bankofAmericas", bankofAmericaController.fetchAllNotes);

app.get("/bankofAmericas/:id", bankofAmericaController.fetchNote);

app.post("/bankofAmericas", bankofAmericaController.createNote);

app.put("/bankofAmericas/:id", bankofAmericaController.updateNote);

app.delete("/bankofAmericas/:id", bankofAmericaController.deleteNote);


// ------------------------------ [ WellsFargo ]



// ------------------------------ [ Citi Bank ]



// ------------------------------ [ U.S.Bank ]




app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
});