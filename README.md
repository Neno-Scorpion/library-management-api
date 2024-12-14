# Library Management API

A Node.js application for managing a library of books using RESTful APIs.

## Table of Contents

* [Getting Started](#getting-started)
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [API Endpoints](#api-endpoints)
* [Docker Setup](#docker-setup)
* [Contributing](#contributing)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/Neno-Scorpion/library-management-api.git`
2. Install dependencies: `npm install`
3. Start the application: `npm start`

## Features

* Add, update, delete, list, and search for books in a library
* RESTful API endpoints for easy integration with other applications
* Uses Node.js and Express.js for server-side logic

## Installation

To install this project, follow these steps:

1. Install Node.js and npm (the package manager for Node.js)
2. Install dependencies: `npm install`

## Usage

To use this API, send HTTP requests to the following endpoints:

### API Endpoints

* `GET /api/books`: List all books in the library
* `POST /api/books`: Add a new book to the library
* `GET /api/books/:isbn`: Get a book by ISBN
* `PUT /api/books/:isbn`: Update a book by ISBN
* `DELETE /api/books/:isbn`: Delete a book by ISBN

## Docker Setup

To run the project in Docker, follow these steps:
### 1. Build the Docker Image

docker build -t library-api .
docker run -p 5000:5000 library-api
The API will be accessible at http://localhost:5000.

## Contributing

To contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Make your changes.
4. Commit your changes (git commit -m 'Add feature').
5. Push to the branch (git push origin feature-name).
6. Open a pull request
