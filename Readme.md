# Khana Khajana: Online Food Ordering Application

Khana Khajana is a full-stack web application designed for online food ordering, leveraging the MERN stack to provide a seamless and intuitive user experience. The platform includes comprehensive features for both users and administrators, ensuring efficient food ordering and management processes.

---

## Features

### User Interface

* **Browse Food Items**: Users can browse available food items, view details, and add items to their cart.
* **Sliding Mechanism**: The interface features a sliding mechanism for effortless browsing of food categories.
* **Shop Section**: Additional items can be accessed by navigating through the shop section.
* **User Authentication**: Users must log in to access the website, and new users can sign up for an account.

### Admin Interface

* **Admin Dashboard Access**: Access to the admin dashboard requires users to log in with existing credentials or sign up for an account.
* **Manage Food Items**: Within the admin dashboard, users can manage food items by editing their details.

  * **Edit Food Items**: Each food item includes essential information such as the item name, description, price, and image URL. Admins can edit these details for existing food items.
  * **Upload New Food Items**: Admins can upload new food items.
  * **Delete Existing Food Items**: Admins can delete existing food items.
* **Logout Functionality**: Logout functionality is conveniently available within the dashboard interface.

---

## Tech Stack

### MongoDB

MongoDB serves as the database management system, storing various data related to food items available on the platform, such as names, descriptions, prices, and image URLs. MongoDB's flexibility allows for storing this data without a fixed schema, accommodating the diverse nature of food item information.

### React

React is utilized for building the frontend of the food ordering website. It enables the creation of interactive user interfaces, allowing users to seamlessly browse through available food items, view item details, and interact with the platform's features. React's component-based architecture facilitates the development of reusable UI components, ensuring consistency and efficiency across the website.

### Node.js

Node.js powers the backend of the project, handling server-side logic and communication with the database. It enables the implementation of features such as user authentication, food item management, and API endpoints for frontend-backend interaction. Node.js's event-driven, non-blocking I/O model ensures the efficient handling of concurrent operations, making the website responsive and scalable.

### Express

Express complements Node.js by providing a minimalist web framework for building server-side applications and APIs. In this project, Express is used to define routes, middleware, and other backend functionalities. It simplifies the process of handling HTTP requests, processing data, and generating responses. Express's lightweight nature and extensive middleware ecosystem streamline backend development, accelerating the creation of a robust backend infrastructure for the food ordering platform.

### Multer

Multer is used for handling `multipart/form-data`, primarily used for uploading images when adding or editing food items from the admin panel.

### JWT Authentication

The platform uses JSON Web Tokens (JWT) for secure authentication and session management for both users and administrators.

### eSewa Integration

eSewa is integrated for payment processing, allowing users to complete transactions securely within the platform.

---

## Project Setup

### Frontend (Admin Panel)

```bash
cd admin
npm install
npm run dev
```

### Backend (API Server)

```bash
cd backend
npm install
node index.js
```

---

## Folder Structure Overview

```
├── admin/                 # React frontend (Admin Panel)
│   └── ...
├── backend/               # Express backend
│   └── ...
└── README.md
```

---

## License

This project is licensed under the MIT License.

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Feel free to fork and improve the platform!

---

## Live Demo / Deployment

*Coming soon...*
