# EliTech CreaTives

A modern, fully responsive marketing website for EliTech CreaTives, a student-led product studio building purposeful digital products from idea to impact.

Live demo: https://elitech-creatives.netlify.app/

---

## Highlights

- Fully responsive layout across mobile, tablet, and desktop.
- Dynamic loader experience with progress bar, animated arc, skip badge, and rotating tech quotes.
- Liquid flow scroll effect on sections and loader background.
- Clean dark theme with gold and blue accents.
- Accessible, semantic HTML with reduced motion support.
- No build step. Pure HTML, CSS, and vanilla JavaScript.

---

## Features

### Experience
- Smooth page fade-in after loader completes.
- Staggered section animations on load.
- Interactive hover states on cards, buttons, and icons.

### Sections
- Hero, About, What We Build, Products, Process, Founders, Vision, Careers, Connect, Footer.
- Product cards show Coming Soon status.
- Fixed navbar with scroll glass effect and mobile menu.

### Forms
- Careers application form (Formspree ready).
- Waitlist email form (Formspree ready).
- Modal feedback on submission.

---

## Loader Experience

- Animated arc loader that starts small and grows to a full circle over the loader duration.
- Rotating gradient arc for active loading feedback.
- Progress bar synced with loader time.
- Tech quotes rotate every 2 seconds.
- Skip badge lets users bypass the loader.

---

## Liquid Flow Scroll Effect

- Subtle, brand-colored gradient overlays animate per section as they enter view.
- Smooth motion applied to the loader background for continuity.
- Reduced motion support respects system preferences.

---

## Quick Start

Open index.html directly in a browser or run a local server.

Windows:
- start index.html

macOS:
- open index.html

Linux:
- xdg-open index.html

Optional local server:
- python -m http.server 8000

---

## Formspree Setup

Both forms already point to a Formspree endpoint. If you want to replace it with your own:

- Update the careers form action in index.html.
- Update the waitlist form action in index.html.

Detailed instructions: [FORMSPREE_SETUP.md](FORMSPREE_SETUP.md)

---

## Customization

### Colors
Edit CSS variables in styles.css:
- --accent (gold)
- --hero-blue (blue)
- --text-main / --text-muted

### Content
Update copy in index.html for:
- Headline and section text
- Product descriptions
- Founder bios and links

### Images
Replace assets in the assets folder:
- EliTech.png (favicon)
- eli.png, andy.png (founders)
- PLAT.jpg, veylo1.jpg (products)

---

## Project Structure

elitech/
- index.html
- styles.css
- README.md
- LICENSE
- FORMSPREE_SETUP.md
- DEPLOYMENT.md
- CONTRIBUTING.md
- assets/
  - EliTech.png
  - eli.png
  - andy.png
  - PLAT.jpg
  - veylo1.jpg

---

## Deployment

See full deployment options: [DEPLOYMENT.md](DEPLOYMENT.md)

---

## Contributing

See guidelines: [CONTRIBUTING.md](CONTRIBUTING.md)

---

## License

MIT License. See [LICENSE](LICENSE).
