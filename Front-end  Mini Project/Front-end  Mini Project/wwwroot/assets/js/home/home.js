"use strict";

document.addEventListener("DOMContentLoaded", function () {
    let menuBtn = document.getElementById("menuBtn");
    let sidebar = document.getElementById("sidebar");
    let closeBtn = document.getElementById("closeBtn");
    
    let newMenuBtn = document.getElementById("searchIcon");
    let newSidebar = document.getElementById("newSidebar");
    let newCloseBtn = document.getElementById("newCloseBtn");

  
    menuBtn.addEventListener("click", function () {
        sidebar.classList.add("show");
        newSidebar.classList.remove("show"); 
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("show");
    });

    newMenuBtn.addEventListener("click", function () {
        newSidebar.classList.add("show");
        sidebar.classList.remove("show"); 
    });
    
    newCloseBtn.addEventListener("click", function () {
        newSidebar.classList.remove("show");
    });
});

document.querySelectorAll(".product_variation_one_boxed").forEach((box) => {
    box.addEventListener("mouseenter", function () {
      this.style.zIndex = "10"; 
      this.style.transform = "scale(1.1)";
      this.style.transition = "transform 0.3s ease, z-index 0s";
    });
  
    box.addEventListener("mouseleave", function () {
      this.style.zIndex = "1";
      this.style.transform = "scale(1)";
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    
    filterProducts(1);
});





function filterProducts(category) {
   
    const buttons = document.querySelectorAll('.category-button');

  
    buttons.forEach(button => button.classList.remove('active'));

    buttons[category - 1].classList.add('active');

   
    const allCards = document.querySelectorAll('.product-card');
    allCards.forEach(card => card.classList.remove('active'));

   
    const selectedCards = document.querySelectorAll(`.category-${category}`);
    selectedCards.forEach(card => card.classList.add('active'));
}

document.addEventListener("DOMContentLoaded", function () {
    const dots = document.querySelectorAll(".dot");
    const slider = document.querySelector(".slider");
    let currentIndex = 0;

    
    function changeSlide(index) {
        const totalSlides = document.querySelectorAll(".slider-item").length;
        currentIndex = (index + totalSlides) % totalSlides;
        
        slider.style.transition = "transform 0.5s ease";
        slider.style.transform = `translateX(-${currentIndex * (100 / 4)}%)`; 
        updateDots();
    }

   
    function updateDots() {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            changeSlide(index);
        });
    });

  
    changeSlide(currentIndex);
});
