
# 📘 DailyTrackr

**[View on GitHub](https://github.com/Amanc77/DailyTrackr)**  
📸 **Watch the demo:** *(Add YouTube link here if available)*

---

## 💡 About this Project

**DailyTrackr** is a digital ledger-like web app that allows you to manage daily records (Hisab-Kitaab style) using modern web technologies.

This project was created to practice backend development while building something useful and realistic — with file-based storage and dynamic routing.

---

## ✅ Why Use This App?

If you're a beginner learning backend development, this app is a great starting point!

It includes:
- A clean and responsive UI with Tailwind CSS
- File-based record handling with the Node.js `fs` module
- Dynamic routes for viewing, editing, and creating records
- Real-time success alerts and interactive UI
- Lightweight and database-free setup

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Templating**: EJS
- **Styling**: Tailwind CSS (via CDN)
- **File Handling**: Node.js `fs` module

---

## 🔧 Features

- 📂 Create, view, edit, and delete daily records
- 📄 Records saved as `.txt` files (like 04-07-2025.txt)
- 🧭 Dynamic routing based on file names
- 🔐 Simple login system (UI only)
- 📢 Instant alerts after edits or deletions
- 📱 Fully responsive design using Tailwind

---

## 📁 Folder Structure

```
DailyTrackr/
├── views/             # EJS templates (index, login, create, etc.)
├── public/            # Static CSS (optional)
├── files/             # All created records stored here as .txt
├── src/               # Tailwind input (optional if using CDN)
├── app.js             # Main server logic
├── package.json
```

---

## 🚀 Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Amanc77/DailyTrackr
   cd DailyTrackr
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Start the server**  
   ```bash
   node app.js
   ```

4. **Visit**  
   Open your browser at: [http://localhost:3000](http://localhost:3000)

---

## 🧠 What I Learned

- Setting up and structuring a Node.js + Express.js project
- How EJS templates work with dynamic data
- Reading/writing files with the fs module
- Styling with Tailwind CSS
- Implementing routes to handle multiple actions
- Full-stack thinking with no database

---

## 🙋‍♂️ Author

Made with ❤️ by Aman Kumar Chaurasiya  
🔗 [GitHub](https://github.com/Amanc77)  
🔗 [LinkedIn](https://linkedin.com/in/amankumarchaurasiya)

---
