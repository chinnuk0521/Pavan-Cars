<div align="center">

<br/>

# PAVAN CARS & TRAVELS

### *Arrive in Elegance. Command the Journey. Space for Everyone.*

**A premium, fully responsive car rental web experience — crafted for comfort, trust, and seamless bookings.**

<br/>

[![Live Website](https://img.shields.io/badge/🌐%20Live%20—%20pavantravels.vercel.app-1E3A5F?style=for-the-badge&logoColor=white)](https://pavantravels.vercel.app)

[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![WhatsApp](https://img.shields.io/badge/Booking-WhatsApp%20Integrated-25D366?style=flat-square&logo=whatsapp&logoColor=white)](https://wa.me/919908966682)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://pavantravels.vercel.app)

<br/>

</div>

---

## About the Business

**Pavan Cars & Travels** is a trusted, owner-operated chauffeured transport service founded in **Pandilapalli, Kadapa District, Andhra Pradesh**, by **T. Sravan Kumar**. The business offers professional, safe, and reliable travel for individuals, families, and corporate clients — covering city transit, outstation journeys, family tours, and executive fleet services.

The website is a direct digital extension of that same promise: premium, no-nonsense, and built to convert visitors into confirmed bookings — instantly via WhatsApp.

---

## What the Website Offers

The site is structured around a clear customer journey — from first impression to confirmed booking.

**Services Covered**
- **City Transit** — Sophisticated local commutes and daily engagements
- **Outstation Travel** — Long-distance journeys across India, fatigue-free
- **Family Tours** — Spacious vehicles for group travel and comfort
- **Corporate Fleet** — Discreet, professional executive transportation

**The Fleet**
- **Premium Sedans** — 4 passengers, 2 luggage bags. Ideal for corporate and airport transfers.
- **Luxury SUVs** — 6 passengers, 4 luggage bags. The go-to for outstation travel.
- **Premium MPVs** — 7 passengers, 3 luggage bags. Best for family group travel.

**Direct Contact**
- 📞 Direct Line: +91 9908966682
- 💬 WhatsApp Concierge: +91 9381286787
- 📍 Pandilapalli, Kamalapuram, Kadapa, AP

---

## Tech Stack

```
HTML5        →  Semantic structure, clean and accessible markup
CSS3         →  Flexbox, Grid, Custom Properties, Glassmorphism
JavaScript   →  Form validation, WhatsApp deep-link integration, mobile nav
Google Fonts →  Premium typeface for high-legibility, professional look
```

> Zero frameworks. Zero dependencies. Built lean for maximum speed and maintainability.

---

## UI / UX Design Philosophy

Every design decision was made to communicate **trust**, **reliability**, and **premium quality**.

- **Glassmorphism** — Soft blur effects and semi-transparent layers deliver a refined, modern feel without visual noise.
- **Color Palette** — Deep Royal Blue (`#1E3A5F`) as the primary tone anchors authority and trustworthiness, balanced against clean whites and soft grays.
- **Typography** — Inter (Google Fonts) keeps text sharp, legible, and professional across all screen sizes.
- **Responsive Navigation** — A full desktop nav that gracefully degrades into a hamburger menu with an off-canvas drawer on mobile — no janky behaviour, ever.
- **Bilingual Support** — Telugu (`తెలుగు`) language option catered to the regional audience.

---

## How to Run

### On Replit

1. Create a new Repl using the **"HTML, CSS, JS"** template.
2. Replace the default `index.html`, `style.css`, and `script.js` with files from this project.
3. Click **Run** — your site is live immediately.

### Locally

```bash
# No install needed. Just open the file:
open index.html

# Recommended: Use VS Code + Live Server extension
# for hot-reload during development
```

Compatible with **Chrome, Firefox, Safari, and Edge** — no build step, no config.

---

## Customisation Guide

### Changing Text and Content

All visible content lives in `index.html`. Every section is clearly structured for easy editing.

```html
<!-- Example: Change the hero tagline -->
<p class="subtext">Experience uncompromised comfort, profound safety...</p>
```

---

### Updating Phone Numbers

There are two numbers in use: `9908966682` (Direct Line) and `9381286787` (WhatsApp Concierge).

**Step 1 — Update visible text and `href` links in `index.html`:**

```html
<!-- Find and replace both the display text and the href -->
<a href="tel:9908966682">+91 9908966682</a>
```

**Step 2 — Update the WhatsApp booking destination in `script.js`:**

```javascript
// Locate this line inside the form submission logic
const whatsappNumber = '919908966682';

// Replace with: country code + number (no spaces or dashes)
const whatsappNumber = '91YOURNUMBER';
```

---

### Changing Vehicle Images

**Fleet section** — Update the `src` attribute on `<img>` tags in `index.html`:

```html
<img src="YOUR_IMAGE_URL_OR_LOCAL_PATH" alt="Vehicle Name" />
```

**Hero background** — Update the CSS in `style.css`:

```css
.hero {
  background-image: url('YOUR_HERO_IMAGE_URL');
}
```

Images can be hosted externally (Unsplash, Cloudinary, etc.) or served locally from the project folder.

---

## How WhatsApp Booking Works

No backend. No server. No database. The entire booking flow is handled client-side:

```
Customer fills the booking form
            ↓
JavaScript validates required fields + 10-digit phone format
            ↓
A structured booking message is assembled from form values
            ↓
WhatsApp opens in a new tab — message pre-filled, ready to send
            ↓
Business owner receives full booking details instantly
```

The form captures: **Guest Name**, **Contact Number**, **Pickup Address**, **Travel Date**, **Vehicle Class**, and optional **Concierge Notes**.

Zero missed bookings. Zero back-and-forth. Smooth for the customer, efficient for the operator.

---

## Project Structure

```
pavan-cars-travels/
│
├── index.html        ← All content, structure, and semantic layout
├── style.css         ← Styling, glassmorphism, animations, responsiveness
├── script.js         ← Interactivity, form validation, WhatsApp integration
└── README.md         ← This file
```

---

## Deployment

The live site is deployed on **Vercel** with automatic HTTPS and global CDN delivery.

🌐 **[pavantravels.vercel.app](https://pavantravels.vercel.app)**

---

## Proprietor

**T. Sravan Kumar**
Founder & Owner — Pavan Cars & Travels
Pandilapalli, Kamalapuram, Kadapa District, Andhra Pradesh, India

---

<div align="center">

© 2026 **Pavan Cars & Travels**. All rights reserved.

*The pinnacle of reliable passenger transport, serving India with distinction.*

</div>
