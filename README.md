Estimation Work Time

A fullstack application to estimate and manage working time. Built with Node.js, Prisma, React, and SQLite/PostgreSQL (based on your Prisma setup).

Overview

This project helps manage tasks, working time estimation, and user roles. It has two main components:

Backend: Node.js server with Prisma ORM for database management.

Frontend: React application for user interface.


Prerequisites

Node.js
Git
Optional for database viewing: Prisma Studio

Installation

Clone the repository
git clone https://github.com/AkashDevX/EstimationWorkTime.git
cd EstimationWorkTime

Install backend dependencies
cd backend
npm install

Install frontend dependencies
cd ../frontend
npm install

Database Setup

Install Prisma CLI (if not installed globally)
cd backend
npm install prisma --save-dev
npm install @prisma/client

Generate Prisma Client
npx prisma generate

Run Migrations
npx prisma migrate dev --name init

Seed the database
npm run seed

Optional: Open Prisma Studio to view/edit data
npx prisma studio



Running the Project

Backend
cd backend
node index.js

Frontend
cd frontend
npm start

Default Seed Users
Email	                      Password	Role
pm@example.com              123456    PM
engineer1@example.com       123456    ENG
engineer2@example.com       123456    ENG
Use these credentials to log in and test the app.


Notes

Make sure to create a .env file in the backend folder if your Prisma schema uses environment variables (e.g., DATABASE_URL).

This project uses Prisma ORM; any database changes require running migrations.

Ensure the backend is running before starting the frontend.
