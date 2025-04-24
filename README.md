# 🌍 Cloud Quiz App - Guess the Capital

This is a fun, interactive capital city quiz web app built with **HTML**, **CSS**, and **JavaScript**. It tracks your score, shows real-time feedback, and ends with a celebratory game over message. Built with Docker and hosted on IBM Cloud Code Engine.

---

## 🚀 Features

- 🧠 Random capital city questions
- 🟢 Live score tracking
- ✅ Feedback on correct/wrong answers
- ⏭️ Manual control with "Next Question" button
- 🎉 Game Over screen with final score
- 🎨 Animated, responsive UI (pure CSS)

---

## 🐳 Run Locally with Docker

```bash
docker build -t quiz-app .
docker run -d -p 8080:80 quiz-app

Then open in your browser:
👉 http://localhost:8080

☁ Deploy to IBM Code Engine (From GitHub)
Go to 👉 https://cloud.ibm.com/codeengine

Click Create Project → Give a name → Click Create

Click Create App

Choose Source code repository

Paste your GitHub repo URL:
https://github.com/YOUR_USERNAME/cloud-quiz-app

Click Next → Use Dockerfile → Port: 80

Click Create & Deploy

That’s it — your quiz app will be live! 🎯

🛠 Technologies Used
HTML5, CSS3, JavaScript (Vanilla)

Docker

IBM Cloud Code Engine
