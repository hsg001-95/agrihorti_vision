# 🌿 AgriHorti Vision - Smart Crop Disease Detection Web App

---

## 👥 Team Members
- Hiyansh Sharma
- Mukul Sharma
- Anmol Tyagi
  

---

## 📋 Project Description

**AgriHorti Vision** is a smart and lightweight web application aimed at assisting farmers and agriculturists by detecting crop diseases through image analysis.  
The user can simply upload a picture of the crop, and the system will predict the disease based on a pre-trained AI model, providing:

- Disease identification
- Symptoms description
- Recommended treatments
- Future care suggestions
- Necessary medicines
- Preventive precautions

Additionally, the app maintains a **history of past reports** for easy access and monitoring of crop health over time.

AgriHorti Vision is developed to work fully **offline after first load**, ensuring accessibility even in remote areas with low internet connectivity.

---

## 🎥 Video Explanation
[👉 Click here to watch the full project demo](#)

*(Replace `#` with your actual YouTube video link once available.)*

---

## 🚀 Features
- 🌱 **Simple Crop Image Upload**
- 🧠 **Real-time AI-based Disease Prediction**
- 📋 **Detailed Disease Report Generation**
- 🗂 **Automatic Saving of Past Reports**
- 📜 **Full Report History Tracking**
- 📄 **Downloadable PDF Reports**
- ⚡ **Fully Frontend-Based (No Server Required)**
- 🖥 **Mobile and Desktop Responsive Design**

---

## 🛠 Technologies Used

| Technology | Usage |
|------------|-------|
| **HTML5** | Structuring web pages |
| **CSS3** | Styling and making responsive layouts |
| **JavaScript (Vanilla)** | Frontend logic and dynamic interaction |
| **TensorFlow.js** | Running the AI model on the client-side |
| **Teachable Machine** | Easy AI Model training without complex coding |
| **html2pdf.js** | Exporting disease report as downloadable PDF |
| **LocalStorage API** | Storing latest reports and report history in browser memory |
| **Netlify** | Free hosting and deployment platform |

---

## 📂 Project Folder Structure
AgriHortiVisionWeb/
├── index.html
├── analyze.html
├── report.html
├── history.html
├── css/
│   └── style.css
├── js/
│   ├── model.js
│   ├── analyze.js
│   ├── report.js
│   └── history.js
├── model/
│   ├── model.json
│   ├── weights.bin
│   └── metadata.json
├── assets/
│   ├── logo.png

---

## 🧩 How the App Works (Simple Flow)

1. **User opens homepage** ➔ Clicks "Start Analyzing Crops"
2. **User uploads a crop image** ➔ Model predicts disease
3. **Report automatically generated** ➔ Shows symptoms, treatments, medicines, precautions
4. **Report stored** ➔ User can download as PDF or revisit later
5. **All previous reports saved** ➔ Shown under History section

---

## 📥 How to Run Locally

1. **Download or Clone** this project repository to your computer.
2. **Open** the `index.html` file directly in any modern browser (Chrome, Edge, Firefox).
3. **No server setup required** — it's a pure frontend app.

---
  
## 🌐 Hosting / Deployment

We recommend hosting on **Netlify** for a free, fast, and easy deployment.

### 👉 Deploy Steps:

1. Go to [https://www.netlify.com/](https://www.netlify.com/).
2. Sign Up (Free) and Login.
3. Click "**Add New Site**" ➔ "**Import an existing project**".
4. Upload your complete project folder (`AgriHortiVisionWeb/`).
5. Click **Deploy**.
6. Netlify will give you a **Live Link** like:  
   ➔ `https://agrihorti-vision.netlify.app`

✅ Now your app will be available publicly!

---

## 📋 Future Improvements 
- ✨ Add multi-crop disease support (vegetables, fruits)
- ✨ Add user registration & dashboard for personalized tracking
- ✨ Real-time notification if same disease detected frequently
- ✨ Mobile App version using Flutter or React Native

---

---

## ✨ Thank You for Exploring AgriHorti Vision! ✨

Proudly built with ❤️ for agriculture empowerment 🌱

