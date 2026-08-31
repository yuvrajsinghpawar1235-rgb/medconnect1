# MedConnect — Healthcare Appointment & Patient Management Platform

MedConnect is a responsive healthcare appointment frontend built with modern JavaScript (ES6+), HTML5, and CSS3. The application features dynamic doctor search/filter/sort capabilities, slot availability selection, appointment management (booking, rescheduling, cancellation), persistent session management, role-based dashboards, and graceful offline/loading/error handling.

---

## 🚀 Live Demo & Repository
- **Live Netlify Deployment:** [https://medconnect-demo.netlify.app](https://medconnect-demo.netlify.app)
- **GitHub Repository:** [https://github.com/your-username/medconnect](https://github.com/your-username/medconnect)

---

## 🔑 Demo Credentials

| Role | Email | Password |
| :--- | :--- | :--- |
| **Patient** | `patient@demo.com` | `password123` |
| **Doctor** | `doctor@demo.com` | `password123` |

---

## ✨ Features
- **Authentication Simulation:** Simulated session persistence using `localStorage`. Screen protection and role-based navigation bar adjustments.
- **Doctor Discovery:** Full text search, multi-criteria filtering (specialization, consultation mode), and sorting by fee, rating, or experience.
- **Appointment Scheduling:** Real-time slot availability display with visual indication for selected, available, and booked slots.
- **Appointment Management:** View, reschedule, or cancel appointments with confirmation modal alerts and toast notifications.
- **Robust Error & Loading States:** Skeleton loader placeholders during asynchronous requests, empty state indicators, and API failure fallbacks.
- **Responsive SaaS UI:** Healthcare-themed design system using CSS variables, flexbox, and mobile-friendly grids.

---

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript ES6+ (Modules, Fetch API, Async/Await)
- **Mock Server:** `json-server` (Local) / REST API mock service
- **Deployment:** Netlify

---

## 📁 Folder Structure