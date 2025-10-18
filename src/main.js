// ===================================
// Mobile Navigation Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // Animate hamburger icon
  const hamburger = navToggle.querySelector('.hamburger');
  hamburger.style.transform = navMenu.classList.contains('active')
    ? 'rotate(45deg)'
    : 'rotate(0)';
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const hamburger = navToggle.querySelector('.hamburger');
    hamburger.style.transform = 'rotate(0)';
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('active');
    const hamburger = navToggle.querySelector('.hamburger');
    hamburger.style.transform = 'rotate(0)';
  }
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScrollY = currentScrollY;
});

// ===================================
// Smooth Scrolling with Offset
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const navbarHeight = navbar.offsetHeight;
    const socialBarHeight = document.querySelector('.social-bar')?.offsetHeight || 0;
    const offset = navbarHeight + socialBarHeight + 20;

    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

// ===================================
// FAQ Accordion
// ===================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all FAQ items
    faqItems.forEach(faq => {
      faq.classList.remove('active');
      const answer = faq.querySelector('.faq-answer');
      answer.style.maxHeight = null;
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
      const answer = item.querySelector('.faq-answer');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  // Create mailto link with form data
  const subject = encodeURIComponent(`Doorstep Design Inquiry - ${data.service || 'General'}`);
  const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Service Interest: ${data.service || 'Not specified'}

Message:
${data.message}
  `);

  const mailtoLink = `mailto:contact@doorstep.design?subject=${subject}&body=${body}`;

  // Open email client
  window.location.href = mailtoLink;

  // Show success message (optional)
  alert('Thank you for your inquiry! Your default email client will open to send your message.');

  // Reset form
  contactForm.reset();
});

// ===================================
// Social Media Share Functionality
// ===================================
const socialButtons = document.querySelectorAll('.social-btn');

socialButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const platform = btn.dataset.platform;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Check out Doorstep Design - Luxury Holiday Decorations!');
    const text = encodeURIComponent('Transform your home this holiday season with Doorstep Design');

    let shareUrl;

    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text}%20${url}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${title}&body=${text}%20${url}`;
        window.location.href = shareUrl;
        return;
      case 'copy':
        navigator.clipboard.writeText(window.location.href).then(() => {
          const originalHTML = btn.innerHTML;
          btn.innerHTML = '<span style="font-size: 12px;">✓</span>';
          setTimeout(() => {
            btn.innerHTML = originalHTML;
          }, 2000);
        });
        return;
      case 'instagram':
        alert('Please share our page @doorstepdesign on Instagram!');
        return;
      case 'tiktok':
        alert('Please share our page @doorstepdesign on TikTok!');
        return;
      case 'youtube':
        alert('Please subscribe to our YouTube channel: Doorstep Design!');
        return;
      default:
        return;
    }

    // Open share window
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  });
});

// ===================================
// Scroll Animations
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .gallery-item, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===================================
// Active Navigation Link
// ===================================
const sections = document.querySelectorAll('section[id]');

const highlightNavigation = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 200;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLink.classList.add('active');
    }
  });
};

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Initialize
// ===================================
console.log('🎄 Doorstep Design - Ready for the holidays! 🎄');
