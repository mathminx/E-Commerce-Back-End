# E-Commerce-Back-End

This application functions as the back end of an e-commerce site. It is a command line application comprised of an Express.js API that uses Sequelize to interact with a MySQL database. It uses the dotenv package to store sensitive data using environment variables (MySQL username, password, and database name).


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)


## Installation
  
1. On the command line, run `npm install` to load the dependencies.
2. Log in to mySQL by entering `mysql -u root -p`. Enter your password when prompted.
3. Create the database schema by entering `SOURCE db/schema.sql; then, access the database by entering `USE ecommerce_db`.
4. On the command line, run `npm seed` to create the database and populate it with test data.
5. Run `npm start` to start the server and sync the Sequelize models to the MySQL database.


## Usage

The following walkthrough video demonstrates the functionality of the application.

https://drive.google.com/file/d/1Pd_Zjd3MJ7KMgPu2NSQw9-koHbZv_JTq/view?usp=sharing


## Tests

Tests for `GET`, `POST`, `PUT`, and `DELETE` requests were performed locally using Insomnia.


## License

 This project is licensed under the terms of the MIT license.

 ![License: ](https://img.shields.io/badge/License-MIT-blueviolet.svg)


## Badges

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)  ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)  ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)  ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  ![edX](https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white)
