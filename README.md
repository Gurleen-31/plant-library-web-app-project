# 🌿 Plant Library App

A modern and responsive plant catalog application built using *React.js* and *Node.js*, allowing users to explore, search, and filter a curated list of indoor plants based on their care level. The project simulates a real-world API setup, is styled with clean CSS, and features a user-friendly interface for nature lovers.

---

## 👨‍💻 Developed By

*Gurleen Kaur*

---

## ✨ Features

### 1. 📋 Display Plant Data
- On page load, the app fetches plant data from a mock API endpoint (local JSON file via Express backend).
- Displays plant information in a grid layout using reusable PlantCard components.
- Each card shows:
  - *Common Name*
  - *Scientific Name*
  - *Image*

### 2. 🔍 Search & Filter Functionality
- A *real-time search bar* filters plants based on the typed common name.
- *Filter buttons* (Easy / Medium / Hard) allow users to filter by care level.
- Filter toggles restore full list upon deselection.

### 3. 🔎 View Plant Details
- Clicking a PlantCard opens a *modal* to show more details:
  - Full image
  - Description
  - Care level
  - Scientific name
- The modal can be closed easily to return to the plant grid.

---

## 🧰 Tech Stack

| Layer        | Technology                  |
|--------------|------------------------------|
| Frontend     | React.js (Vite, Hooks)       |
| Backend      | Node.js + Express.js         |
| Styling      | Plain CSS                    |
| Data Source  | Mock API (plants.json)     |
| State Mgmt   | useState, useEffect      |
| Assets       | Static images in /public/images |
| Version Ctrl | Git & GitHub                 |

---

## 📦 How to Run the App Locally

### Step 1: Clone the Repository

```bash
git clone https://github.com/Gurleen-31/plant-library-web-app-project
cd plant-library-app
```

### Step 2: Inside Frontend Folder
```bash

cd ../frontend
npm install
npm run dev

```
### Step 1: Inside Backend Folder
```bash

cd backend
npm install
npm start
```