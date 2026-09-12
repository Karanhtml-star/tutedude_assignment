# Greenwood Public Library

A modern, responsive landing page for **Greenwood Public Library**, designed with a clean editorial style and a warm library-inspired visual theme.

The website presents the library's collections, gallery, membership plans, community values, events, contact information, and other important details in a single responsive webpage.

## ✨ Features

* 📚 Modern public library landing page
* 📱 Fully responsive design for mobile, tablet, and desktop
* 🧭 Responsive navigation with mobile menu
* 🗂️ Library sections and collections
* 🖼️ Image gallery with hover effects
* 👥 Membership plans
* 💬 Member testimonial section
* 📅 Upcoming events section
* 📍 Contact and location section
* 📊 Library statistics
* 🎨 Custom color palette and typography
* ✨ Scroll-based reveal animations
* 🖱️ Smooth scrolling navigation
* 🔗 Internal section navigation
* 📱 Mobile-friendly hamburger menu

## 🛠️ Technologies Used

* **HTML5** — Structure and content
* **Tailwind CSS** — Styling and responsive layout
* **JavaScript** — Interactive functionality and animations
* **CSS** — Custom styling through `style.css`
* **Unsplash / Pexels / other image sources** — Library imagery

Tailwind CSS is loaded through its CDN and customized with project-specific colors, fonts, animations, and theme settings.

## 🎨 Design

The website uses a warm, minimal visual style inspired by traditional libraries.

### Color Palette

| Color     | Purpose            |
| --------- | ------------------ |
| `#FAF8F2` | Paper / background |
| `#201F1C` | Primary text       |
| `#2E4131` | Forest green       |
| `#AD8342` | Brass accent       |
| `#C1785A` | Clay accent        |

The custom Tailwind configuration defines the project's `paper`, `ink`, `forest`, `brass`, and `clay` colors.

### Typography

The project uses:

* **Georgia / Cambria / Times New Roman** for headings
* **Helvetica / Arial / system sans-serif** for body text

This creates an editorial and traditional library-style appearance.

## 📐 Responsive Design

The website follows a **mobile-first responsive approach** using Tailwind CSS responsive utilities.

Examples include:

```html
grid-cols-2 sm:grid-cols-4
```

and:

```html
flex flex-col sm:flex-row
```

The navigation also switches between desktop and mobile versions using Tailwind's `md` breakpoint.

## 📖 Website Sections

### 1. Navigation

The navigation contains:

* Greenwood logo/name
* Library status
* Sections
* Gallery
* Membership
* Events
* Visit Us button
* Mobile hamburger menu

### 2. Hero Section

The hero introduces Greenwood Public Library with:

* Main heading
* Short description
* Collection CTA
* Membership CTA
* Library image
* Library statistics

The statistics include:

* 12,000+ books and periodicals
* 40+ years serving Greenwood
* Free Wi-Fi
* 6 distinct sections

### 3. Library Collections

The collections section presents six major categories:

1. Fiction & Literature
2. Children's Corner
3. Science & Nature
4. History & Biography
5. Arts & Design
6. Reference & Study

Each collection has its own hover effect and visual accent.

### 4. Gallery

The gallery showcases different areas of the library, including:

* Main Reading Room
* Fiction Collection
* Archive Wing
* Digital Media Lab

Images use responsive aspect ratios and hover zoom animations.

### 5. Why Greenwood Exists

A bento-style layout highlights the library's values:

* Community
* 40+ years of service
* Events
* Digital resources
* Accessibility
* Library history

### 6. About the Library

This section explains the history and philosophy of Greenwood Public Library, including its original building, reading rooms, collections, and free membership.

### 7. Membership

The membership section provides four membership options:

* Basic
* Student
* Family
* Library information / introduction card

Membership features include borrowing limits, loan periods, Wi-Fi access, study desks, and children's activities.

### 8. Testimonial

A testimonial section displays a library member's experience with the reading environment and library.

### 9. Contact

The contact section provides:

* Library address
* Opening hours
* Google Maps directions
* Email contact

### 10. Upcoming Events

The events section displays upcoming activities such as:

* Autumn Poetry Reading
* Saturday Storytime
* Local History Talk
* Author Meet

### 11. Footer

The footer contains:

* Library description
* Social media links
* Website navigation
* Library sections
* Contact details
* Privacy
* Terms
* Accessibility

## ⚡ JavaScript Functionality

JavaScript is used for interactive behavior.

### Mobile Navigation

The hamburger button opens and closes the mobile navigation menu.

```javascript
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
```

### Mobile Menu Auto-Close

The mobile menu automatically closes after a navigation link is selected.

## 📁 Project Structure

```text
greenwood-library/
│
├── index.html
├── style.css
└── README.md
```


## 📄 License

This project is intended for educational and portfolio purposes.

---

### 👨‍💻 Author

**Karan Singh Rawat**

