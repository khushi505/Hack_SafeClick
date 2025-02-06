# Hack_SafeClick

Hack SafeClick is a **cutting-edge Chrome extension, integrated with dashboard** designed to protect users from phishing, scam, and malicious websites in real-time. Leveraging **MERN stack** and an advanced **XGBoost model**, the extension analyzes website URLs based on multiple factors like **past URL behavior, domain checks, and clone detection** to provide instant safety alerts. The extension also includes a **website clone detection system**, utilizing **HTML structure analysis, visual similarity (SSIM), and WHOIS verification** to identify fraudulent sites. With an intuitive interface, automated detection, and robust backend powered by **Express API**, Hack SafeClick ensures a **seamless and secure browsing experience**, keeping users protected from cyber threats effortlessly.

1. Chrome Extension and Dashboard: Created a fully operational Chrome extension with an intuitive interface and a comprehensive dashboard for monitoring safety alerts and analytics.

2. Seamless Development and Deployment: Successfully built, integrated, and deployed an optimized machine learning model, ensuring efficient real-time analysis and user protection.

## To start extension:
1. Open Developer Tools
2. Unpack Extension by dist folder
```
npm run build
```

## To start dashbaord client:
```
cd frontend
npm run dev
```

## To start dashbaord server:
```
cd backend
cd api
nodemon server.js
```

# Core Detection Features
1. Malicious URL Detection (fake, phishing, spam, scam, malicious URLs)
2. Clone URL Detection (similar type of urls - unrecognised by users)
3. Clone Website Detection (similar cloned visuals of websites - indistinguishable by users) 

## Technical Stack
![Screenshot 2025-02-06 100559](https://github.com/user-attachments/assets/4790f7f5-d766-421e-85e3-df9ccc6266ca)


## Tools
![Screenshot 2025-02-06 102151](https://github.com/user-attachments/assets/0900b2f0-ad2f-4f11-a22c-544cde31fc5c)

## Malicious URL Detection Model

https://github.com/tejash05/SafeClick

## Clone URL Detection Model
https://github.com/khushi505/Clone_Web_Model

## Clone Website Detection Model
https://clone-6nb2.onrender.com/check-clone

## Extension 
https://github.com/HARSHSINGH3118/SafeClick



