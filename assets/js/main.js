// Main JavaScript for the static website

// Use performance optimization techniques and better event handling
document.addEventListener('DOMContentLoaded', function() {
  // Create an IntersectionObserver instance for performance
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Batch DOM operations
  requestAnimationFrame(() => {
    // Initialize core functionality
    initNavbarScroll();
    initMobileMenu();
    
    // Initialize animations with IntersectionObserver
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      observer.observe(el);
    });
    
    // Initialize optional features if elements exist
    if (document.querySelector('.testimonials-slider')) initTestimonialsSlider();
    if (document.querySelector('form')) initFormValidation();
    if (document.querySelector('.workflow-step')) initWorkflowSteps();
  });
});





/**
 * Navbar scroll behavior
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  if (!navbar) return;
  
  // Set initial state on page load
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  }
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
}

/**
 * Mobile menu behavior
 */
function initMobileMenu() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  if (!navbarToggler || !navbarCollapse) return;
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navbarCollapse.classList.contains('show') && 
        !navbarCollapse.contains(e.target) && 
        !navbarToggler.contains(e.target)) {
      navbarToggler.click();
    }
  });
  
  // Close menu when clicking on a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });
}

/**
 * Scroll animation for elements
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (!animatedElements.length) return;
  
  // Add initial state to all elements
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  const checkVisibility = () => {
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.85) {
        element.classList.add('visible');
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Check elements visibility on scroll
  window.addEventListener('scroll', checkVisibility);
  
  // Check on initial load
  setTimeout(checkVisibility, 100); // Small delay to ensure DOM is ready
}

/**
 * Workflow steps animation
 */
function initWorkflowSteps() {
  const processSteps = document.querySelectorAll('.process-step');
  
  if (!processSteps.length) return;
  
  const checkVisibility = () => {
    processSteps.forEach(step => {
      const stepTop = step.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (stepTop < windowHeight * 0.85) {
        step.classList.add('visible');
      }
    });
  };
  
  // Check steps visibility on scroll
  window.addEventListener('scroll', checkVisibility);
  
  // Check on initial load
  setTimeout(checkVisibility, 100); // Small delay to ensure DOM is ready
}

/**
 * Form validation for contact form
 */
function initFormValidation() {
  const contactForm = document.getElementById('contactForm');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let valid = true;
    const submitBtn = document.getElementById('submitButton');
    const submitText = document.getElementById('submitText');
    const submitSpinner = document.getElementById('submitSpinner');
    
    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const projectType = document.getElementById('projectType');
    const timeline = document.getElementById('timeline');
    const budget = document.getElementById('budget');
    const details = document.getElementById('details');
    
    // Reset errors
    document.querySelectorAll('.error-message').forEach(el => {
      el.textContent = '';
      el.style.display = 'none';
    });
    
    // Validate name
    if (!name.value.trim()) {
      document.getElementById('nameError').textContent = 'Name is required';
      document.getElementById('nameError').style.display = 'block';
      valid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      document.getElementById('emailError').textContent = 'Email is required';
      document.getElementById('emailError').style.display = 'block';
      valid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      document.getElementById('emailError').textContent = 'Please enter a valid email';
      document.getElementById('emailError').style.display = 'block';
      valid = false;
    }
    
    // Validate phone (optional)
    if (phone.value.trim() && !/^\+?[0-9\s\-()]{7,20}$/.test(phone.value.trim())) {
      document.getElementById('phoneError').textContent = 'Please enter a valid phone number';
      document.getElementById('phoneError').style.display = 'block';
      valid = false;
    }
    
    // Validate project type
    if (projectType && (!projectType.value || projectType.value === '')) {
      document.getElementById('projectTypeError').textContent = 'Please select a project type';
      document.getElementById('projectTypeError').style.display = 'block';
      valid = false;
    }
    
    // Validate timeline
    if (timeline && (!timeline.value || timeline.value === '')) {
      document.getElementById('timelineError').textContent = 'Please select a timeline';
      document.getElementById('timelineError').style.display = 'block';
      valid = false;
    }
    
    // Validate budget
    if (budget && (!budget.value || budget.value === '')) {
      document.getElementById('budgetError').textContent = 'Please select a budget range';
      document.getElementById('budgetError').style.display = 'block';
      valid = false;
    }
    
    // Validate details
    if (!details.value.trim()) {
      document.getElementById('detailsError').textContent = 'Please provide details about your project';
      document.getElementById('detailsError').style.display = 'block';
      valid = false;
    }
    
    if (valid) {
      // Show loading state
      if (submitText) submitText.style.display = 'none';
      if (submitSpinner) submitSpinner.classList.remove('d-none');
      if (submitBtn) submitBtn.disabled = true;
      
      // Simulate form submission (would be replaced with actual API call)
      setTimeout(() => {
        // Hide loading state
        if (submitText) submitText.style.display = 'inline';
        if (submitSpinner) submitSpinner.classList.add('d-none');
        if (submitBtn) submitBtn.disabled = false;
        
        // Show success message
        const successMessage = document.querySelector('.success-message');
        if (successMessage) {
          successMessage.classList.add('show');
          
          // Create floating success notification instead of hiding form
          const notification = document.createElement('div');
          notification.className = 'form-status-message success';
          notification.innerHTML = '<i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully.';
          notification.style.position = 'fixed';
          notification.style.top = '20px';
          notification.style.right = '20px';
          notification.style.padding = '15px 20px';
          notification.style.borderRadius = '8px';
          notification.style.backgroundColor = 'rgba(34, 197, 94, 0.9)';
          notification.style.color = 'white';
          notification.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
          notification.style.zIndex = '9999';
          notification.style.animation = 'fadeInRight 0.5s ease';
          
          // Add animation styles
          const style = document.createElement('style');
          style.textContent = `
            @keyframes fadeInRight {
              from {
                opacity: 0;
                transform: translateX(30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes fadeOut {
              from {
                opacity: 1;
              }
              to {
                opacity: 0;
              }
            }
          `;
          document.head.appendChild(style);
          
          document.body.appendChild(notification);
          
          // Reset form
          contactForm.reset();
          
          // Remove notification after 5 seconds
          setTimeout(() => {
            notification.style.animation = 'fadeOut 0.5s ease forwards';
            setTimeout(() => {
              notification.remove();
            }, 500);
          }, 5000);
        }
      }, 1500);
    }
  });
}

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for navbar
          behavior: 'smooth'
        });
      }
    });
  });
});
