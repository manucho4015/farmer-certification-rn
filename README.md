# AgriCert – Farmer Certification App

This is a React Native (Expo) mobile application built as part of a take-home assignment.  
The app demonstrates a simple certification workflow between **farmers** and an **admin**.

---

## 🚀 Features

### Farmer

- Register with basic details (name, farm size, crop type)
- Log in using registered name
- View certification status
- See when their status was last updated (relative time)

### Admin

- View list of registered farmers
- Approve or reject farmer certification
- Status updates are reflected instantly on the farmer side

---

## 🧱 Tech Stack

- **React Native (Expo)**
- **TypeScript**
- **Expo Router** for file-based navigation
- **Redux Toolkit** for state management
- **AsyncStorage** for local persistence
- **NativeWind (Tailwind CSS)** for styling

---

## 📂 App Architecture

- Global state (Redux) manages:
  - Current user role
  - Registered farmers
  - Current logged-in farmer
- Data is persisted using AsyncStorage and restored on app launch
- Routing decisions are handled at the layout level using Expo Router

---

## 🧠 Design Decisions

- **Redux Toolkit** was used to manage global application state such as user role and registered farmers, keeping state predictable and easy to reason about.
- **AsyncStorage** is used to persist data locally in place of a backend, allowing the app to restore state seamlessly across restarts.
- **Expo Router** handles role-based navigation at the layout level, avoiding screen-level redirects and keeping routing logic centralized.
- Authentication logic is intentionally simple to match the scope of the assignment and keep the user flow clear.
- The app structure was designed to allow a backend to be introduced later with minimal refactoring.

---

## ▶️ Running the App

1. Install dependencies

```bash
npm install
```

2. Start the app

   The app can be run using Expo Go, Android Emulator, or iOS Simulator.

```bash
npx expo start
```

### 📸 Screenshots

The following screenshots demonstrate the main user flows within the application.

1. Role Selection Page

   <img src="./assets/images/role-selection.jpeg" alt="Role selection screenshot" width="300" height='500' />

2. Admin Dashboard

   <img src="./assets/images/admin.jpeg" alt="admin dashboard screenshot" width="300" height='500' />

3. Farmer Certification View

   <img src="./assets/images/farmer-dashboard.jpeg" alt="farmer certification view screenshot" width="300" height='500' />

4. Login Page

   <img src="./assets/images/login.jpeg" alt="login page screenshot" width="300" height='500' />

5. Registration Page

   <img src="./assets/images/registration.jpeg" alt="registration page screenshot" width="300" height='500' />

---

## 📝 Notes

- An optional backend was considered for this assignment. However, given the time constraints, the focus was placed on delivering a complete, stable mobile experience with clear state management and persistence.
- The current architecture allows a backend to be added easily in the future by replacing the AsyncStorage layer with API calls.
