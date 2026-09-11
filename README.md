# Coding LMS

A full-stack Learning Management System (LMS) for online programming courses. The platform allows students to discover and study courses, complete lessons and quizzes, track learning progress, communicate with instructors in real time, and make course payments. Instructors can manage courses, lessons, quizzes and students, while administrators manage users, instructors, courses, orders and platform statistics.

## Features

### Learner

- Register and log in with email/password or Google OAuth.
- Browse and search approved, visible programming courses.
- View course details, lessons and course information.
- Add courses to the cart and create orders.
- Pay for courses through the ZaloPay Sandbox integration.
- Access enrolled courses according to the purchased access level.
- Watch lessons and track lesson completion/progress.
- Take course quizzes and view test results.
- Rate courses and view course ratings.
- Receive and manage notifications.
- Chat with course instructors in real time.
- Use the built-in AI chatbot for:
  - Course search
  - Learning-progress lookup
  - Programming questions
  - Basic greetings and out-of-scope handling

### Instructor

- Register as an instructor.
- Submit instructor verification information.
- Create and edit courses.
- Upload course images and thumbnails.
- Manage course lessons.
- Create and manage course quizzes/questions.
- Submit courses for administrator review.
- View enrolled students and student details.
- View course comments.
- View instructor statistics.
- Communicate with students in real time.

### Administrator

- View platform statistics.
- Manage users and account status.
- Manage instructor verification.
- Approve or reject instructor information.
- Manage courses and course approval/rejection.
- Manage course comments/ratings.
- View and manage orders.
- View instructor and user details.

## Course & Learning Rules

- Courses support three levels: **Cơ bản**, **Trung bình**, and **Nâng cao**.
- A course can be free or paid.
- Paid courses support partial or full payment.
- Enrollment access can be **LIMITED** or **UNLIMITED** depending on the payment result.
- Learning progress is based on lesson progress and test results.
- Each course can have an associated test.
- Test durations supported by the backend are 15, 20, 30, 45 and 60 minutes.
- Supported passing scores are 50, 60, 70, 80 and 90.

## Tech Stack

### Frontend

- React 19
- Vite
- React Router
- Redux Toolkit / React Redux
- Axios
- Tailwind CSS
- Ant Design
- React Player
- Chart.js / React Chart.js 2
- Socket.IO Client
- Framer Motion
- React Toastify

### Backend

- Node.js
- Express 5
- Mongoose
- MongoDB
- JWT
- bcrypt
- Passport / Google OAuth 2.0
- Socket.IO
- Multer
- Cloudinary
- Express Rate Limit
- Axios

### Services & Integrations

- MongoDB for application data
- Cloudinary for uploaded images
- Google OAuth for social login
- ZaloPay Sandbox for payment processing
- Google Gemini API for the AI chatbot
- YouTube API key on the frontend for YouTube-related functionality

## Architecture

The project follows a client-server architecture:

```text
React Client
    │
    │ HTTP / REST API
    ▼
Express / Node.js Server
    │
    ├── Middleware
    ├── Controllers
    ├── Services
    ├── Mongoose Models
    │
    ▼
MongoDB
```

Real-time communication uses Socket.IO between the client and server.

The backend is organized around a **Router → Middleware → Controller → Service → Model** flow.

## Project Structure

```text
coding-lms/
├── client/
│   └── lms/
│       ├── public/
│       ├── src/
│       │   ├── assets/
│       │   ├── components/
│       │   ├── pages/
│       │   │   ├── admin/
│       │   │   ├── instructor/
│       │   │   └── user/
│       │   ├── services/
│       │   ├── stores/
│       │   │   └── features/
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── package.json
│       └── vite.config.js
│
└── server/
    ├── configs/
    ├── controllers/
    ├── helper/
    ├── middlewares/
    ├── models/
    ├── routers/
    ├── services/
    ├── script.js
    └── package.json
```

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- MongoDB

The current backend database configuration connects to a local MongoDB database:

```text
mongodb://localhost:27017/lvtn
```

### 1. Clone the repository

```bash
git clone https://github.com/chungdt051204/coding-lms.git
cd coding-lms
```

### 2. Install frontend dependencies

```bash
cd client/lms
npm install
```

### 3. Configure frontend environment variables

Create a `.env` file in `client/lms`:

```env
VITE_API_KEY_YOUTUBE=your_youtube_api_key
```

### 4. Start the frontend

From `client/lms`:

```bash
npm run dev
```

The Vite development server will display the local URL in the terminal.

### 5. Install backend dependencies

Open another terminal:

```bash
cd server
npm install
```

### 6. Configure backend environment variables

Create a `.env` file in `server`:

```env
URL_FRONTEND=http://localhost:5173
URL_BACKEND=http://localhost:3000

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=your_google_callback_url

CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

APP_ID=your_zalopay_app_id
KEY1=your_zalopay_key1
KEY2=your_zalopay_key2
ENDPOINT=your_zalopay_endpoint

GEMINI_API_KEY=your_gemini_api_key
```

### 7. Start the backend

From `server`:

```bash
npm start
```

The backend runs on port `3000` according to the current server configuration.

## Authentication & Authorization

The application uses JWT-based authentication.

- The frontend sends the JWT using the `Authorization: Bearer <token>` header.
- The backend verifies the JWT before protected requests.
- The backend also checks the currently stored access token for the user.
- Role-based middleware protects administrator and instructor routes.
- Passwords for email-based accounts are hashed with bcrypt.
- Google OAuth is supported through Passport.

## Real-Time Communication

Socket.IO is used for real-time features such as:

- Learner/instructor conversations
- New messages
- Notifications
- Account status changes
- Course review updates
- Instructor account review updates
- Forced logout notifications

## Payment

The backend contains a ZaloPay Sandbox integration for course payments.

The payment flow includes:

```text
Create Order
    ↓
Process Payment
    ↓
ZaloPay Sandbox
    ↓
Payment Result Callback
    ↓
Update Order
    ↓
Create/Update Enrollment
```

The current project also contains support for the `MOMO` payment method at the order-model level.

## Available Scripts

### Frontend

```bash
npm run dev       # Start Vite development server
npm run build     # Build production files
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Backend

```bash
npm start         # Start backend with nodemon
```

## Help

If you encounter an issue while setting up the project:

1. Check that Node.js, npm and MongoDB are installed.
2. Make sure MongoDB is running locally.
3. Check that the required `.env` variables are configured.
4. Make sure the frontend and backend are running on the expected ports.
5. Check the browser console and backend terminal for error messages.

For project-specific questions or bug reports, open an issue in the repository or contact the maintainer.

## Maintainer

**Đỗ Thành Chung**

This project is maintained as a personal full-stack web development project.

## Contributing

Contributions, suggestions and bug reports are welcome. For changes, create a separate branch and submit a pull request describing the proposed improvement.

## License

No license is currently specified in the project repository.
