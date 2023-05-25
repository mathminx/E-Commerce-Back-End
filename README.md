# E-Commerce-Back-End

This is a Node.js command-line application that prompts the user to input text and select the shape and colours, then generates a logo based on the user input and saves it as an [SVG file]

This application was built using JavaScript, Node.js, Express, MySQL, Sequelize, Handlebars, and UIKit. The entire application is deployed via Heroku. Students create an account, specify the subject(s) for which they require tutoring, and then be matched with a tutor(s) who has created an account and indicated that they can tutor that subject. 

This application enables a user to write and save notes in order to keep track of tasks to be competed. It uses an Express.js back end to save and retrieve note data to and from a JSON file. The user can also delete notes once they are no longer needed. The entire application is deployed via Heroku.

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

Your task is to build the back end for an e-commerce site by modifying starter code. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the acceptance criteria being met. You’ll need to submit a link to the video and add it to the readme of your project.

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

Express.js API

to connect to a database using Sequelize, add database name, MySQL username, and MySQL password to an environment variable file

enter schema and seed commands to create and seed the development database

enter the command to invoke the application --> server is started and the Sequelize models are synced to the MySQL database

open API GET routes in Insomnia for categories, products, or tags --> the data for each of these routes is displayed in a formatted JSON

API POST, PUT, and DELETE routes in Insomnia --> to successfully create, update, and delete data in the database


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)


uses MySQL2 and Sequelize packages to connect the Express.js API to a MySQL database 
uses the dotenv package to store sensitive data using environment variables (MySQL username, password, and database name)


## Installation
  
To install locally, load dependencies by running `npm install`, followed by `node server.js` to start the apllication.


## Usage

### A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.
* A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your readme file.
* The walkthrough video must show all of the technical acceptance criteria being met.
* The walkthrough video must demonstrate how to create the schema from the MySQL shell.
* The walkthrough video must demonstrate how to seed the database from the command line.
* The walkthrough video must demonstrate how to start the application’s server.
* The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia.
* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia.
* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia.


## Tests

Tests for `GET`, `POST`, `PUT`, and `DELETE` requests were performed locally using Insomnia.


## License

 This project is licensed under the terms of the MIT license.

 ![License: ](https://img.shields.io/badge/License-MIT-blueviolet.svg)


## Badges

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)  ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)  ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)  ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)  ![edX](https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white)
