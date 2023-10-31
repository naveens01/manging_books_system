# Book Management API

This project implements a RESTful API for managing books using Node.js, Express, and MongoDB. It includes CRUD operations, JWT authentication, and basic user authentication.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Functionalities](#functionalities)
  - [CRUD Operations](#crud-operations)
  - [User Authentication](#user-authentication)
- [Code Explanation](#code-explanation)
  - [Folder Structure](#folder-structure)
  - [Middleware](#middleware)
  - [Controllers](#controllers)
  - [Routes](#routes)
- [Usage](#usage)
  - [Run Locally](#run-locally)
  - [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/naveens01/manging_books_system.git
   
Install dependencies: npm install

Environment Variables : Create a .env file in the root of the project with the following variables:

DB_URI=mongodb://localhost:27017/books
PORT=3000
SECRET_KEY=mysecret321

Functionalities

CRUD Operations
    Add a New Book
        Endpoint: POST /books
        Body: { "title": "Book Title", "author": "Author Name", "summary": "Book Summary" }
    View a List of All Books
        Endpoint: GET /books
    View Details of a Specific Book by ID
        Endpoint: GET /books/:id
    Update a Book's Details
        Endpoint: PUT /books/:id
        Body: { "title": "Updated Title", "author": "Updated Author", "summary": "Updated Summary" }
    Delete a Book
        Endpoint: DELETE /books/:id
User Authentication
    Login User
        Endpoint: POST /login
        Body: { "username": "your-username", "password": "your-password" }\

Code Explanation
Folder Structure
    src/controllers: Contains controllers for handling business logic.
    src/middleware: Middleware functions such as authentication.
    src/models: Mongoose models for data schema.
    src/routes: Defines API endpoints.
    src/app.js: Main application file.
Middleware
    authMiddleware.js: Validates JWT tokens for protected routes.
    logger.js: Logs incoming requests.
Controllers
    authController.js: Handles user authentication and token generation.
    bookController.js: Implements CRUD operations for books.
Routes
    authRoutes.js: Defines authentication-related routes.
    bookRoutes.js: Defines CRUD endpoints for books.
Usage
    Run Locally - npm start

API Endpoints
    List all books: GET /books
    Get book by ID: GET /books/:id
    Add a new book: POST /books
    Update a book: PUT /books/:id
    Delete a book: DELETE /books/:id
    Login user: POST /login
