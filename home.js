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