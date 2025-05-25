# MERN Authentication System

A secure and modern **MERN Stack (MongoDB, Express, React, Node.js)** based **Authentication System** with JWT tokens, cookie-based sessions, and clean cross-origin (CORS) handling.

> 🔐 Built with real-world use cases in mind, this project ensures login persistence, protected routes, and production-ready configuration for frontend-backend deployment across different domains.

---

## 🌟 Features

- ✅ JWT authentication with `HttpOnly` secure cookies  
- ✅ Cross-domain support with `CORS` and `credentials`  
- ✅ Auto login session persistence on page reload  
- ✅ Role-based / account-verified based routing  
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

---

## 🧠 Tech Stack

- **Frontend**: React, Axios, React Router, Toastify  
- **Backend**: Node.js, Express, MongoDB, JWT, Cookie-parser  
- **Database**: MongoDB Atlas  
- **Deployment**: Vercel (frontend) & Render (backend)  

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/MERN-Authentication-System.git
cd MERN-Authentication-System

##2. Setup the Backend
cd server
npm install

Create a .env file in the /server directory:
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLIENT_URL=http://localhost:5173

Start backend:
npm run dev

3. Setup the Frontend
cd ../client
npm install

Create a .env file in the /client directory:
VITE_BACKEND_URL=http://localhost:5000

Start frontend:
npm run dev


🧪 API Routes (Backend)
POST /api/auth/register → Register a new user

POST /api/auth/login → Login with email & password

GET /api/auth/is-auth → Check if user is authenticated

GET /api/user/data → Get user details if authenticated

POST /api/auth/logout → Logout and clear cookie


✅ How to Use
Go to frontend URL: http://localhost:5173

Register or login

If logged in and verified, you're redirected to dashboard

JWT is stored in a secure cookie (HttpOnly) — auto logins are maintained

You can manually logout → which clears the cookie


🌐 Deployment Tips
Set NODE_ENV=production in backend .env

Make sure secure: true and sameSite: "none" are set when deploying on different domains

Configure your Vercel and Render CORS to allow credentials (Access-Control-Allow-Credentials: true)

🙌 Author
Asneh Raj – rajasneh91@gmail.com

