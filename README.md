# Regency Care Group Website

A professional, responsive website for Regency Care Group - private caregiver referrals for Coastal Orange County families.

## Built With

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with CSS variables, flexbox, and grid
- **Vanilla JavaScript** - No frameworks or dependencies
- **Google Fonts** - Playfair Display (serif) and Lato (sans-serif)

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Interactive testimonial carousel with auto-rotation
- ✅ Fade-in animations on scroll
- ✅ Mobile hamburger menu
- ✅ Custom scrollbar styling
- ✅ Optimized for GitHub Pages deployment
- ✅ No build process required

## File Structure

```
regency-html-version/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── hero-bg.jpg         # Hero section background image
├── handshake.jpg       # Process section image
├── 404.html            # GitHub Pages 404 handler
├── .nojekyll           # Prevents Jekyll processing
└── README.md           # This file
```

## Deployment to GitHub Pages

### Option 1: Direct Upload

1. Go to your GitHub repository
2. Upload all files from this directory
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click Save
7. Your site will be live at `https://[username].github.io/[repository-name]/`

### Option 2: Using Git Commands

```bash
# Navigate to this directory
cd regency-html-version

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: HTML/CSS/JS website"

# Add remote repository
git remote add origin https://github.com/Cefress001/regency-care-group-ready.git

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## Local Development

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #1B2A41;    /* Navy blue */
    --accent: #C5A059;     /* Gold */
    --cream: #FAF9F6;      /* Background */
}
```

### Content

- **Text content**: Edit directly in `index.html`
- **Testimonials**: Update the `testimonials` array in `script.js`
- **Images**: Replace `hero-bg.jpg` and `handshake.jpg` with your own

### Contact Information

Update phone number and email in:
- Navigation "SCHEDULE" button
- Hero section buttons
- CTA section buttons
- Footer contact information

Current: (424) 332-8049 | info@regencycaregroup.com

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies (except Google Fonts)
- Minimal JavaScript
- Optimized images
- Fast load times
- SEO-friendly semantic HTML

## License

© 2026 Regency Care Group, LLC. All rights reserved.

## Support

For questions or issues, contact: info@regencycaregroup.com
