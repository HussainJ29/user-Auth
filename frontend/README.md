# Full Stack Application with Node.js and React

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Description

This is a full-stack web application that provides user authentication, data validation, and CRUD operations with a **Node.js/Express** backend and a **React** frontend. It leverages **MongoDB** for database management, **JWT** for secure authentication, and **Joi** for input validation. The frontend is powered by **Vite** and built with **React** for a fast and optimized development experience.

## Features

- User Authentication (JWT-based)
- Password hashing with bcrypt
- Form validation using Joi
- MongoDB integration via Mongoose
- Linting with ESLint for React code
- Fast frontend development with Vite

## Tech Stack

**Backend:**

- Node.js
- Express
- MongoDB (Mongoose)
- bcrypt
- JWT (jsonwebtoken)
- Joi
- dotenv

**Frontend:**

- React
- Vite

## Installation

### Backend Setup

1. Clone the repository.
   ```bash
   git clone https://github.com/HussainJS29/fullstack-app.git
   cd fullstack-app/backend
   ```

# Install backend dependencies

npm install

# Set up environment variables in a .env file

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key

# Start the backend server

npm start

# Frontend Setup

# Navigate to the frontend directory

cd ../frontend

# Install frontend dependencies

npm install

# Start the frontend development server

npm run dev

# Usage

# Start both the backend and frontend servers.

# Access the frontend at http://localhost:3000 and the backend API at http://localhost:5000.

# Scripts

# Backend Scripts

npm start # Start the backend server using nodemon.

# Frontend Scripts

npm run dev # Start the Vite development server for the React frontend.
npm run build # Build the frontend for production.
npm run preview # Preview the production build.
npm run lint # Run ESLint on the frontend code.

# API Endpoints

# Authentication

POST /api/auth/register - Register a new user.
POST /api/auth/login - Login a user and get a JWT token.

# Users

GET /api/users/me - Get current user details (Protected with JWT).

# More endpoints can be added based on the project requirements.
