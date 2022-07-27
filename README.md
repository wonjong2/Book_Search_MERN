# Book Search MERN
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Refactors the starter code with a fully functioning Google Books API search engine built with a RESTful API to be a GraphQL API built with Apollo Server. This app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It allows users to save book searches to the back end.
- Use node.js as a platform
- Use express.js for the server operation
- Use React to build UI components
- Use MongoDB and Mongoose for the DB in the back end
- Use Apollo Server/Client to use GraphQL

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Test](#test)
6. [Questions](#questions)

## Installation

On the command prompt :

npm install
npm run develop

## Usage

  1. WHEN I load the search engine
  THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
  2. WHEN I click on the Search for Books menu option
  THEN I am presented with an input field to search for books and a submit button
  3. WHEN I am not logged in and enter a search term in the input field and click the submit button
  THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
  4. WHEN I click on the Login/Signup menu option
  THEN a modal appears on the screen with a toggle between the option to log in or sign up
  5. WHEN the toggle is set to Signup
  THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
  6. WHEN the toggle is set to Login
  THEN I am presented with two inputs for an email address and a password and login button
  7. WHEN I enter a valid email address and create a password and click on the signup button
  THEN my user account is created and I am logged in to the site
  8. WHEN I enter my account’s email address and password and click on the login button
  THEN I the modal closes and I am logged in to the site
  9. WHEN I am logged in to the site
  THEN the menu options change to Search for Books, an option to see my saved books, and Logout
  10. WHEN I am logged in and enter a search term in the input field and click the submit button
  THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
  11. WHEN I click on the Save button on a book
  THEN that book’s information is saved to my account
  12. WHEN I click on the option to see my saved books
  THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
  13. WHEN I click on the Remove button on a book
  THEN that book is deleted from my saved books list
  14. WHEN I click on the Logout button
  THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

`Deployed URL:  ` https://book-search-wonjong.herokuapp.com/

## License

Copyright (c) 2022 `wonjong2` (GitHub Username) Licensed under [the MIT License](https://choosealicense.com/licenses/mit/).

## Contributing

All your inputs are valuable and I love them.

- Reporting a bug
- Submiiting a fix
- Proposing new features

## Test

N/A

## Questions

1. GitHub: https://github.com/wonjong2
2. If you have any questions, please reach out to wonjong2@gmail.com
