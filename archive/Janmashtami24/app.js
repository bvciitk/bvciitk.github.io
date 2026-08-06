// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initLoader();
    initMusicPlayer();
    initNavigation();
    initScrollAnimations();
    initVideoCarousel();
    initImageModal();
    initTshirtPopup();
    initVolunteerPopup();
    initSmoothScroll();
    initCardHoverEffects();
});

// Loading Screen - Extended duration
function initLoader() {
    const loader = document.getElementById('loader');
    
    // Hide loader after 4 seconds to make it more visible
    setTimeout(() => {
        loader.classList.add('hidden');
        // Remove loader from DOM after animation
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 4000);
}

// Music Player - Fixed implementation
function initMusicPlayer() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    
    if (!musicToggle || !bgMusic) return; // Guard clause

    const musicIcon = musicToggle.querySelector('.music-icon');
    const musicText = musicToggle.querySelector('.music-text');
    
    // Set volume to medium
    bgMusic.volume = 0.5;

    const updateUI = () => {
        if (bgMusic.paused) {
            musicIcon.textContent = '🎵';
            musicText.textContent = 'Play Flute';
            musicToggle.style.background = 'var(--gradient-gold)';
        } else {
            musicIcon.textContent = '🎶';
            musicText.textContent = 'Pause Flute'; // Changed text
            musicToggle.style.background = 'linear-gradient(135deg, #059669, #10b981)';
        }
    };

    // Try to play the music, as autoplay can be blocked.
    var playPromise = bgMusic.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Autoplay started!
            bgMusic.muted = false;
            updateUI();
        }).catch(error => {
            // Autoplay was prevented.
            console.log("Autoplay prevented by browser. Muted and waiting for interaction.");
            bgMusic.muted = true;
            updateUI();
        });
    }

    // Add event listeners to keep UI in sync
    bgMusic.addEventListener('play', updateUI);
    bgMusic.addEventListener('pause', updateUI);
    
    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.muted = false;
            bgMusic.play().catch(e => console.error("Playback failed:", e));
        } else {
            bgMusic.pause();
        }
    });

    // Set initial UI state
    updateUI();
}

// Navigation - Fixed smooth scrolling
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('is-active');
            navToggle.classList.toggle('is-active');
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(30, 58, 138, 0.98)';
        } else {
            navbar.style.background = 'rgba(30, 58, 138, 0.95)';
        }

        // Close mobile nav on scroll
        if (navMenu.classList.contains('is-active')) {
            navMenu.classList.remove('is-active');
            navToggle.classList.remove('is-active');
        }
    });
    
    // Active nav link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth Scrolling - Fixed implementation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            } else if (targetId === '#schedule') {
                // Handle schedule section specifically
                const scheduleSection = document.getElementById('schedule');
                if (scheduleSection) {
                    const offsetTop = scheduleSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Card Hover Effects - Fixed implementation
function initCardHoverEffects() {
    const eventCards = document.querySelectorAll('.event-card');
    const gratitudeCards = document.querySelectorAll('.gratitude-card');
    
    // Event cards hover effects
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
            this.style.boxShadow = '0 20px 40px rgba(30, 58, 138, 0.4)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow-sm)';
        });
    });
    
    // Gratitude cards hover effects
    gratitudeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(30, 58, 138, 0.3)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow-divine)';
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observe all elements with reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    // Add staggered animation delays
    revealElements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Video Carousel
function initVideoCarousel() {
    const slides = document.querySelectorAll('.video-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentSlide = 0;
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-advance slides
    setInterval(nextSlide, 8000); // Change slide every 8 seconds
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}

// Image Modal
function initImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Open modal
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            modal.classList.remove('hidden');
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });
    
    // Close modal
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Close on outside click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

// T-shirt Popup
function initTshirtPopup() {
    const popup = document.getElementById('tshirtPopup');
    const closeBtn = document.getElementById('closePopup');
    
    // Show popup after 8 seconds (longer delay for better UX)
    setTimeout(() => {
        if (popup) {
            popup.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }, 8000);
    
    // Close popup
    function closePopup() {
        if (popup) {
            popup.classList.add('hidden');
            document.body.style.overflow = 'auto';
            // Show volunteer popup after this one is closed
            const volunteerPopup = document.getElementById('VolunteerPopup');
            if (volunteerPopup) {
                volunteerPopup.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        }
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closePopup);
    }
    
    // Close on outside click
    if (popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                closePopup();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup && !popup.classList.contains('hidden')) {
            closePopup();
        }
    });
}

// Volunteer Popup
function initVolunteerPopup() {
    const popup = document.getElementById('VolunteerPopup');
    const closeBtn = document.getElementById('closeVolunteerPopup');

    function closePopup() {
        if (popup) {
            popup.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closePopup);
    }

    if (popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                closePopup();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup && !popup.classList.contains('hidden')) {
            closePopup();
        }
    });
}


// Additional Enhancements
function animateFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-lotus, .floating-feather, .floating-flute');
    
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
        element.style.animationDuration = `${3 + index}s`;
    });
}

function initParallaxEffect() {
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2; // Reduced for smoother effect
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Add CSS for active navigation and enhanced effects
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .nav-link.active {
        background: var(--krishna-gold) !important;
        color: var(--krishna-blue) !important;
        transform: translateY(-2px);
    }
    
    .event-card:hover {
        transform: translateY(-15px) scale(1.03) !important;
        box-shadow: 0 20px 40px rgba(30, 58, 138, 0.4) !important;
    }
    
    .gratitude-card:hover {
        transform: translateY(-10px) scale(1.02) !important;
        box-shadow: 0 15px 35px rgba(30, 58, 138, 0.3) !important;
    }
    
    .music-toggle:hover {
        transform: scale(1.05);
    }
    
    .gallery-item:hover {
        transform: scale(1.08) !important;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3) !important;
        z-index: 10;
        position: relative;
    }
`;
document.head.appendChild(additionalStyles);

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    animateFloatingElements();
    initParallaxEffect();
    
    // Add enhanced loading visual feedback
    const loader = document.getElementById('loader');
    if (loader) {
        // Add pulse effect to Om symbol
        const loaderText = loader.querySelector('.loader-text');
        if (loaderText) {
            loaderText.style.animation = 'pulse 2s infinite';
        }
    }
});

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler for better performance
const debouncedScrollHandler = debounce(function() {
    const scrollY = window.scrollY;
    
    // Update floating elements position based on scroll
    const floatingElements = document.querySelectorAll('.floating-lotus, .floating-feather, .floating-flute');
    floatingElements.forEach((element, index) => {
        const speed = 0.3 + (index * 0.1);
        element.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.1}deg)`;
    });
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.log('Error caught:', e.error);
});

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard navigation
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .keyboard-navigation *:focus {
        outline: 3px solid var(--krishna-gold) !important;
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);