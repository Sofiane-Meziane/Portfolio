---
title: "Bladiway"
date: "2025-07-31"
summary: "A comprehensive carpooling ecosystem featuring a Flutter mobile app for users and a React-based admin dashboard for platform management."
tags: ["Flutter", "Firebase", "Google Maps", "React", "Node.js", "Mobile Development"]
repo: "https://github.com/Sofiane-Meziane/Bladiway"
featured: true
---

## Project Overview
Bladiway is a modern carpooling platform designed to promote sustainable and intelligent mobility. It connects drivers and passengers through a secure, intuitive mobile experience while providing administrators with powerful tools to manage the platform.

## The ecosystem
The solution consists of two main components:
1.  **Mobile App (Flutter):** A cross-platform app (iOS/Android) for end-users to book rides, publish trips, and communicate.
2.  **Admin Dashboard (React):** A web-based control panel for user verification, complaint handling, and analytics.

## Technical Approach

### 1. Mobile Application (Flutter)
-   **State Management:** Utilized **Provider** for efficient state handling across the app.
-   **Backend & Auth:** Built on **Firebase** (Authentication, Firestore, Storage) for real-time data syncing and secure user management.
-   **Maps & Location:** Integrated **Google Maps SDK** and **Geolocator** for precise pickup/drop-off selection and route visualization.
-   **Communication:** Implemented specific features for real-time messaging and push notifications using **Firebase Cloud Messaging**.
-   **Localization:** Fully multilingual support (French, English, Arabic, Tamazight) via **Easy Localization**.

### 2. Admin Dashboard (React)
-   **Framework:** Built with **React.js** for a responsive and dynamic user interface.
-   **Management Features:** customized interfaces for validating identity documents, monitoring reported issues, and viewing platform statistics (recharts).

## Key Features
-   🔐 **Secure Authentication:** Identity verification to build community trust.
-   🚗 **Ride Management:** Seamless booking, publishing, and cancellation flows.
-   💬 **In-App Chat:** Instant communication between driver and passenger.
-   🔔 **Real-time Notifications:** Updates on booking status and messages.
-   ⭐ **Rating System:** User feedback to ensure quality service.

## Visuals
![Banner](https://github.com/Sofiane-Meziane/Bladiway/blob/main/assets/images/banniere%20readme%2001.png?raw=true)

### Mobile App Interface
| Login / Sign Up | Interactive Map | Messaging |
| :---: | :---: | :---: |
| ![Login Screen](https://github.com/Sofiane-Meziane/Bladiway/blob/276df26704bd9350ee89477b731b26d119aff16e/assets/images/ecran%20inscription.png?raw=true) | ![Map](https://github.com/Sofiane-Meziane/Bladiway/blob/23054e33c571047654dd7d3331bc6562825dcd2c/assets/images/carte01.png?raw=true) | ![Chat](https://github.com/Sofiane-Meziane/Bladiway/blob/23ad5a4dd6df459df89f77610ff0ae58b6febdd8/assets/images/messagerie.png?raw=true) |

| Home Screen | Reservations | Settings |
| :---: | :---: | :---: |
| ![Home](https://github.com/Sofiane-Meziane/Bladiway/blob/8bf2a0c386b71506f19ee499303f23bcd561a851/assets/images/ecran%20d'accueil05.png?raw=true) | ![Bookings](https://github.com/Sofiane-Meziane/Bladiway/blob/1142e034f8c33dccf058925206fb511f18684df6/assets/images/reservations%20reademe.png?raw=true) | ![Settings](https://github.com/Sofiane-Meziane/Bladiway/blob/17ec91f586825f69398c471f7288f5c185f526ad/assets/images/parametres.png?raw=true) |