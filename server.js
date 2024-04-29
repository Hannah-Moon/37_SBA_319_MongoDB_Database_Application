require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connecToDB = require("./config/connectToDB.js");

// Models
const JPMorganChase = require("./models/JPMorganChase");
const BankofAmerica = require("./models/BankofAmerica");
const WellsFargo = require("./models/WellsFargo");
const CitiBank = require("./models/CitiBank");
const USBank = require("./models/USBank");


// Controller 
const JPMC_Controller = require("./controller/JPMC_Controllers.js")
const BoA_Controller = require("./controller/BoA_Controllers.js")
const WF_Controller = require("./controller/WF_Controllers.js")
const CB_Controller = require("./controller/CB_Controllers.js")
const USB_Controller = require("./controller/USB_Controllers.js")


const cors = require("cors");

app.use(express.urlencoded());    /// --> We need to add this line of code everytime to POST the data on POSTMAN. 
app.use(express.json());

app.use(cors());
connecToDB();

app.get("/", (req, res) => {
    res.send("This is a Landing Page");
})

// ------------------------------ [ JPMorgan Chase ]

app.get("/jpmcs", JPMC_Controller.fetchAllNotes);

app.get("/jpmcs/:id", JPMC_Controller.fetchNote);

app.post("/jpmcs", JPMC_Controller.createNote);

app.put("/jpmcs/:id", JPMC_Controller.updateNote);

app.delete("/jpmcs/:id", JPMC_Controller.deleteNote);


// ------------------------------ [ Bank of America ]



// ------------------------------ [ WellsFargo ]



// ------------------------------ [ Citi Bank ]



// ------------------------------ [ U.S.Bank ]




app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
});