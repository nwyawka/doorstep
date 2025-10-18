# Doorstep Design

**Curated Seasonal Décor, Delivered to Your Doorstep**

A luxury holiday decoration service website for the Annapolis, Baltimore, and DC Metropolitan areas.

## Features

- ✨ Elegant, responsive single-page design
- 🎄 Christmas 2025 themed
- 📱 Mobile-first approach with smooth animations
- 🎨 Glassmorphism effects inspired by modern design trends
- 📧 Contact form integration
- 🔗 Social media sharing functionality
- ⚡ Built with Vite for lightning-fast performance

## Tech Stack

- **Build Tool**: Vite
- **Styling**: Vanilla CSS with CSS Variables
- **JavaScript**: ES6+ Modules
- **Hosting**: GitHub Pages
- **Domain**: doorstep.design

## Development

### Prerequisites

- Node.js 18+ (20+ recommended)
- npm

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start at http://localhost:3000

## Deployment

This site automatically deploys to GitHub Pages when code is pushed to the `main` branch.

### Setup GitHub Pages

1. Go to repository Settings > Pages
2. Source: GitHub Actions
3. The workflow will automatically build and deploy

### Before Committing

✅ **Testing Checklist**:
- [ ] Test all navigation links
- [ ] Verify responsive design on mobile, tablet, and desktop
- [ ] Check all FAQ accordions
- [ ] Test contact form functionality
- [ ] Verify social media share buttons
- [ ] Check console for errors
- [ ] Test smooth scrolling
- [ ] Verify all images load properly

## Project Structure

```
doorstepDesign/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── styles/
│   │   └── main.css           # Main stylesheet
│   └── main.js                # JavaScript functionality
├── index.html                 # Main HTML file
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## Sections

1. **Hero** - Eye-catching introduction with call-to-action
2. **Services** - 6 service cards showcasing offerings
3. **Gallery** - Photo portfolio with hover effects
4. **About** - Company information and service areas
5. **FAQ** - Accordion-style frequently asked questions
6. **Contact** - Contact form and business information

## Service Areas

- Annapolis & Anne Arundel County
- Baltimore & Baltimore County
- Washington, DC Metro Area
- Montgomery County, MD
- Howard County, MD

## License

MIT License - feel free to use for any purpose

## Contact

For inquiries: contact@doorstep.design

---

*Made with ❤️ for spreading holiday cheer*
