# Pavan Cars & Travels Website

A premium, modern, and fully responsive website for Pavan Cars & Travels, offering car rental services for local, outstation, and family trips.

## Tech Stack
- HTML5 (Semantic Structure)
- CSS3 (Flexbox, Grid, Custom Properties, Glassmorphism)
- Vanilla JavaScript (Interactivity, WhatsApp Integration)
- No Heavy Frameworks

## How to Run Locally or on Replit

### On Replit:
1. Create a new Repl and choose "HTML, CSS, JS" template.
2. Replace the contents of the default `index.html`, `style.css`, and `script.js` with the corresponding files from this project.
3. Click the **Run** button.

### Locally:
1. Download or clone this folder.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).
3. (Optional) Run formatting through a local development server like VS Code's "Live Server" extension for a better development experience.

## How to Edit Content

### Changing Text and Information
All textual content is easily editable in `index.html`. 
For example, to change the tagline, find the `<p class="subtext">` tag in the Hero Section.

### Updating Phone Numbers
1. **Visual Updates**: Search for `9908966682` or `9381286787` in `index.html` and replace them. Be sure to update both the visible text and the `href="tel:..."` link.
2. **WhatsApp Integration**: To change the WhatsApp booking number, open `script.js` and locate this line within the form submission logic:
   ```javascript
   const whatsappNumber = '919908966682';
   ```
   Replace `919908966682` with the new country code + phone number.

### How to Change Images
1. Open `index.html`.
2. Locate the `<img>` tags (in the Fleet section) or the `background-image` CSS rule for the `.hero` class in `style.css`.
3. Replace the URL inside the `src` attribute or `url()` with your new image URL or local path.

## How WhatsApp Booking Works

1. The user fills out the booking form in the "Book" section.
2. The form uses JavaScript to validate required fields and the 10-digit phone number.
3. Upon clicking "Book via WhatsApp", `script.js` prevents the default form submission.
4. It extracts the values and constructs a pre-filled text message.
5. It then opens a new tab directed to `https://wa.me/{number}?text={message}`, pushing the user directly into a chat with the business owner, ready to send the booking details.

## UI / UX Highlights
- **Glassmorphism**: Soft blur effects and semi-transparent backgrounds for a premium feel.
- **Color Palette**: Deep Royal Blue (#1E3A5F) for trust, offset with clean whites and soft grays.
- **Typography**: Uses 'Inter' from Google Fonts for high legibility and a modern look.
- **Responsive Navigation**: Full desktop nav that gracefully degrades into a hamburger menu with an off-canvas drawer on mobile.
