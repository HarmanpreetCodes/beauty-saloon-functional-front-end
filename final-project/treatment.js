document.addEventListener("DOMContentLoaded", function () {
    // Image Lightbox
    const treatmentImages = document.querySelectorAll(".treatment-image");
    treatmentImages.forEach((image) => {
      image.addEventListener("click", function () {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
  
        const largeImage = document.createElement("img");
        largeImage.src = image.src;
        lightbox.appendChild(largeImage);
  
        lightbox.addEventListener("click", function () {
          lightbox.remove();
        });
  
        document.body.appendChild(lightbox);
      });
    });
  
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
    
    scrollToTopBtn.addEventListener("click", scrollToTop);
    
    const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const darkModeClassName = "dark-mode";

function toggleDarkMode() {
  body.classList.toggle(darkModeClassName);
}

darkModeToggle.addEventListener("click", toggleDarkMode);

      
    });
    
  
  
  