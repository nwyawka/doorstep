# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Doorstep Design** - Luxury holiday decoration service website for the Annapolis, Baltimore, and DC Metropolitan areas.

**Key Features:**
- Single-page elegant Christmas 2025 themed website
- Interactive Google Maps showing service areas
- Social media integration (10 platforms)
- Responsive mobile-first design
- Clean, refined aesthetic with fine lines and cursive fonts
- Professional service showcase and portfolio gallery

**Development Context:**
- Single developer project
- Developer: Matthew O'Neil (nwyawka@gmail.com)
- Domain: doorstep.design
- GitHub Pages deployment
- Built with Vite 4.5.3 + Vanilla JavaScript
- All code commits go to GitHub repository

**Branding:**
- Business Name: **Doorstep Design**
- Tagline: **"Curated Seasonal Décor, Delivered to Your Doorstep"**
- Font: Brush Script MT (cursive) for elegant branding

---

## Technical Stack

### Frontend
- **Framework**: Vanilla JavaScript (ES6+ modules)
- **Build Tool**: Vite 4.5.3
- **Styling**: Pure CSS with CSS Variables
- **Hosting**: GitHub Pages
- **Domain**: doorstep.design

### Tech Stack
```
- Build: Vite 4.5.3
- JavaScript: Vanilla ES6+
- CSS: Custom with variables
- Hosting: GitHub Pages
- Deployment: GitHub Actions
- Maps: Google Maps Embed API
```

### Build Configuration
- **vite.config.js**: Standard Vite configuration
- **Output**: `dist/` directory
- **Dev Server**: Port 3000

### Monetization
- NONE - Service-based business

---

## Current Features

### Core Functionality
1. **Hero Section** - Full-screen Christmas-themed hero with call-to-action
2. **Services Section** - 6 service cards (no icons, clean text-based)
3. **Service Areas Maps** - Interactive Google Maps for 3 regions
4. **Gallery Section** - 6-image portfolio with hover effects
5. **About Section** - Company info with service area list
6. **FAQ Section** - 9 expandable accordion items
7. **Contact Section** - Form with email integration
8. **Footer** - Navigation links and company info

### Navigation & Pages
**Single-Page Application** with 7 sections:
1. Home (Hero)
2. Services
3. Service Areas (with maps)
4. Gallery
5. About
6. FAQ
7. Contact

**Navigation Features:**
- Fixed top navigation bar
- Smooth scroll to sections
- Mobile hamburger menu
- Active section highlighting
- Social media bar below nav

---

## UI/UX Design

### Design Philosophy
- **Elegant & Refined**: Clean lines, minimal shadows
- **Fine Borders**: 1px borders throughout (not blocky)
- **Cursive Accents**: Brush Script MT for headings and branding
- **Sophistication**: Subtle effects, breathing room
- **Professional**: High-end aesthetic for luxury services

### Color Palette
```css
Primary Colors:
- Deep Forest Green: #0F5132
- Emerald Green: #198754
- Dark Pine: #0A3622

Accent Colors:
- Rich Cranberry Red: #C41E3A
- Bright Red: #DC3545

Gold Accents:
- Antique Gold: #D4AF37
- Bright Gold: #FFD700

Neutrals:
- White: #FFFFFF
- Cream: #FAF9F6
- Light Gray: #F8F9FA
- Gray: #6C757D
- Dark Gray: #343A40
```

### Typography
- **Primary Font**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Heading Font**: Georgia, 'Times New Roman', serif
- **Cursive Font**: 'Brush Script MT', cursive (for branding and special elements)
- **Font Weights**: 300 (light), 400 (normal), 500 (medium)
- **Letter Spacing**: 0.3px - 1px for refined look

### Key UI Components

#### 1. Navigation Bar
**Components**:
- Brand name: "Doorstep Design" (cursive)
- Navigation links: Home, Services, Service Areas, Gallery, About, FAQ
- Contact Us button (outlined, 1px border)
- Mobile hamburger menu
- Fixed position with 1px bottom border

