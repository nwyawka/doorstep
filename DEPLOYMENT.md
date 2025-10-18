# Deployment Guide for Doorstep Design

## 🎄 Your Website is Ready!

Your elegant Christmas-themed website has been built and is ready for deployment!

## 📦 What's Included

### Core Features
- ✅ Responsive single-page website
- ✅ 6 sections: Hero, Services, Gallery, About, FAQ, Contact
- ✅ 10+ social media share buttons (Facebook, Instagram, Pinterest, Twitter, LinkedIn, TikTok, YouTube, WhatsApp, Email, Copy Link)
- ✅ Interactive FAQ accordion
- ✅ Contact form (opens email client)
- ✅ Smooth scrolling navigation
- ✅ Mobile-responsive hamburger menu
- ✅ Scroll animations
- ✅ Christmas 2025 themed with elegant green, red, and gold colors
- ✅ Professional placeholder images from Unsplash

### Services Highlighted
1. Professional Installation
2. Custom Design
3. Premium Decorations
4. Seasonal Removal & Storage
5. Rental Options
6. Full-Service Concierge

### Technical Details
- **Tagline**: "Curated Seasonal Décor, Delivered to Your Doorstep"
- **Temp Phone**: (410) 555-0123 (not displayed on site)
- **Temp Email**: contact@doorstep.design (used for form submissions)
- **Service Areas**: Annapolis, Baltimore, DC Metro

## 🚀 How to Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `doorstep` (or `doorstepdesign`)
3. Make it **Public**
4. Do NOT initialize with README (we already have one)
5. Click "Create repository"

### Step 2: Push Your Code

Run these commands in your terminal from the project directory:

```bash
# Make sure you're in the project directory
cd /home/mattuh/Desktop/DataWerkes/doorstepDesign

# If you haven't committed yet, do this:
git commit -m "Initial commit: Doorstep Design website

- Elegant Christmas 2025 themed single-page site
- Responsive design with mobile navigation
- Services, Gallery, About, FAQ, and Contact sections
- Social media integration
- Automated GitHub Pages deployment
"

# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/doorstep.git

# Push to GitHub
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. That's it! The workflow will automatically run

### Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait ~2-3 minutes for it to complete
4. Your site will be live at: `https://YOUR_USERNAME.github.io/doorstep/`

### Step 5: Configure Custom Domain (doorstep.design)

1. In your domain registrar (where you bought doorstep.design):
   - Add these **A Records** pointing to GitHub:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add a **CNAME Record**:
     - Name: `www`
     - Value: `YOUR_USERNAME.github.io`

2. Back in GitHub repository Settings > Pages:
   - Under "Custom domain", enter: `doorstep.design`
   - Click **Save**
   - Check "Enforce HTTPS" (after DNS propagates, ~24 hours)

3. Create a file named `CNAME` in your project root:
   ```bash
   echo "doorstep.design" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

## 🧪 Testing Checklist

Before going live, test these locally (`npm run dev`):

- [ ] Navigation links scroll to correct sections
- [ ] Mobile hamburger menu opens/closes
- [ ] Social media buttons open share dialogs
- [ ] FAQ accordions expand/collapse
- [ ] Contact form opens email client with pre-filled data
- [ ] Images load correctly
- [ ] Site looks good on mobile, tablet, and desktop
- [ ] No console errors (F12 > Console)

## 📝 Making Updates

### Update Content
1. Edit `index.html` for text changes
2. Edit `src/styles/main.css` for styling
3. Edit `src/main.js` for functionality

### Test Locally
```bash
npm run dev
# Visit http://localhost:3000
```

### Deploy Changes
```bash
git add .
git commit -m "Description of changes"
git push
# GitHub Actions will automatically rebuild and deploy
```

## 🖼️ Replacing Placeholder Images

The gallery currently uses Unsplash placeholder images. To add your own:

1. Add your images to a `public/images` folder
2. Update image URLs in `index.html`:
   ```html
   <!-- Old -->
   <img src="https://images.unsplash.com/photo-..." alt="...">

   <!-- New -->
   <img src="/images/your-photo.jpg" alt="...">
   ```

## 🔧 Future Enhancements

Consider adding:
- [ ] Real photos of your work
- [ ] Your actual logo (replace "Doorstep" text in nav)
- [ ] Customer testimonials section
- [ ] Pricing information
- [ ] Before/after photo galleries
- [ ] Integration with booking system
- [ ] Google Analytics
- [ ] SEO meta tags optimization
- [ ] Blog/news section

## 📞 Contact Information

Remember to update these when you have real contact details:
- Email: contact@doorstep.design (in contact form)
- Service hours and response times are in the Contact section

## 🎨 Color Scheme

The site uses these Christmas colors:
- **Primary Green**: #0F5132 (Deep Forest)
- **Accent Red**: #C41E3A (Cranberry)
- **Gold**: #D4AF37 (Antique Gold)
- **Cream**: #FAF9F6 (Warm White)

## 🆘 Troubleshooting

**Build fails?**
- Check the Actions tab for error messages
- Ensure `package.json` and all files are committed

**Images not showing?**
- Clear browser cache
- Check browser console for 404 errors
- Verify image URLs are correct

**Custom domain not working?**
- DNS can take up to 48 hours to propagate
- Verify A and CNAME records are correct
- Check GitHub Pages settings

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Documentation](https://vitejs.dev/)
- [Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

**Your website is ready to spread holiday cheer! 🎄✨**

For questions or issues, consult the documentation or check the GitHub Issues tab in your repository.
