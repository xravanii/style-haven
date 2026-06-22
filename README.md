# Style Haven 👗✨

A full-stack custom fashion marketplace that connects customers with boutique owners for personalized clothing requests and proposal management.

## Overview

Style Haven enables customers to create custom outfit requests, upload design inspirations, specify budgets, and receive proposals from boutique owners. Boutique owners can browse requests, submit quotations, and showcase their services through a dedicated dashboard.

The platform streamlines the traditionally offline process of custom tailoring into a modern digital workflow.

---

## Features

### Customer Features

* Google Authentication using Firebase
* Create custom clothing requests
* Specify budget ranges
* Upload outfit inspiration references
* Receive proposals from multiple boutiques
* Compare quotations and delivery timelines
* Accept a preferred proposal
* Track request status

### Boutique Features

* Google Authentication using Firebase
* Browse customer requests
* Submit tailoring proposals
* Provide pricing estimates
* Specify delivery timelines
* Manage customer interactions
* View request lifecycle updates

### Platform Features

* Role-based access control
* Secure authentication workflow
* Request lifecycle management
* RESTful API architecture
* PostgreSQL database integration
* Responsive UI with Tailwind CSS

---

## Tech Stack

### Frontend

* React.js
* React Router
* Tailwind CSS
* Axios
* Firebase Authentication

### Backend

* Node.js
* Express.js
* Prisma ORM

### Database

* PostgreSQL (Neon)

### Authentication

* Firebase Google Sign-In
* Firebase Admin SDK

### Version Control

* Git
* GitHub

---

## Architecture

Customer
↓
React Frontend
↓
Express REST APIs
↓
Prisma ORM
↓
PostgreSQL Database

Boutique Owner
↓
React Frontend
↓
Express REST APIs
↓
Prisma ORM
↓
PostgreSQL Database

---

## Current Workflow

1. User signs in using Google Authentication.
2. User selects a role (Customer / Boutique Owner).
3. Customers create outfit requests.
4. Boutique owners browse requests.
5. Boutique owners submit proposals.
6. Customers review received proposals.
7. Customers accept a preferred proposal.
8. Request status updates to CLOSED.

---

## Database Models

* User
* Boutique
* PortfolioItem
* CustomRequest
* RequestResponse
* RequestImage

---

## Future Improvements

* Image upload with Cloudinary
* Portfolio management system
* Customer reviews and ratings
* Real-time notifications
* Chat between customers and boutiques
* Order tracking dashboard
* Payment integration
* AI-powered outfit recommendations

---

## Installation

### Clone Repository

```bash
git clone https://github.com/xravanii/style-haven.git
cd style-haven
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_database_url
```

Run:

```bash
npx prisma db push
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Create a `.env` file:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

---

## Author

**Julakanti Sravani**

* GitHub: https://github.com/xravanii
* LinkedIn: https://linkedin.com/in/sravani-julakanti-826801325

---

Built to simplify custom fashion design workflows through modern full-stack web technologies.
