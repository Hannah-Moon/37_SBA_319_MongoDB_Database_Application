require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connecToDB = require("./config/connectToDB.js");

// Models
const JPMorganChase = require("./models/jpMorganChase.js");
const BankofAmerica = require("./models/BankofAmerica");
const WellsFargo = require("./models/wellsFargo.js");
const CitiBank = require("./models/CitiBank");
const USBank = require("./models/usBank.js");


// Controller 
const JPMC_Controller = require("./controller/jpMorganChaseControllers.js")
const BoA_Controller = require("./controller/bankofAmerica_Controllers.js")
const WF_Controller = require("./controller/wellsFargoControllers.js")
const CB_Controller = require("./controller/citiBankControllers.js")
const USB_Controller = require("./controller/usBankControllers.js")


const cors = require("cors");

app.use(express.urlencoded());    /// --> We need to add this line of code everytime to POST the data on POSTMAN. 
app.use(express.json());

app.use(cors());
connecToDB();

app.get("/", (req, res) => {
    res.send("This is a Landing Page");
})

// ------------------------------ [ JPMorgan Chase ]

// app.get("/jpmcs", JPMC_Controller.fetchAllNotes);

// app.get("/jpmcs/:id", JPMC_Controller.fetchNote);

// app.post("/jpmcs", JPMC_Controller.createNote);

// app.put("/jpmcs/:id", JPMC_Controller.updateNote);

// app.delete("/jpmcs/:id", JPMC_Controller.deleteNote);


// ------------------------------ [ Bank of America ]



// ------------------------------ [ WellsFargo ]



// ------------------------------ [ Citi Bank ]



// ------------------------------ [ U.S.Bank ]




app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
});