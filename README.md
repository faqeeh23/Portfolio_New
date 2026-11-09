# Mohammed Al-faqeeh - Portfolio

A modern, responsive, and production-ready personal portfolio website showcasing my skills, professional experience, and projects as a Full Stack Web Developer.

## 🚀 Live Demo

Check out the live website: [mohemmed-alfqeeh-portfolio.vercel.app](https://mohemmed-alfqeeh-portfolio.vercel.app) || https://faqeeh23.github.io/Portfolio_New/

---

## 🛠️ Tech Stack & Tools

* **Languages:** JavaScript (ES6+), TypeScript, Python, PHP, SQL
* **Frontend:** React.js, Next.js, HTML5, CSS3, Responsive Design
* **Backend:** Node.js, Express.js, FastAPI, Laravel, RESTful APIs
* **Databases & Cloud:** MySQL, PostgreSQL, Supabase, Firebase Firestore, MongoDB, Redis, Cloudinary
* **Tools & Infrastructure:** Git & GitHub, Jira, Vercel Deployment, AI Prompt Engineering

---

## 💼 Featured Experience & Projects

**Current training:** Coding Trainee at Orange Coding Academy, September 1, 2026 – Present.

1. **Lynk Jo Platform:** An e-commerce marketplace connecting local Jordanian fashion merchants with customers through web and mobile apps *(React, FastAPI, Firebase, Redis, Cloudinary, AI/ML)*.
2. **Face Verified Exam Attendance System:** My graduation project at Yarmouk University, automating student check-in and verification using facial recognition.
3. **Karak Chamber of Commerce System:** Full-stack website and management system built with React, Next.js, Node.js, and PostgreSQL.

4. **SkillPath AI (in progress):** An adaptive learning platform being developed with React, Laravel, and MySQL.
5. **ecommerce project:** A fashion e-commerce project built with object-oriented PHP and MySQL, featuring reviews and AI features for administrators.
6. **Dental Appointment System:** A dental appointment system with role-based access and appointment booking, built with React, PHP PDO, and MySQL.
7. **EDU-TRACK:** An education tracking project built with React and JSON Server. [Live demo](https://edu-track-ngfk.onrender.com/).

---

## 📂 Project Structure

```text
portfolio-new/
├── index.html        # Main HTML structure
├── style.css         # Custom styling and design
├── script.js         # Interactive features and animations
└── images/           # Logos, icons, and profile photos

```

## Local preview

Serve this folder with any static HTTP server. This plain HTML/CSS/JavaScript site has no package installation or build step.

New project details use the supplied descriptions and URL. SkillPath AI is in progress. No completion status is asserted for the other additions, and projects without supplied URLs have no demo links.

The SkillPath AI, ecommerce project, Dental Appointment System, and EDU-TRACK cards identify projects developed during Orange Coding Academy training. Orange logo source: [official Boosted brand assets](https://boosted.orange.com/docs/5.3/about/brand/).

Yarmouk University logo source: https://www.yu.edu.jo/images/yu-text1ORG.png (official university website).

## Project detail popups

Click a project card or its View project details button to open its details. Website links keep their direct navigation. The dialog supports keyboard access, Escape, a close button, and backdrop dismissal.

Project feature descriptions and optional screenshots are configured in `projectDetails` in `script.js`, in the same order as the cards (matched by `data-project`). To add real screenshots, place them under `images/` and add objects such as `{ src: "images/project-screen.png", alt: "Description of the project screen" }` to that project's `images` array. Empty galleries stay hidden. Real project screenshots are included under `images/projects/`; provenance is recorded in `images/projects/SOURCES.md`.

## Interface and interaction

The dark-and-gold layout uses the loaded Instrument Serif display face and Plus Jakarta Sans body face. Real screenshot previews lead each project card. Project filters separate Orange Academy, graduation, and in-progress work. A mobile menu supports Escape and keyboard focus. Content stays visible without scroll animations and respects reduced-motion preferences.

Project dialogs show one screenshot at a time, with previous/next buttons, left/right arrow keys, an image counter, and a full-size image link. The close control stays outside the scrolling content. All original project descriptions, supplied demo URLs, academy attribution, and in-progress statuses are preserved.

Contact fields have connected labels, required validation, and named values (including the message). The phone link now matches the displayed number. The existing Formspree destination remains unchanged.

Validation: reviewed at 320, 390, 768, 1024, and 1440 pixel widths; no horizontal overflow; all seven dialogs, all four filters, gallery switching, Escape/focus restoration, and mobile navigation checked in-browser. JavaScript syntax, HTML nesting, unique IDs, local assets, and Git whitespace checks pass. No contact messages were submitted during verification.
