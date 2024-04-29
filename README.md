# SBA 319: MongoDB Database Application <br/>
### : Is this the best credit card for me in 2024?

<div align="center">
<img width="500" alt="image" src="assets/creditCard.jpg"></div>

## Problem to solve 🎯

> According to The New York Times, there is a significant inequality present in credit card rewards programs, where wealthy individuals enjoy luxurious perks while the less affluent bear the financial burden, perpetuating economic disparity. These disparities can indeed exacerbate the economic gap between affluent individuals who benefit from lavish perks and lower-income consumers who ultimately subsidize these rewards. We must advocate for reforms such as reducing interchange fees and promoting competition to ensure a fairer distribution of rewards and economic benefits. As a first step, I would analyze the current credit card rewards landscape in 2024, comparing each credit card's rewards, annual fees, and APIs from the top five banks in the U.S. This would enable middle or lower-class consumers to make informed decisions to maximize the benefits available to them when considering opening credit cards.

## Summary of the Top 5 Banks in the U.S. 🏦
| Ranking | Bank            | Head Quarter              | Total Assets  | Branches |
| :-----: | :-------------- | :------------------------ | :------------ | :------- |
| 1       | JPMorgan Chase  | New York, NY              | $3.3 trillion | 4,800+   |
| 2       | Bank of America | Charlotte, North Carolina | $2.4 trillion	| 3,700+   |
| 3       | Wells Fargo     | San Francisco, California | $1.7 trillion | 4,400+   |
| 4       | Citibank        | New York, NY              | $1.6 trillion | 650+     |
| 5       | U.S.Bank        | Minneapolis, Minnesota    | $657 billion  | 2,300+   |


## Inspiration and Reference 🔍
> - [Jae Bratton, Nerdwallet, "15 Best Cash Back Credit Cards of May 2024"](https://www.nerdwallet.com/best/credit-cards/cash-back)
> - [Jeff Cotrupe, MongoDB, "Next Generation Mobile Banking"](https://www.mongodb.com/blog/post/next-generation-mobile-bank-current-using-mongodb-atlas-google-cloud-make-financial-services-accessible-affordable-all)
> - [Comparecredit, "Best Cash Back Credit Cards of April 2024"](https://www.comparecredit.com/credit-cards/best/cash-back/?utm_source=adwords&utm_campaign=9123840123&ad_group_id=97900334091&utm_content=643438196853&utm_medium=search&acquisition=prospect&ad_position=&network=g&ad_extension_id=&placement=&geolocation=9005864&kw=best%20cash%20back%20credit%20cards%202024&kwid=kwd-1929367132042&kwmt=e&product=credit_cards&glcid=CjwKCAjw57exBhAsEiwAaIxaZlfPWR-C-GeA-CWzFxZnUFve4xmce_waoeAOdSYlIN4rQcW13QOE1xoCvQYQAvD_BwE&gclid=CjwKCAjw57exBhAsEiwAaIxaZlfPWR-C-GeA-CWzFxZnUFve4xmce_waoeAOdSYlIN4rQcW13QOE1xoCvQYQAvD_BwE)
> - [Chenzi Xu and Jeffrey Reppucci, “The Dirty Little Secret of Credit Card Rewards Programs.” The New York Times, March 4, 2023](https://www.nytimes.com/2023/03/04/opinion/credit-card-rewards-points-poor-interchange-fees.html#:~:text=The%20poor%20are%20much%20less,qualify%20for%20a%20premium%20card.)
> - [Cassidy Horton and Lauren Graves, Forbes, "Largest Banks In The U.S. 2024"](https://www.forbes.com/advisor/banking/largest-banks-in-the-us/)


</div>

## Development Time 👩🏻‍💻
> **Computation:** 2024.04.27-28.


## Live Demo 🎬
> **Please click this link** :


## Tools 🛠️
> ### Development
> ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
> ![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
> ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
> ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
> ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
> ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
> ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
> ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
> ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white)

> ### Environment
> ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
> ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
> ![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             



## Key Feature 📦
> **- Users can pull zero annual fee credit card.** <br>

---
## API Documentation 🔗
> This API provides endpoints to manage top five banks in the U.S. credit card information.

### Create (POST)
> - **Endpoint**: `/api/nameofbank/cards`
> - **Description**: Create a new credit card with the provided data.

### Read (GET)
> #### Retrieve All Credit Cards
> - **Endpoint**: `/api/nameofbank/cards`
> - **Description**: Retrieve a list of all credit cards.

> #### Retrieve a Specific BCredit Card
> - **Endpoint**: `/api/nameofbank/cards/:id`
> - **Description**: Retrieve a specific credit card by its ID.

> #### Retrieve Credit Cards with 0 Annual Fee
> - **Endpoint**: `/api/nameofbank/cards/annual-fee/0`
> - **Description**: Retrieve credit cards with no annual fee.

### Update (PUT)
> - **Endpoint**: `/api/nameofbank/cards/:id`
> - **Description**: Update an existing credit card by its ID with the provided data.

### Delete (DELETE)
> - **Endpoint**: `/api/nameofbank/cards/:id`
> - **Description**: Delete a credit card by its ID.

## Requirement ✅

| Status    | Requirement                  | Weight    | 
|-----------|------------------------------|-----------|
|:white_check_mark:| Use at least three different data collections within the database (such as users, posts, or comments).| 5% |
|:white_check_mark:| Utilize reasonable data modeling practices. | 10% |
|:white_check_mark:| Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database. | 10% |
|:white_check_mark:| Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request. | 10% |
|:white_check_mark:| Create GET routes for all data that should be exposed to the client. | 5% |
|:white_check_mark:| Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request. | 10% |
|:white_check_mark:| Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request. | 10% |
|:white_check_mark:| Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request. | 10% |
|:white_check_mark:| Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable. | 5% |
|:white_check_mark:| Include sensible MongoDB data validation rules for at least one data collection. | 5% |
|:white_check_mark:| Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection. | 5% |
|:white_check_mark:| Utilize reasonable code organization practices. | 5% |
|:white_check_mark:| Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). | 10% |
|:white_check_mark:| Commit frequently to the git repository. | 5% |
|:white_check_mark:| Level of effort displayed in creativity and user experience. | 5% |

## Bonus 🎁

| Status    | Requirement                  | Weight    | 
|-----------|------------------------------|-----------|
|:white_check_mark:| Use Mongoose to implement your application. | +1 |

