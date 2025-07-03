// SPA Navigation and Interactive Features
class SPANavigator {
    constructor() {
        this.currentPage = 'home';
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupMobileMenu();
        this.setupContactForm();
        this.setupSmoothScrolling();
        this.handleInitialLoad();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = link.getAttribute('href').substring(1);
                this.navigateTo(targetPage);
            });
        });
    }

    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactSubmit(e);
            });
        }
    }

    setupSmoothScrolling() {
        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    handleInitialLoad() {
        // Handle page load with hash
        const hash = window.location.hash.substring(1);
        if (hash) {
            this.navigateTo(hash);
        } else {
            this.navigateTo('home');
        }
    }

    navigateTo(page) {
        // Hide all sections
        const sections = document.querySelectorAll('.page-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(page);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update navigation active state
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${page}`) {
                link.classList.add('active');
            }
        });

        // Update URL hash
        window.location.hash = page;
        this.currentPage = page;

        // Scroll to top
        window.scrollTo(0, 0);

        // Add page-specific animations
        this.addPageAnimations(page);
    }

    addPageAnimations(page) {
        const targetSection = document.getElementById(page);
        if (targetSection) {
            // Add fade-in animation
            targetSection.style.opacity = '0';
            targetSection.style.transform = 'translateY(20px)';

            setTimeout(() => {
                targetSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                targetSection.style.opacity = '1';
                targetSection.style.transform = 'translateY(0)';
            }, 50);
        }
    }

    handleContactSubmit(e) {
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Simulate form submission
        this.showNotification('Dziękujemy za wiadomość! Skontaktujemy się z Państwem w ciągu 24 godzin.', 'success');
        e.target.reset();
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 1001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
}

// Animation utilities
class AnimationUtils {
    static observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe cards and sections
        document.querySelectorAll('.feature-card, .offer-card, .project-card, .stat-item').forEach(el => {
            observer.observe(el);
        });
    }

    static addScrollEffects() {
        let ticking = false;

        function updateScrollEffects() {
            const scrolled = window.pageYOffset;
            const navbar = document.querySelector('.navbar');

            if (scrolled > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = 'var(--bg-white)';
                navbar.style.backdropFilter = 'none';
            }

            ticking = false;
        }

        function requestScrollUpdate() {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestScrollUpdate);
    }
}

// Global navigation function
function navigateTo(page) {
    if (window.spa) {
        window.spa.navigateTo(page);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize SPA
    window.spa = new SPANavigator();

    // Initialize animations
    AnimationUtils.observeElements();
    AnimationUtils.addScrollEffects();

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .feature-card,
        .offer-card,
        .project-card,
        .stat-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .feature-card.animate-in,
        .offer-card.animate-in,
        .project-card.animate-in,
        .stat-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `;
    document.head.appendChild(style);
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (e) => {
    const hash = window.location.hash.substring(1) || 'home';
    if (window.spa) {
        window.spa.navigateTo(hash);
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Performance optimization - lazy loading for heavy content
class LazyLoader {
    static init() {
        // Lazy load images when they come into view
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', () => {
    LazyLoader.init();
});

// Add smooth transitions between sections
function addSectionTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        .page-section {
            transition: opacity 0.3s ease-in-out;
        }
        
        .page-section:not(.active) {
            opacity: 0;
            pointer-events: none;
        }
        
        .page-section.active {
            opacity: 1;
            pointer-events: auto;
        }
    `;
    document.head.appendChild(style);
}

// Initialize section transitions
document.addEventListener('DOMContentLoaded', addSectionTransitions);
