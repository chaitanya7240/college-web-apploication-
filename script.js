window.addEventListener('scroll', function() {
    var floatingWindow = document.getElementById('floating-window');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    floatingWindow.style.top = (50 + scrollTop / 10) + '%'; // Adjust the scroll speed by changing the divisor
  });
  
  var slideIndex = 0;

  // Call the showSlides function immediately to start the slideshow
  showSlides();
  
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";  
      setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
  
  var slideIndex = 0;

  // Call the showSlides function immediately to start the slideshow
  showSlides();
  
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";  
  
      // Automatically change the slide index every 5 seconds
      setTimeout(function() {
          plusSlides(1);
          showSlides();
      }, 5000); // Change image every 5 seconds
  }
  
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }
  
var slideIndex = 0;

// Call the showSlides function when the document is ready
document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}
function nextSlide() {
    plusSlides(1); // Call the plusSlides function with a parameter of 1 to move to the next slide
}

// Example JavaScript to dynamically add notices
document.addEventListener("DOMContentLoaded", function() {
    var noticeBoard = document.querySelector('.notice-board');
    var notices = ['Notice 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                   'Notice 5: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                   'Notice 6: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'];
    
    notices.forEach(function(notice) {
        var noticeElement = document.createElement('div');
        noticeElement.classList.add('notice');
        noticeElement.textContent = notice;
        noticeBoard.appendChild(noticeElement);
    });
});
var marqueeElement = document.querySelector('.notice-board marquee');

function stopScrolling() {
    marqueeElement.stop();
}

function startScrolling() {
    marqueeElement.start();
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
function closeAdvertisement() {
    document.getElementById('advertisement').style.display = 'none';
}
document.getElementById('advertisement').style.display = 'block';
function toggleNoticeBoard() {
    var noticeBoard = document.getElementById('notice-board');
    var toggleButton = document.querySelector('.toggle-notice-board');
    
    if (noticeBoard.style.right === '0px') {
        noticeBoard.style.right = '-200px';
        toggleButton.style.right = '-40px';
    } else {
        noticeBoard.style.right = '0px';
        toggleButton.style.right = '160px';
    }
}

function expandNotice(notice) {
    // Toggle a class to expand or collapse the clicked notice
    notice.classList.toggle('expanded');
}
// script.js
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("footer").style.visibility = "visible"; /* Show the footer */
  } else {
    document.getElementById("footer").style.visibility = "hidden"; /* Hide the footer */
  }
}


