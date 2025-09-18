🕒 Estimation Work Time

A full-stack application to estimate and manage working time, built with Node.js, Prisma, React, and SQLite/PostgreSQL.

📌 Overview

This project helps manage tasks, work time estimation, and user roles.

It consists of two main components:

Backend: Node.js server with Prisma ORM

Frontend: React application for the user interface

✨ Features

✅ Task management and tracking

✅ Work time estimation

✅ Role-based access control (PM / Engineer)

✅ Database management with Prisma

✅ Seeded demo data for testing

🛠 Prerequisites

Node.js

Git

Optional: Prisma Studio for viewing/editing database

⚡ Installation

1. Clone the repository
git clone https://github.com/AkashDevX/EstimationWorkTime.git
cd EstimationWorkTime

2. Install backend dependencies
Go to the backend folder:
cd backend
npm install

3. Install frontend dependencies
Go to the frontend folder:
cd ../frontend
npm install

🗄 Database Setup

1. Install Prisma CLI (if not installed globally)
cd backend
npm install prisma --save-dev
npm install @prisma/client

2. Generate Prisma Client
npx prisma generate

3. Run Migrations
npx prisma migrate dev --name init

4. Seed the database
npm run seed

5. Optional: Open Prisma Studio
npx prisma studio

🚀 Running the Project

Backend
cd backend
node index.js

Frontend
cd frontend
npm start

👥 Default Seed Users
Email	Password	Role
pm@example.com
