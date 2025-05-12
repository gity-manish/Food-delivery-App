# Khana Khajana 

Khana Khajana is a full-stack food delivery web application. This repository hosts the **Admin Panel**, which allows authorized users to manage menu items, view and track orders, and control content shown to customers.

---

## Project Overview

The Admin Panel provides a user-friendly interface to manage the platform’s food items, categories, images, and pricing, along with real-time order management. It interacts with a robust backend and a MongoDB database, enabling CRUD operations with secure authentication and image uploads.

---

## Features

- **Admin Authentication (JWT-based)**
- **Add, Edit & Delete Food Items**
- **Image Upload with Multer**
- **Category and Price Management**
- **Order Tracking Dashboard**
- **Secure API Integration**
- **Responsive UI**

---

## Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- React Toastify
- Vite

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- Multer (Image Uploads)
- JWT (Authentication)

---

## Installation & Setup

### Prerequisites
- Node.js v18 or higher
- MongoDB running locally or via cloud (e.g., MongoDB Atlas)

### Clone the Repository
```bash
git clone https://github.com/gity-manish/Food-delivery-App.git
cd Food-delivery-App


Frontend (Admin Panel)
bash
Copy
Edit
cd admin
npm install
npm run dev
Backend (API Server)
bash
Copy
Edit
cd backend
npm install
npm start
Make sure to configure your environment variables (.env) for backend:

ini
Copy
Edit
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Folder Structure
bash
Copy
Edit
Food-delivery-App/
├── admin/             # React-based admin panel
├── backend/           # Node.js + Express backend
└── assets/            # Shared static assets
Environment Variables
The backend expects the following variables in a .env file:

PORT – Port on which the server will run

MONGO_URL – Your MongoDB connection URI

JWT_SECRET – Secret for JWT authentication

Payment Integration
The application uses eSewa for payment handling (integration in progress or under configuration).

License
This project is licensed under the MIT License.

Author
Developed and maintained by Manish

yaml
Copy
Edit

---

Would you like a badge layout (like GitHub stars, forks, or license shields) added to the top as well?
