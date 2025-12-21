 let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let autoSlideInterval;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
      
      if (index >= slides.length) {
        currentSlideIndex = 0;
      } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
      } else {
        currentSlideIndex = index;
      }
      
      slides[currentSlideIndex].classList.add('active');
      dots[currentSlideIndex].classList.add('active');
    }

    function changeSlide(direction) {
      showSlide(currentSlideIndex + direction);
      resetAutoSlide();
    }

    function currentSlide(index) {
      showSlide(index);
      resetAutoSlide();
    }

    function autoSlide() {
      currentSlideIndex++;
      showSlide(currentSlideIndex);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(autoSlide, 5000);
    }

    autoSlideInterval = setInterval(autoSlide, 5000);

    function toggleMenu() {
      const menu = document.getElementById('navMenu');
      menu.classList.toggle('active');
    }

    window.addEventListener('resize', function() {
      const menu = document.getElementById('navMenu');
      if (window.innerWidth > 768) {
        menu.classList.remove('active');
      }
    });
    function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

// Theme Toggle Function
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('themeIcon');
  
  // Toggle dark mode class
  body.classList.toggle('dark-mode');
  
  // Check if dark mode is active
  if (body.classList.contains('dark-mode')) {
    // Change to sun icon for light mode option
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    // Save preference
    localStorage.setItem('theme', 'dark');
  } else {
    // Change back to moon icon for dark mode option
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    // Save preference
    localStorage.setItem('theme', 'light');
  }
}

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;
  const themeIcon = document.getElementById('themeIcon');
  
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const navMenu = document.getElementById('navMenu');
  const menuButton = document.querySelector('.mobile-menu-button');
  
  if (!navMenu.contains(e.target) && !menuButton.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navMenu').classList.remove('active');
  });
});