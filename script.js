// ===== Testimonials Data =====
const testimonials = [
    {
        text: "Regency made this process calm and clear. We found the right caregiver quickly — and felt supported the whole time.",
        author: "SARAH M."
    },
    {
        text: "The match was perfect. Mom feels safe and cared for, and we finally have peace of mind.",
        author: "EMILY R."
    },
    {
        text: "Their team truly listened. It felt like working with a trusted advisor, not a typical agency.",
        author: "JAMES L."
    },
    {
        text: "We were overwhelmed until we found Regency. The quality of caregivers they introduced was night and day compared to others.",
        author: "ROBERT T."
    },
    {
        text: "Professional, discreet, and incredibly effective. Finding help for my father was daunting, but they made it seamless.",
        author: "MICHAEL K."
    },
    {
        text: "The peace of mind we have now is priceless. The caregiver they found for us is exactly who we needed.",
        author: "JENNIFER B."
    },
    {
        text: "I was impressed by how they handled everything. From the first call to the final hire, it was a first-class experience.",
        author: "DAVID S."
    },
    {
        text: "A wonderful service for families who need help but don't want to deal with the hassle of finding someone on their own.",
        author: "ELIZABETH W."
    }
];

// ===== Mobile Navigation =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// ===== Testimonial Carousel =====
let currentTestimonial = 0;
const testimonialText = document.getElementById('testimonialText');
const testimonialAuthor = document.getElementById('testimonialAuthor');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselDots = document.getElementById('carouselDots');

// Create dots
testimonials.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToTestimonial(index));
    carouselDots.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateTestimonial() {
    testimonialText.textContent = `"${testimonials[currentTestimonial].text}"`;
    testimonialAuthor.textContent = testimonials[currentTestimonial].author;
    
    // Update dots
    dots.forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonial();
}

nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

// Auto-rotate testimonials
let autoRotate = setInterval(nextTestimonial, 5000);

// Pause auto-rotate on hover
const testimonialCarousel = document.querySelector('.testimonial-carousel');
testimonialCarousel.addEventListener('mouseenter', () => {
    clearInterval(autoRotate);
});

testimonialCarousel.addEventListener('mouseleave', () => {
    autoRotate = setInterval(nextTestimonial, 5000);
});

// Initialize first testimonial
updateTestimonial();

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .service-card, .process-step').forEach(el => {
    observer.observe(el);
});

// ===== GitHub Pages SPA Fallback =====
// Convert ?p=/some/path back into the real path
(function () {
    const params = new URLSearchParams(window.location.search);
    const p = params.get('p');
    if (p) {
        try {
            const decoded = decodeURIComponent(p);
            window.history.replaceState(null, '', decoded);
        } catch (e) {
            console.error('Error decoding path:', e);
        }
    }
})();

// ===== Keyboard Navigation for Carousel =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevTestimonial();
    } else if (e.key === 'ArrowRight') {
        nextTestimonial();
    }
});

// ===== Performance: Lazy Loading Images =====
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===== Console Message =====
console.log('%cRegency Care Group', 'font-size: 24px; font-weight: bold; color: #C5A059;');
console.log('%cWebsite built with HTML, CSS, and JavaScript', 'font-size: 14px; color: #64748B;');
