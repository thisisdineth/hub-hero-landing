
// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  
  // Toggle icon between bars and X
  if (mobileMenu.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target) && mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});

// FAQ Accordion
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  
  header.addEventListener('click', () => {
    // Close all other accordion items
    accordionItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current accordion item
    item.classList.toggle('active');
  });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const toastClose = document.getElementById('toastClose');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Get form data (you would usually send this to your server)
  const formData = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    subject: contactForm.subject.value,
    message: contactForm.message.value
  };
  
  // Simulate API call (replace with actual API call in production)
  console.log('Form submitted with data:', formData);
  
  // Show success toast notification
  toast.classList.add('active');
  
  // Reset form
  contactForm.reset();
  
  // Automatically hide toast after 5 seconds
  setTimeout(() => {
    toast.classList.remove('active');
  }, 5000);
});

// Close toast on button click
toastClose.addEventListener('click', () => {
  toast.classList.remove('active');
});

// Animate course cards on scroll
const courseCards = document.querySelectorAll('.course-card');

// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add animation when cards come into view
function animateOnScroll() {
  courseCards.forEach(card => {
    if (isInViewport(card) && !card.classList.contains('animated')) {
      card.style.animation = 'fadeIn 0.5s forwards';
      card.classList.add('animated');
    }
  });
}

// Initial check and add scroll listener
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      }
    }
  });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = newsletterForm.querySelector('input[type="email"]').value;
  
  // Here you would usually send the email to your server or newsletter service
  console.log('Newsletter subscription:', email);
  
  // Show toast notification
  toast.querySelector('.toast-title').textContent = 'Subscribed!';
  toast.querySelector('.toast-message').textContent = 'You have been subscribed to our newsletter.';
  toast.classList.add('active');
  
  // Reset form
  newsletterForm.reset();
  
  // Automatically hide toast after 5 seconds
  setTimeout(() => {
    toast.classList.remove('active');
  }, 5000);
});

// Add floating animation to tech icons
const techIcons = document.querySelectorAll('.tech-icon');

techIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.2)';
    icon.style.opacity = '0.6';
    icon.style.color = getComputedStyle(icon).color;
  });
  
  icon.addEventListener('mouseout', () => {
    icon.style.transform = '';
    icon.style.opacity = '';
  });
});

// Enhanced animations for hero section with timed entrance
document.addEventListener('DOMContentLoaded', () => {
  // Additional animations for hero elements
  const heroVisual = document.querySelector('.hero-visual');
  const statsSection = document.querySelector('.stats-section');
  
  // Ensure animations play even if page is already loaded
  if (heroVisual) {
    heroVisual.style.opacity = '1';
    heroVisual.style.transform = 'translateY(0)';
  }
  
  if (statsSection) {
    statsSection.style.opacity = '1';
  }
  
  // Add hover effects to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      if (button.classList.contains('btn-primary')) {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
      }
    });
    
    button.addEventListener('mouseout', () => {
      if (button.classList.contains('btn-primary')) {
        button.style.transform = '';
        button.style.boxShadow = '';
      }
    });
  });
  
  // Add additional interactive elements if needed
  const gradientText = document.querySelector('.gradient-text');
  if (gradientText) {
    gradientText.addEventListener('mouseover', () => {
      gradientText.style.animation = 'pulse 2s infinite';
    });
    
    gradientText.addEventListener('mouseout', () => {
      gradientText.style.animation = '';
    });
  }
});
