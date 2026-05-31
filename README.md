# 🛒 Amazon Clone — React

A fully functional Amazon.in clone built with **React.js**, converted from a static HTML/CSS project. Features a login page, product browsing, search, add-to-cart, and a hero carousel.

---

## 🚀 Features

- **Login / Register Page** — Amazon-style authentication UI with validation
- **Home Page** — Unlocks after login
- **Hero Carousel** — Auto-rotating banner with 3 slides
- **Category Cards** — Home decor, appliances, deals sections
- **Product Grid** — With ratings, prices, discounts
- **Search** — Filter products by name or category
- **Add to Cart** — With cart count badge and toast notifications
- **Responsive** — Works on mobile and desktop
- **Logout** — Returns to login page

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 | UI framework |
| JavaScript (ES6+) | Interactivity & state |
| CSS Modules | Component-scoped styling |
| Font Awesome 6 | Icons |

---

## 📁 Project Structure

```
amazon-clone/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LoginPage.js / .css
│   │   ├── HomePage.js / .css
│   │   ├── Navbar.js / .css
│   │   ├── HeroSection.js / .css
│   │   ├── CategoryCards.js / .css
│   │   ├── ProductSection.js / .css
│   │   ├── ProductCard.js / .css
│   │   ├── Footer.js / .css
│   │   └── CartToast.js / .css
│   ├── data/
│   │   └── products.js
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/amazon-clone.git

# Navigate to the project folder
cd amazon-clone

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at **http://localhost:3000**

---

## 🔑 Login

Enter **any email + password (6+ characters)** to log in. No real backend — this is a frontend-only demo.

---

## 📸 Screenshots

| Login Page | Home Page |
|-----------|-----------|
| Amazon-style sign-in/register form | Full storefront with search, products, cart |

---

## 🌐 Deployment

```bash
npm run build
```
Then deploy the `build/` folder to **GitHub Pages**, **Netlify**, or **Vercel**.

### GitHub Pages (quick deploy)
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d build"
# Add "homepage": "https://YOUR_USERNAME.github.io/amazon-clone"
npm run build && npm run deploy
```

---

## 📝 License

This is a **educational/portfolio project** — not affiliated with Amazon.

---

Made with ❤️ using React
