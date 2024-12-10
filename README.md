# Book Search Engine

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contribution](#contribution)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Description

Book Search Engine is a web application that allows users to search for books, save them to a personalized list, and manage their saved books. The project originally used a RESTful API but has been refactored to utilize a **GraphQL API** powered by **Apollo Server**. Built with the **MERN stack**, it combines a React front end, a Node.js/Express.js server, and a MongoDB database to deliver a responsive and feature-rich user experience.

The app integrates the **Google Books API** for fetching book data and provides user authentication to enable account-specific functionality.

## Features
- Search for books by title using the Google Books API.
- View book details including title, author, description, cover image, and a link to the Google Books site.
- User authentication with secure login and signup features.
- Save books to a personal list for later reference.
- Remove books from the saved list.
- Logout functionality to secure user data.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/BrandonLanes/book-search-engine

2. Navigate to the project directory:
   cd book-search-engine

3. Install dependencies:
   npm install

4. Create a .env file in the root directory with the following variables:
   MONGODB_URI=<Your MongoDB Atlas connection string>
   JWT_SECRET=<Your JWT secret key>
   GOOGLE_BOOKS_API_KEY=<Your Google Books API key>

5. Start the development server:
   npm run develop

## Usage
1. Navigate to the deployed application or run it locally:
   - Local Development: Open your browser and visit http:// localhost:3000.
   - Deployed App: Access the application via the hosted Render link.

2. Use the "Search for Books" option to find books.

3. Login or signup to save books to your account.

4. Manage your saved books by viewing or removing them from your list.

5. Logout when finished to secure your account.

## Technologies Used
   - React
   - Apollo Client
   - Node.js
   - Express.js
   - Apollo Server
   - MongoDB
   - Google Books API
   - JWT

## Contribution
Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and open a pull request or create an issue.

   1. Fork the project.

   2. Create your feature branch (git checkout -b feature/AmazingFeature).

   3. Commit your changes (git commit -m 'Add some AmazingFeature').

   4. Push to the branch (git push origin feature/AmazingFeature).

   5. Open a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgments
The wonderful TA's and Dan Mueller for all their assistance.

Bootcamp Tutors 

AI - Xpert Learning Assistant, AskBCS Learning Assistant, ChatGPT
