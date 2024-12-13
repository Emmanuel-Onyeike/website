

(function() {
    "use strict";
  
   
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
  
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
  
    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  
    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
  
    });
  
    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  
    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');
  
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  
    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', aosInit);
  
    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  
    /**
     * Initiate Pure Counter
     */
    new PureCounter();
  
    /**
     * Init swiper sliders
     */
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
  
        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    }
  
    window.addEventListener("load", initSwiper);
  
    /**
     * Frequently Asked Questions Toggle
     */
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
      faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active');
      });
    });
  
    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener('load', function(e) {
      if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
          setTimeout(() => {
            let section = document.querySelector(window.location.hash);
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    });
  
    /**
     * Navmenu Scrollspy
     */
    let navmenulinks = document.querySelectorAll('.navmenu a');
  
    function navmenuScrollspy() {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      })
    }
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
  
  })();

  // Initialize EmailJS with your user ID (from EmailJS dashboard)
(function() {
    emailjs.init("DIwVNCY2gaXjY0vaP");  // Replace with your EmailJS user ID
  })();
  
  // Handle form submission
  document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Show loading indicator
    document.querySelector('.loading').style.display = 'block';
    
    // Collect email input value
    const userEmail = document.getElementById('userEmail').value;
  
    // Validate email
    if (!userEmail) {
      document.querySelector('.error-message').textContent = 'Please enter a valid email address.';
      document.querySelector('.error-message').style.display = 'block';
      document.querySelector('.loading').style.display = 'none';
      return;
    }
  
    // Send email using EmailJS service
    emailjs.sendForm('service_o6wtntv', 'template_ln8qkyt', this)
      .then(function(response) {
        console.log('Success!', response);
        document.querySelector('.sent-message').style.display = 'block';
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.error-message').style.display = 'none';
      }, function(error) {
        console.log('Failed...', error);
        document.querySelector('.error-message').textContent = 'Something went wrong, please try again.';
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.loading').style.display = 'none';
      });
  });
  

  document.getElementById("liveChatBtn").addEventListener("click", function() {
    // Replace the URL below with your live chat link
    window.location.href = "#******";
  });

  // JavaScript to handle the button click and show notification
document.getElementById('liveChatBtn').addEventListener('click', function(event) {
  // Prevent the default action (e.g., redirecting to another page)
  event.preventDefault();
  
  // Show notification
  var notification = document.getElementById('notification');
  notification.textContent = 'Under maintenance, check back later';
  notification.style.display = 'block';

  // Hide notification after 3 seconds
  setTimeout(function() {
      notification.style.display = 'none';
  }, 9000); // Hides after 3 seconds
});
// JavaScript to handle the button click and show notification for the Chat Bot button
document.getElementById('chatBotBtn').addEventListener('click', function(event) {
  // Prevent the default action (e.g., redirecting to another page)
  event.preventDefault();
  
  // Show notification
  var notification = document.getElementById('notification');
  notification.textContent = 'Under maintenance, check back later';
  notification.style.display = 'block';

  // Hide notification after 3 seconds
  setTimeout(function() {
      notification.style.display = 'none';
  }, 9000); // Hides after 3 seconds
});
