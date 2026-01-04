
// Navbar is now static - no visibility control needed

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.documentElement;
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply saved theme
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.className = 'fas fa-moon';
    } else {
        body.classList.remove('light-mode');
        themeIcon.className = 'fas fa-sun';
    }
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        
        // Update icon and save preference
        if (body.classList.contains('light-mode')) {
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    });
});


//  Mobile Menu Toggle 
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times'); 
    navbar.classList.toggle('active');
}

//  Counter Animation 
const counters = document.querySelectorAll('.counter');

const runCounter = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            // Speed control (500/target) jitna bara target utna chota increment
            const increment = target / 500; 

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1); // Har 1ms baad update
            } else {
                counter.innerText = target;
            }
        };
        
        // Agar counter screen par nazar aa raha ho tabhi shuru ho 
        updateCount();
    });
}

// Jab page load ho tab run krny ky liye
runCounter();

// CV Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const downloadCvBtn = document.getElementById('download-cv-btn');
    const cvModal = document.getElementById('cv-modal');
    const cvClose = document.querySelector('.cv-close');
    
    // Show CV Modal when Download CV button is clicked
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showCV();
        });
    }
    
    // Close modal when X is clicked
    if (cvClose) {
        cvClose.addEventListener('click', function() {
            closeCV();
        });
    }
    
    // Close modal when clicking outside of it
    if (cvModal) {
        cvModal.addEventListener('click', function(e) {
            if (e.target === cvModal) {
                closeCV();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && cvModal.style.display === 'block') {
            closeCV();
        }
    });
});

// Show CV Modal
function showCV() {
    const cvModal = document.getElementById('cv-modal');
    if (cvModal) {
        cvModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Close CV Modal
function closeCV() {
    const cvModal = document.getElementById('cv-modal');
    if (cvModal) {
        cvModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Download CV Function (for the Download button inside modal)
function downloadCV() {
    // Replace with actual CV file URL
    const fileUrl = 'images/Zofishan Saqib - Frontend Developer Cv (1).pdf.jpg'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Zofishan_Saqib_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Close modal after download
    setTimeout(() => {
        closeCV();
    }, 500);
}

//  FAQ Accordion 
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active');
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// Say Hello Button Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const sayHelloBtn = document.getElementById('say-hello-btn');
    
    if (sayHelloBtn) {
        sayHelloBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            
            // Show popup message only - no navigation
            alert('Hello everyone! 👋');
        });
    }
});

// Projects Heading Click Animation
document.addEventListener('DOMContentLoaded', function() {
    const projectsHeading = document.getElementById('projects-heading');
    
    if (projectsHeading) {
        projectsHeading.addEventListener('click', function() {
            // Toggle the active class to show/hide the animated line
            this.classList.toggle('active');
        });
    }
});