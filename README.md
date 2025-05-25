# MERN Authentication System

A secure and modern **MERN Stack (MongoDB, Express, React, Node.js)** based **Authentication System** with JWT tokens, cookie-based sessions, and clean cross-origin (CORS) handling.

> 🔐 Built with real-world use cases in mind, this project ensures login persistence, protected routes, forgot password via email, and production-ready configuration for frontend-backend deployment across different domains.

---

## 🌟 Features

- ✅ JWT authentication with `HttpOnly` secure cookies  
- ✅ Cross-domain support with `CORS` and `credentials`  
- ✅ Auto login session persistence on page reload  
- ✅ Role-based / account-verified based routing  
- ✅ Forgot password via email (reset token + expiration)  
- ✅ Error handling with client-friendly messages  
- ✅ React context for auth & user state management  
- ✅ Toast notifications for feedback  
- ✅ Production-ready `secure`, `sameSite`, and `path` cookie configs  

---

## 🚀 Why It's Unique?

While most auth systems either:
- Store tokens insecurely in localStorage/sessionStorage, or  
- Work only on the same origin,  

**This system uses:**
- **`HttpOnly` secure cookies** for better security (no XSS token theft)  
- **`withCredentials` & `sameSite: "none"`** for full cross-origin session support  
- **Frontend/Backend deployed on separate domains** (ideal for real-world apps)  
- **Password reset functionality with secure email token-based workflow**

---

## 🧠 Tech Stack

- **Frontend**: React, Axios, React Router, Toastify  
- **Backend**: Node.js, Express, MongoDB, JWT, Cookie-parser, Nodemailer  
- **Database**: MongoDB Atlas  
- **Deployment**: Vercel (frontend) & Render (backend)  

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/MERN-Authentication-System.git
cd MERN-Authentication-System
```

### 2. Setup the Backend

```bash
cd server
npm install
```

Create a `.env` file in the `/server` directory:

```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLIENT_URL=http://localhost:5173

EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

Start backend:

```bash
npm run dev
```

---

### 3. Setup the Frontend

```bash
cd ../client
npm install
```

Create a `.env` file in the `/client` directory:

```
VITE_BACKEND_URL=http://localhost:5000
```

Start frontend:

```bash
npm run dev
```

---

## 🧪 API Routes (Backend)

- `POST /api/auth/register` → Register a new user  
- `POST /api/auth/login` → Login with email & password  
- `GET /api/auth/is-auth` → Check if user is authenticated  
- `GET /api/user/data` → Get user details if authenticated  
- `POST /api/auth/logout` → Logout and clear cookie  
- `POST /api/auth/forgot-password` → Send reset link to email  
- `POST /api/auth/reset-password/:token` → Reset password with valid token  

---

## ✅ How to Use

1. Visit: `http://localhost:5173`  
2. Register or login  
3. Upon login, JWT is stored in a secure cookie (HttpOnly)  
4. Auto-login is maintained via cookies  
5. Logout manually to clear the session  
6. Use "Forgot Password" to reset via email token  

---

## 🌐 Deployment Tips

- Set `NODE_ENV=production` in backend `.env`  
- Ensure cookie config uses `secure: true` and `sameSite: "none"` for cross-origin  
- Configure CORS properly on both Vercel and Render:  
  - `Access-Control-Allow-Credentials: true`  
  - `Access-Control-Allow-Origin: <client_url>`  

---

## 🙌 Author

Asneh Raj – [rajasneh91@gmail.com](mailto:rajasneh91@gmail.com)

---
