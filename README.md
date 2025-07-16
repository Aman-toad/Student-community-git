# 🚀 Student Community Platform

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Status](https://img.shields.io/badge/status-active-blue.svg)
![Made with Node.js](https://img.shields.io/badge/backend-Node.js-orange)
![Made with React](https://img.shields.io/badge/frontend-React-blue)

A responsive, full-stack web application designed to help college students share resources, view leaderboards, chat, and engage through societies. Built with a clean, modular structure and scalable for future enhancements.

---

## 🗂️ Folder Structure
```
student-community/
│
├── frontend/                  # React frontend
│   ├── public/                # Static files
│   ├── src/                   # React components, pages, context
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json           # Frontend dependencies & scripts
│
├── backend/                   # Node.js + Express backend
│   ├── controllers/           # Route handlers
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API routes
│   ├── middleware/            # Auth middleware, error handlers
│   └── server.js              # Entry point
│
├── .gitignore
├── README.md                  # Project overview

```

---

## 🛠️ Tech Stack

### Frontend
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Vercel](https://vercel.com/) (for deployment)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/) for authentication
- [Mongoose](https://mongoosejs.com/)

---

## 🔐 Features

- 🔒 User Registration & Login
- 🗂️ Notes Upload & Download
- 🏆 Leaderboard
- 💬 Chat Interface
- 🏛️ Societies Page
- 📱 Mobile-Responsive UI (with sidebar + bottom bar switch)
- ✨ Custom doodle backgrounds for a fun UX

---

## 🤝 Contributing
We 💚 contributions — whether it's fixing bugs, improving documentation, adding new features, or just suggesting ideas.

No contribution is too small!

If you're new to open source, don’t worry — we’re happy to guide you through your first PR.

📢 Just fork, code, and create a pull request. We’ll handle the rest.

Let’s build something awesome together! 🚀

## 🧑‍💻 Getting Started

### 🔧 Frontend and backend
```bash
cd frontend
npm install
npm run dev
../
cd backend
npm i
npm run dev
