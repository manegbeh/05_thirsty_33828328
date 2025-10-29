# The Thirsty Student

**The Thirsty Student** is a dynamic web application built using **Node.js**, **Express**, and **EJS**.  
It simulates a drinks shop website with multiple pages — including an About page, Registration form, Search page, and a Customer Survey.

---

## Features

- **Homepage** — Displays a welcome message and a list of drinks sold at the shop.  
- **About Page** — Lists all London-based shop locations, each with a manager name and address.  
- **Search Page** — Simple search form for finding drinks by name and category.  
- **Register Page** — Allows customers to register with first name, last name, and email (with validation).  
- **Survey Page** — Collects customer information (name, email, age, and drink preferences) via a neat EJS form.  
- **Results Page** — Displays the survey responses clearly after submission.

---

## Technologies Used

- **Node.js** — Backend runtime  
- **Express.js** — Web framework for routing and middleware  
- **EJS (Embedded JavaScript)** — Template engine for dynamic pages  
- **CSS** — For form layout and page styling  

---

**Install Dependencies**

	npm install

---

## How It Works

- Express serves EJS templates dynamically from the /views folder.
- Static files like style.css are served from /public.
- Each page (home, about, register, etc.) has its own route defined in routes/main.js.
- Form submissions use either GET or POST depending on their purpose (e.g. /survey_submitted).

---
**URL**

	https://www.doc.gold.ac.uk/usr/133/
