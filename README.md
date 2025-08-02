# 💹 Zerodha Clone – Stock Trading Platform

A full-stack **Zerodha-inspired trading platform** built with the **MERN** stack, featuring login/signup, buy/sell orders, holdings, positions, and a secure dashboard.

---

## 🚀 Live URLs

- 🔗 Frontend (Login/Signup): [zerodha-himanshu.onrender.com](https://zerodha-himanshu.onrender.com/)
- 🔗 Dashboard (Post-login): [zerodha-himansh.onrender.com](https://zerodha-himansh.onrender.com/)
- 🔗 Backend API: [zerodha-himans.onrender.com](https://zerodha-himans.onrender.com/)

---

## 🛠️ Tech Stack

### 🧠 Frontend (`/frontend`)

> Built using **React.js**, styled with **Bootstrap 5** and custom CSS

- `react`, `react-router-dom`
- `@testing-library/*`, `web-vitals`

### 🔐 Backend (`/backend`)

> REST API built with **Express.js**, with **MongoDB** for storage and **JWT** for authentication

- `express`, `mongoose`, `bcrypt`, `jsonwebtoken`
- `passport`, `passport-local`, `helmet`, `dotenv`, `cors`

### 📊 Dashboard (`/dashboard`)

> Authenticated dashboard using **React**, **Material UI**, and **Chart.js**

- `@mui/material`, `@emotion/react`, `chart.js`, `axios`
- `react-chartjs-2`, `jsonwebtoken`, `react-router-dom`

---

## ⚙️ Features

- ✅ User Signup & Login
- 📦 Order Placement (Buy/Sell)
- 📈 Holdings & P&L Calculation
- 📊 Live Dashboard (Chart.js + Material UI)
- 💼 Token-based Protected Routes
- ☁️ MongoDB Atlas integration
- ✨ Responsive UI (Bootstrap)

## 📁 Project Structure

```
zerodha/
├── backend/          # Express.js Backend (API, MongoDB, Auth)
├── frontend/         # React Frontend (Login, Signup)
└── dashboard/        # Dashboard UI (Post-login)
```

---

## 🔐 Authentication

- User Signup with hashed password (bcrypt)
- JWT-based login
- Token passed to dashboard via URL, stored in localStorage

---

## ☁️ Deployment

- Frontend & Dashboard: Deployed via Render static site
- Backend API: Deployed as Node.js service on Render

## 🧑‍💻 Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/himanshujaiswal8448/ZerodhaProject.git

# 2. Navigate to the folders and install dependencies
cd zerodha/frontend && npm install
cd ../backend && npm install
cd ../dashboard && npm install
```

### 🔌 Environment Setup

Create a `.env` file inside `backend/` and add:

```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run Locally (Dev Mode)

- Frontend: npm start (runs at http://localhost:3000)

- Backend: nodemon index.js (runs at http://localhost:8080)

- Dashboard: npm start (runs at http://localhost:3001)

---

## 🧠 Learnings

- Practical implementation of full-stack architecture
- Token-based authentication and session management
- Data visualization using charts
- Responsive UI structuring and route protection

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

This project is for educational purposes only and is not affiliated with Zerodha.

---

## 👤 Author

Made with ❤️ by [Himanshu Jaiswal](https://github.com/himanshujaiswal8448)

Feel free to connect on [LinkedIn](https://www.linkedin.com/in/himanshujaiswal8448)

🌟 Show Your Support
If you like this project, please ⭐ star it on [GitHub](https://github.com/himanshujaiswal8448/ZerodhaProject) and share it on LinkedIn!
