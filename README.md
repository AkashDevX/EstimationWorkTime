# Estimation Work Time

A **fullstack application** to estimate and manage working time, built with **Node.js**, **Prisma**, **React**, and **SQLite/PostgreSQL** (depending on your Prisma setup).  

This project helps teams manage **tasks, working time estimation, and user roles** with a clear separation of backend and frontend.

---

## Table of Contents
- [Overview](#overview)  
- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Installation & Setup](#installation--setup)  
- [Configuration](#configuration)  
- [Examples](#examples)  
- [Troubleshooting](#troubleshooting)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Overview

The project consists of two main components:

- **Backend**: A Node.js server using Prisma ORM for database management.  
- **Frontend**: A React-based interface for user interaction.  

---

## Features

- 🕒 **Task & Time Estimation** – Plan and track working hours.  
- 👥 **Role-Based Access** – Manage users with roles like **Project Manager (PM)** and **Engineer (ENG)**.  
- 💾 **Database Flexibility** – Supports **SQLite** (for local dev) or **PostgreSQL** (for production).  
- 🔍 **Prisma Studio Integration** – Easily view and edit database records.  
- 🚀 **Fullstack Architecture** – Seamless integration of Node.js backend with React frontend.  

---

## Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (LTS recommended)  
- [Git](https://git-scm.com/)  
- **Optional**: [Prisma Studio](https://www.prisma.io/studio) for database inspection  

---

## Installation & Setup

Follow these steps in order:

```bash
# 1. Clone the repository
git clone https://github.com/AkashDevX/EstimationWorkTime.git
cd EstimationWorkTime

# 2. Install backend dependencies
cd backend
npm install

# 3. Install frontend dependencies
cd ../frontend
npm install

# 4. Go back to the backend for database setup
cd ../backend

# 5. Install Prisma and client
npm install prisma --save-dev
npm install @prisma/client

# 6. Generate Prisma Client
npx prisma generate

# 7. Run database migrations
npx prisma migrate dev --name init

# 8. Seed the database
npm run seed

# 9. (Optional) Inspect the database with Prisma Studio
npx prisma studio

# 10. Start the backend server
node index.js

# 11. In a new terminal, start the frontend
cd ../frontend
npm start


Default Seed Users

Once the app is running, you can log in with these test credentials:

pm@example.com
	123456	
engineer1@example.com
	123456	
engineer2@example.com
	123456

#12. Environment Variables

Make sure to create a .env file in the backend folder if your Prisma schema uses environment variables, e.g.:
DATABASE_URL="file:./dev.db"


Notes

This project uses Prisma ORM; any database changes require running migrations.

Ensure the backend is running before starting the frontend.

Recommended database: SQLite for local development, PostgreSQL for production.

Tech Stack

Backend: Node.js, Express, Prisma ORM

Frontend: React.js