#### 2. Social Media Bar
**Components**:
- Label: "Spread Holiday Cheer:" (italic, light weight)
- 10 Social Buttons: Facebook, Instagram, Pinterest, Twitter, LinkedIn, TikTok, YouTube, WhatsApp, Email, Copy Link
- Fixed position below navbar
- Dark green background (#0A3622)

**Features**:
- Circular icon buttons
- Hover effects with gold accent
- Share functionality via JavaScript

#### 3. Service Cards
**Layout**: 3-column grid (responsive)
**Styling**:
- White background
- 1px fine borders
- No icons (text-based only)
- Hover: Lift effect with gold border
**Content**: 6 services

#### 4. Service Areas Maps
**Layout**: 3-column grid (responsive)
**Regions**:
1. Annapolis & Anne Arundel County
2. Baltimore & Baltimore County
3. Washington DC Metro

**Features**:
- Embedded Google Maps
- 300px height (250px on mobile)
- Hover effects
- Descriptive text below each map

#### 5. Gallery
**Layout**: 3-column grid of images
**Styling**:
- Aspect ratio 4:3
- Hover overlay with caption
- Image zoom on hover
**Images**: Currently placeholder (Unsplash)

#### 6. FAQ Section
**Layout**: Single column list
**Styling**:
- No card borders, just dividing lines (1px)
- Expandable accordion
- Hover background change
**Content**: 9 questions

#### 7. Contact Form
**Fields**: Name, Email, Phone, Service Interest, Message
**Styling**:
- Glassmorphism effect on dark background
- 1px borders on inputs
- Opens email client on submit

---

## File Structure

```
doorstepDesign/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── styles/
│   │   └── main.css           # Main stylesheet (~950 lines)
│   └── main.js                # JavaScript functionality (~200 lines)
├── index.html                 # Main HTML file (~470 lines)
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
├── CLAUDE.md                 # This file
├── README.md                 # Project documentation
├── DEPLOYMENT.md             # Deployment guide
└── .gitignore                # Git ignore rules
```

---

## CSS Architecture

### Main Stylesheet: `src/styles/main.css`

**Structure:**
1. CSS Variables (colors, spacing, transitions)
2. Reset & Base Styles
3. Utility Classes
4. Navigation
5. Social Media Bar
6. Hero Section
7. Services Section
8. Service Areas Map Section
9. Gallery Section
10. About Section
11. FAQ Section
12. Contact Section
13. Footer
14. Responsive Design (@media queries)

**Key Design Elements:**
- Border Radius: 2px (minimal)
- Box Shadows: Very subtle (0.06 - 0.1 opacity)
- Borders: 1px throughout
- Transitions: 0.2s - 0.5s
- Font Weights: 300 - 400 (light and normal)

---

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing Checklist
Before committing:
- [ ] Test all navigation links (smooth scroll)
- [ ] Verify responsive design (mobile, tablet, desktop)
- [ ] Test FAQ accordion (expand/collapse)
- [ ] Test contact form (opens email client)
- [ ] Test social media share buttons
- [ ] Check mobile hamburger menu
- [ ] Verify all images load
- [ ] Check console for errors (F12)
- [ ] Test on different browsers
- [ ] Verify maps load correctly

---

## Git & Deployment

### GitHub Repository
- **URL**: https://github.com/nwyawka/doorstep
- **Branch**: main
- **Hosting**: GitHub Pages
- **Custom Domain**: doorstep.design

### Deployment Workflow
**File**: `.github/workflows/deploy.yml`

**Process**:
1. Push to `main` branch triggers workflow
2. GitHub Actions runs `npm run build`
3. Deploys `dist/` to GitHub Pages
4. Live at doorstep.design

**Manual Deployment:**
```bash
# After creating GitHub repo
git remote add origin https://github.com/nwyawka/doorstep.git
git push -u origin main

# Enable GitHub Pages in Settings > Pages > Source: GitHub Actions
```

### Before Committing
✅ **IMPORTANT**: Follow testing checklist above
- Test all changes locally
- Verify no console errors
- Check responsive design on multiple screen sizes
- Ensure all links and buttons work as expected
- Test form submission
- Verify FAQ accordion works
- Test maps loading

---

## Recent Development Session (2025-10-18)

### Major Features Added

**Design System:**
- Elegant Christmas 2025 theme
- Refined, clean design with fine 1px borders
- Cursive fonts (Brush Script MT) for branding
- Lightweight shadows and minimal effects
- Professional color palette (green, red, gold)

**Sections Built:**
1. Hero with full-screen Christmas background
2. Services (6 cards, no icons)
3. Service Areas with 3 interactive Google Maps
4. Gallery with 6 placeholder images
5. About with service area list
6. FAQ with 9 expandable questions
7. Contact form with glassmorphism effect

**Interactive Features:**
- Mobile hamburger navigation
- Smooth scrolling
- FAQ accordion
- Gallery hover effects
- Social media sharing (10 platforms)
- Email form integration
- Map cards with hover effects

### Design Decisions
- **No emoji icons** in services (cleaner, text-based)
- **Cursive fonts** for elegance (Brush Script MT)
- **Fine 1px borders** instead of thick borders
- **Minimal shadows** for sophistication
- **Light font weights** (300-400) for refinement
- **Social bar** integrated into header
- **Maps section** added for clear service area display

---

## Future Enhancements

### Planned Features
- [ ] Replace placeholder images with real project photos
- [ ] Add custom logo (replace text branding)
- [ ] Add customer testimonials section
- [ ] Add pricing information (optional)
- [ ] Before/after photo galleries
- [ ] Integration with booking/scheduling system
- [ ] Google Analytics
- [ ] SEO optimization
- [ ] Blog/news section for seasonal updates

### Performance Optimizations
- [ ] Image optimization (WebP format)
- [ ] Lazy loading for images
- [ ] Critical CSS extraction
- [ ] Font subsetting
- [ ] Service worker for offline support

---

## Known Issues & Limitations

### Current Limitations
- **Placeholder Images**: Using Unsplash for gallery (need real photos)
- **Email Form**: Opens email client (no backend/form submission service)
- **Contact Info**: Using temp email (contact@doorstep.design)
- **No Logo**: Text-based branding only
- **Maps**: Generic area maps (can be customized to specific service zones)

### Browser Compatibility
- Modern browsers only (ES6+ modules required)
- Internet Explorer not supported
- Works best in Chrome, Firefox, Safari, Edge (latest versions)
- Maps require JavaScript enabled

---

## SEO & Marketing

### Target Keywords
- Holiday decoration services Maryland
- Christmas decoration installation Annapolis
- Luxury holiday décor Baltimore
- Professional Christmas decorators DC
- Seasonal home decoration services

### Content Strategy
- Focus on luxury, high-end positioning
- Emphasize convenience and quality
- Target affluent homeowners
- Seasonal approach (currently Christmas 2025)
- Service area emphasis (Annapolis, Baltimore, DC Metro)

---

## Contact & Support

**Developer**: Matthew O'Neil
**Email**: nwyawka@gmail.com
**GitHub**: https://github.com/nwyawka/doorstep
**Issues**: Report bugs via GitHub Issues
**Domain**: doorstep.design
**Business Email**: contact@doorstep.design (temporary)

---

## License

MIT License - Feel free to use for any purpose

---

## Acknowledgments

- **Inspiration**: Porch Pumpkins (porchpumpkins.com)
- **Built with**: Claude Code (claude.com/code)
- **Images**: Unsplash (placeholder images)
- **Maps**: Google Maps Embed API
- **Fonts**: System fonts + Brush Script MT

---

## Notes for Future Development

### Editing Maps
To customize the Google Maps:
1. Go to Google Maps (google.com/maps)
2. Search for your desired location
3. Click Share → Embed a map
4. Copy iframe code
5. Replace in `index.html` (lines 138-180)

### Updating for Different Holidays
The site is currently Christmas-themed. To update:
- Change hero background image (line 322 in `main.css`)
- Update color palette in CSS variables
- Adjust tagline/copy in `index.html`
- Replace gallery images
- Update social media text

### Social Media Handles
Currently using generic share links. To add specific handles:
- Update JavaScript in `src/main.js` (lines 87-138)
- Add your social media usernames

---

**Last Updated**: 2025-10-18
**Version**: 1.0.0
**Status**: Ready for deployment
