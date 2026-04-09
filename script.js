document.addEventListener('DOMContentLoaded', () => {
    // Current Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile Menu
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    function toggleMenu() {
        const isActive = mobileMenu.classList.contains('active');
        if (isActive) {
            mobileMenu.classList.remove('active');
            mobileToggle.innerHTML = '<i class="ph ph-list"></i>';
            document.body.style.overflow = 'auto';
        } else {
            mobileMenu.classList.add('active');
            mobileToggle.innerHTML = '<i class="ph ph-x"></i>';
            document.body.style.overflow = 'hidden';
        }
    }

    mobileToggle.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) toggleMenu();
        });
    });

    // Navbar Scroll & Background Parallax
    const parallaxImgs = document.querySelectorAll('.parallax-img');
    
    window.addEventListener('scroll', () => {
        // Navbar
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        
        // Simple subtle vertical parallax for images (desktop only)
        if (window.innerWidth > 768) {
            parallaxImgs.forEach(img => {
                const speed = 0.05;
                const yPos = -(window.scrollY * speed);
                img.style.transform = `translateY(${yPos}px) scale(1.05)`;
            });
        } else {
            parallaxImgs.forEach(img => {
                img.style.transform = 'none';
            });
        }
    });

    // Scroll Reveal Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.reveal-up, .reveal-left').forEach(el => observer.observe(el));

    // Luxury Hero Carousel Logic
    const slides = document.querySelectorAll('.carousel-slide');
    const titles = document.querySelectorAll('.carousel-title');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const slideDuration = 5000;
    let slideInterval;

    function goToSlide(index) {
        // Remove active class from current items
        if (slides[currentSlide]) slides[currentSlide].classList.remove('active');
        if (titles[currentSlide]) titles[currentSlide].classList.remove('active');
        if (indicators[currentSlide]) {
            indicators[currentSlide].classList.remove('active');
            // Force reflow for animation reset
            indicators[currentSlide].style.transition = 'none';
            void indicators[currentSlide].offsetWidth; 
            indicators[currentSlide].style.transition = '';
        }

        currentSlide = index;

        // Add active class to new items
        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (titles[currentSlide]) titles[currentSlide].classList.add('active');
        if (indicators[currentSlide]) indicators[currentSlide].classList.add('active');
    }

    function nextSlide() {
        let textSlide = (currentSlide + 1) % slides.length;
        goToSlide(textSlide);
    }

    if (slides.length > 0) {
        slideInterval = setInterval(nextSlide, slideDuration);

        // Click on indicators to change slide manually
        indicators.forEach((ind, index) => {
            ind.addEventListener('click', () => {
                clearInterval(slideInterval);
                goToSlide(index);
                slideInterval = setInterval(nextSlide, slideDuration);
            });
        });
    }

    // Mobile hero CTA repositioning: keep buttons below the image on narrow screens
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');
    const heroCta = document.querySelector('.hero-cta');

    function repositionHeroCta() {
        if (!heroLeft || !heroRight || !heroCta) return;
        if (window.innerWidth <= 1024) {
            if (heroRight.nextSibling !== heroCta) {
                heroRight.parentNode.insertBefore(heroCta, heroRight.nextSibling);
            }
        } else {
            if (heroLeft.contains(heroCta) === false) {
                heroLeft.appendChild(heroCta);
            }
        }
    }

    repositionHeroCta();
    window.addEventListener('resize', () => {
        clearTimeout(window._heroCtaResizeTimeout);
        window._heroCtaResizeTimeout = setTimeout(repositionHeroCta, 100);
    });

    // 3D Tilt Effect Setup (Vanilla JS)
    const tiltElements = document.querySelectorAll('.tilt-effect, .tilt-btn');
    
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            // Get mouse position relative to element center
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Adjust multiplier based on how dramatic you want the effect
            const multiplier = el.classList.contains('tilt-btn') ? 15 : 10;
            
            const xRotate = multiplier * (y / (rect.height / 2)) * -1;
            const yRotate = multiplier * (x / (rect.width / 2));
            
            // Apply 3D transform. For buttons add scale, for images keep it minimal.
            const scale = el.classList.contains('tilt-btn') ? 1.05 : 1.02;
            el.style.transform = `perspective(1000px) rotateX(${xRotate}deg) rotateY(${yRotate}deg) scale3d(${scale}, ${scale}, ${scale})`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
            // adding smooth return
            el.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
        });
        
        el.addEventListener('mouseenter', () => {
            // remove transition while moving to avoid lag
            el.style.transition = 'none'; 
        });
    });

    // WhatsApp Booking Form logic
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const pickup = document.getElementById('pickup').value.trim();
            const date = document.getElementById('date').value;
            const tripType = document.getElementById('tripType').value;
            const message = document.getElementById('message').value.trim();

            if (!/^[0-9]{10}$/.test(phone)) {
                alert('Please provide a valid 10-digit mobile number.');
                return;
            }

            const whatsappNumber = '919381286787';
            let msg = `*Luxury Ride Reservation*%0A%0A`;
            msg += `*Guest:* ${name}%0A`;
            msg += `*Contact:* ${phone}%0A`;
            msg += `*Class:* ${tripType}%0A`;
            msg += `*Date:* ${date}%0A`;
            msg += `*Pickup:* ${pickup}`;
            if (message) msg += `%0A%0A*Concierge Notes:* ${message}`;

            window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
        });
    }

    // Set Min Date
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
    }
});
